import {
  normalizeContactPayload,
  validateContactPayload,
} from "@/lib/contact";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      {
        ok: false,
        message: "Invalid request body.",
      },
      { status: 400 },
    );
  }

  const payload = normalizeContactPayload(body);
  const errors = validateContactPayload(payload);

  if (Object.keys(errors).length > 0) {
    return Response.json(
      {
        ok: false,
        message: "Check the submitted fields and try again.",
        errors,
      },
      { status: 400 },
    );
  }

  if (payload.website) {
    return Response.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return Response.json(
      {
        ok: false,
        message:
          "Contact delivery is not configured on this deployment yet.",
      },
      { status: 503 },
    );
  }

  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safeSubject = escapeHtml(payload.subject);
  const safeMessage = escapeHtml(payload.message).replaceAll(
    "\n",
    "<br />",
  );

  const response = await fetch(
    "https://api.resend.com/emails",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: `Portfolio contact: ${payload.subject}`,
        text: [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Subject: ${payload.subject}`,
          "",
          payload.message,
        ].join("\n"),
        html: `
          <h2>New portfolio contact</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <hr />
          <p>${safeMessage}</p>
        `,
      }),
    },
  );

  if (!response.ok) {
    return Response.json(
      {
        ok: false,
        message:
          "The message could not be delivered. Please try again later.",
      },
      { status: 502 },
    );
  }

  return Response.json({
    ok: true,
    message: "Message sent.",
  });
}
