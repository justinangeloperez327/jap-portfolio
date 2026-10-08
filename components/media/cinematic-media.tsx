import { cn } from "@/lib/utils";

import { ArtworkPlaceholder } from "./artwork-placeholder";
import { ImageLayer } from "./image-layer";

type CinematicMediaProps = {
  src?: string;
  alt: string;
  label?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
};

export function CinematicMedia({
  src,
  alt,
  label = "Artwork placeholder",
  priority = false,
  sizes = "100vw",
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
          position={{
            mobile: "center",
            tablet: "center",
            desktop: "center",
          }}
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
