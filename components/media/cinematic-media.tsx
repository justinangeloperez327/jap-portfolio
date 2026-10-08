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
  scrollZoom?: boolean;
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
  scrollZoom = false,
}: CinematicMediaProps) {
  return (
    <div
      data-scroll-zoom={scrollZoom ? "true" : undefined}
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
          preload={priority}
          sizes={sizes}
          className={imageClassName}
        />
      ) : (
        <ArtworkPlaceholder label={label} />
      )}
    </div>
  );
}
