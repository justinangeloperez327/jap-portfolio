export type PublicLink = {
  label: "GitHub" | "LinkedIn" | "Email";
  href: string | null;
  external: boolean;
};

function normalizeExternalUrl(value: string | undefined) {
  const trimmed = value?.trim();

  if (!trimmed) {
    return null;
  }

  try {
    const url = new URL(trimmed);

    if (url.protocol !== "https:" && url.protocol !== "http:") {
      return null;
    }

    return url.toString();
  } catch {
    return null;
  }
}

function normalizePublicEmail(value: string | undefined) {
  const trimmed = value?.trim();

  if (
    !trimmed ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
  ) {
    return null;
  }

  return trimmed;
}

export function getPublicLinks(): readonly PublicLink[] {
  const linkedIn = normalizeExternalUrl(
    process.env.PUBLIC_LINKEDIN_URL,
  );
  const email = normalizePublicEmail(
    process.env.PUBLIC_CONTACT_EMAIL,
  );

  return [
    {
      label: "GitHub",
      href: "https://github.com/justinangeloperez327",
      external: true,
    },
    {
      label: "LinkedIn",
      href: linkedIn,
      external: true,
    },
    {
      label: "Email",
      href: email ? `mailto:${email}` : null,
      external: false,
    },
  ];
}
