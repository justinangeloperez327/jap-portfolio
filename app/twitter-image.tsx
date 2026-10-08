import { brand } from "@/data";
import { createSocialImage } from "@/lib/social-image";

export const alt = `${brand.title} — ${brand.description}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return createSocialImage();
}
