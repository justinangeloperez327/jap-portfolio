# Contact Form

The Contact page submits to `POST /api/contact`.

## Validation

Validation runs on both the client and server.

- Name: 2–80 characters
- Email: valid email format, maximum 160 characters
- Subject: 3–120 characters
- Message: 20–3,000 characters

The form exposes field-level errors through `aria-invalid` and `aria-describedby`, and submission status is announced through a live region.

A hidden honeypot field provides a lightweight first spam check.

## Delivery

The route sends mail through the Resend REST API without adding an SDK dependency.

Configure these environment variables in Vercel:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

`CONTACT_FROM_EMAIL` must be a sender address accepted by the configured Resend account/domain.

If delivery is not configured, the API returns a service-unavailable response and the UI shows a failure state instead of pretending the message was sent.

## States

The form supports:

- Idle
- Client validation errors
- Sending / disabled submit state
- Server validation errors
- Delivery failure
- Successful send + form reset
