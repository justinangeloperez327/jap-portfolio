import { cn } from "@/lib/utils";
import type { ResponsiveFocalPosition } from "@/types";

import { ArtworkPlaceholder } from "./artwork-placeholder";
import { ImageLayer } from "./image-layer";

type CinematicMediaProps = {
  src?: string;
  alt: string;
  label?: string;
  priority?: boolean;
  sizes?: string;
  position?: ResponsiveFocalPosition;
  className?: string;
  imageClassName?: string;
};

export function CinematicMedia({
  src,
  alt,
  label = "Artwork placeholder",
  priority = false,
  sizes = "100vw",
  position = {
    mobile: "center",
    tablet: "center",
    desktop: "center",
  },
  className,
  imageClassName,
}: CinematicMediaProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-background",
        className,
      )}
    >
      {src ? (
        <ImageLayer
          src={src}
          alt={alt}
          position={position}
          priority={priority}
          sizes={sizes}
          className={imageClassName}
        />
      ) : (
        <ArtworkPlaceholder label={label} />
      )}
    </div>
  );
}
