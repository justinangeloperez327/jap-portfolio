export type ContactField =
  | "name"
  | "email"
  | "subject"
  | "message";

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};

export type ContactErrors = Partial<
  Record<ContactField, string>
>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeContactPayload(
  value: unknown,
): ContactPayload {
  const payload =
    typeof value === "object" && value !== null
      ? (value as Record<string, unknown>)
      : {};

  return {
    name:
      typeof payload.name === "string"
        ? payload.name.trim()
        : "",
    email:
      typeof payload.email === "string"
        ? payload.email.trim()
        : "",
    subject:
      typeof payload.subject === "string"
        ? payload.subject.trim()
        : "",
    message:
      typeof payload.message === "string"
        ? payload.message.trim()
        : "",
    website:
      typeof payload.website === "string"
        ? payload.website.trim()
        : "",
  };
}

export function validateContactPayload(
  payload: ContactPayload,
): ContactErrors {
  const errors: ContactErrors = {};

  if (payload.name.length < 2) {
    errors.name = "Enter your name.";
  } else if (payload.name.length > 80) {
    errors.name = "Keep your name under 80 characters.";
  }

  if (!emailPattern.test(payload.email)) {
    errors.email = "Enter a valid email address.";
  } else if (payload.email.length > 160) {
    errors.email = "Keep your email under 160 characters.";
  }

  if (payload.subject.length < 3) {
    errors.subject = "Add a short subject.";
  } else if (payload.subject.length > 120) {
    errors.subject = "Keep the subject under 120 characters.";
  }

  if (payload.message.length < 20) {
    errors.message =
      "Please add a little more detail to your message.";
  } else if (payload.message.length > 3000) {
    errors.message =
      "Keep the message under 3,000 characters.";
  }

  return errors;
}
