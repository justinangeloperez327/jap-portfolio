import { brand } from "@/data";
import { createSocialImage, socialImageSize } from "@/lib/social-image";

export const alt = `${brand.title} — ${brand.description}`;
export const size = socialImageSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return createSocialImage();
}
