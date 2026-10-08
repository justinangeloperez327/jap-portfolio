export type PublicLink = {
  label: "GitHub" | "LinkedIn" | "Email";
  href: string | null;
  external: boolean;
};

export function getPublicLinks(): readonly PublicLink[] {
  const linkedIn = process.env.PUBLIC_LINKEDIN_URL?.trim() || null;
  const email = process.env.PUBLIC_CONTACT_EMAIL?.trim() || null;

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
