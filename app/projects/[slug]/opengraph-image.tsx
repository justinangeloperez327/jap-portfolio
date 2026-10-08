import { getProjectBySlug } from "@/data";
import {
  createSocialImage,
  socialImageSize,
} from "@/lib/social-image";

export const alt = "JAP Portfolio project case study";
export const size = socialImageSize;
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return createSocialImage({
    title: project?.title ?? "Project",
    description:
      project?.description ??
      "Software engineering project case study.",
    label: project?.category ?? "Case Study",
  });
}
