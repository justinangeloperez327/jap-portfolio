"use client";

import {
  type FormEvent,
  useRef,
  useState,
} from "react";

import {
  normalizeContactPayload,
  type ContactErrors,
  validateContactPayload,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

type SubmitState =
  | { status: "idle"; message: "" }
  | { status: "loading"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const initialSubmitState: SubmitState = {
  status: "idle",
  message: "",
};

const fieldClassName =
  "mt-2 w-full border border-border bg-background/45 px-4 py-3 text-sm text-foreground outline-none backdrop-blur-md transition-colors placeholder:text-muted-foreground/35 focus:border-primary/55 focus:ring-1 focus:ring-primary/35 disabled:cursor-not-allowed disabled:opacity-60";

function FieldError({
  id,
  message,
}: {
  id: string;
  message?: string;
}) {
  if (!message) {
    return null;
  }

  return (
    <p
      id={id}
      className="mt-2 text-xs leading-5 text-destructive"
    >
      {message}
    </p>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitState, setSubmitState] =
    useState<SubmitState>(initialSubmitState);

  const isSubmitting = submitState.status === "loading";

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = normalizeContactPayload({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      website: formData.get("website"),
    });

    const nextErrors = validateContactPayload(payload);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState({
        status: "error",
        message:
          "Check the highlighted fields and try again.",
      });
      return;
    }

    setSubmitState({
      status: "loading",
      message: "Sending your message…",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        errors?: ContactErrors;
      };

      if (!response.ok || !result.ok) {
        if (result.errors) {
          setErrors(result.errors);
        }

        setSubmitState({
          status: "error",
          message:
            result.message ??
            "The message could not be sent. Please try again.",
        });
        return;
      }

      formRef.current?.reset();
      setErrors({});
      setSubmitState({
        status: "success",
        message:
          "Message sent. Thanks — I’ll get back to you as soon as I can.",
      });
    } catch {
      setSubmitState({
        status: "error",
        message:
          "The message could not be sent. Check your connection and try again.",
      });
    }
  }

  return (
    <form
      ref={formRef}
      aria-label="Contact form"
      className="mt-6"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5">
        <div>
          <label
            htmlFor="contact-name"
            className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-foreground/65"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            maxLength={80}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={
              errors.name ? "contact-name-error" : undefined
            }
            placeholder="Your name"
            className={cn(
              fieldClassName,
              errors.name && "border-destructive/70",
            )}
          />
          <FieldError
            id="contact-name-error"
            message={errors.name}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-email"
              className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-foreground/65"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={160}
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email
                  ? "contact-email-error"
                  : undefined
              }
              placeholder="you@example.com"
              className={cn(
                fieldClassName,
                errors.email && "border-destructive/70",
              )}
            />
            <FieldError
              id="contact-email-error"
              message={errors.email}
            />
          </div>

          <div>
            <label
              htmlFor="contact-subject"
              className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-foreground/65"
            >
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              required
              minLength={3}
              maxLength={120}
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={
                errors.subject
                  ? "contact-subject-error"
                  : undefined
              }
              placeholder="Project or idea"
              className={cn(
                fieldClassName,
                errors.subject && "border-destructive/70",
              )}
            />
            <FieldError
              id="contact-subject-error"
              message={errors.subject}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-foreground/65"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            required
            minLength={20}
            maxLength={3000}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message
                ? "contact-message-error"
                : "contact-message-hint"
            }
            placeholder="Tell me what you are trying to build, improve, or solve."
            className={cn(
              fieldClassName,
              "resize-y",
              errors.message && "border-destructive/70",
            )}
          />
          <p
            id="contact-message-hint"
            className="mt-2 text-xs leading-5 text-muted-foreground/45"
          >
            20–3,000 characters.
          </p>
          <FieldError
            id="contact-message-error"
            message={errors.message}
          />
        </div>

        <div
          className="absolute -left-[9999px] h-px w-px overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor="contact-website">
            Website
          </label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-1 inline-flex min-h-12 w-full items-center justify-between border border-border bg-foreground px-5 text-sm font-medium text-background transition-opacity disabled:cursor-wait disabled:opacity-60"
        >
          <span>
            {isSubmitting ? "Sending…" : "Send Message"}
          </span>
          <span aria-hidden="true">
            {isSubmitting ? "…" : "→"}
          </span>
        </button>
      </div>

      <div
        aria-live="polite"
        role={
          submitState.status === "error"
            ? "alert"
            : "status"
        }
        className={cn(
          "mt-4 min-h-5 text-xs leading-5",
          submitState.status === "error"
            ? "text-destructive"
            : submitState.status === "success"
              ? "text-primary"
              : "text-muted-foreground/55",
        )}
      >
        {submitState.message}
      </div>
    </form>
  );
}
