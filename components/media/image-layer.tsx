import type { CSSProperties } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import type { ResponsiveFocalPosition } from "@/types";

type ImageLayerProps = {
  src: string;
  alt: string;
  position: ResponsiveFocalPosition;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

type FocalPositionStyle = CSSProperties & {
  "--media-position-mobile": string;
  "--media-position-tablet": string;
  "--media-position-desktop": string;
};

export function ImageLayer({
  src,
  alt,
  position,
  priority = false,
  sizes = "100vw",
  className,
}: ImageLayerProps) {
  const style: FocalPositionStyle = {
    "--media-position-mobile": position.mobile,
    "--media-position-tablet": position.tablet ?? position.mobile,
    "--media-position-desktop":
      position.desktop ?? position.tablet ?? position.mobile,
  };

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      style={style}
      className={cn(
        "cinematic-object-position object-cover",
        className,
      )}
    />
  );
}
