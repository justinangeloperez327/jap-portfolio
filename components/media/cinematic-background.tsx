import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import type {
  CinematicArtwork,
  CinematicOverlayDirection,
} from "@/types";

import { ArtworkPlaceholder } from "./artwork-placeholder";
import { AtmosphereLayer } from "./atmosphere-layer";
import { GradientOverlay } from "./gradient-overlay";
import { ImageLayer } from "./image-layer";
import { ParallaxLayer } from "./parallax-layer";

type CinematicBackgroundProps = {
  artwork: CinematicArtwork;
  priority?: boolean;
  overlay?: CinematicOverlayDirection;
  children?: ReactNode;
  className?: string;
  imageClassName?: string;
  parallaxDepth?: number;
};

export function CinematicBackground({
  artwork,
  priority = false,
  overlay = "left",
  children,
  className,
  imageClassName,
  parallaxDepth = 1,
}: CinematicBackgroundProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 isolate overflow-hidden bg-background",
        className,
      )}
    >
      <ParallaxLayer
        depth={parallaxDepth}
        className="layer-background absolute inset-0"
      >
        {artwork.src ? (
          <ImageLayer
            src={artwork.src}
            alt={artwork.alt}
            position={artwork.position}
            priority={priority}
            sizes={artwork.sizes}
            className={imageClassName}
          />
        ) : (
          <ArtworkPlaceholder label={artwork.placeholderLabel} />
        )}
      </ParallaxLayer>

      <AtmosphereLayer className="layer-atmosphere" />
      <GradientOverlay
        direction={overlay}
        className="layer-atmosphere"
      />

      {children}
    </div>
  );
}
