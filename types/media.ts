export type ResponsiveFocalPosition = {
  mobile: string;
  tablet?: string;
  desktop?: string;
};

export type CinematicArtwork = {
  src?: string;
  alt: string;
  placeholderLabel: string;
  position: ResponsiveFocalPosition;
  sizes?: string;
};

export type CinematicOverlayDirection =
  | "left"
  | "right"
  | "bottom"
  | "none";
