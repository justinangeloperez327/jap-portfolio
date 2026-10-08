import { ImageResponse } from "next/og";

import { brand } from "@/data";

export const socialImageSize = {
  width: 1200,
  height: 630,
} as const;

type SocialImageOptions = {
  title?: string;
  description?: string;
  label?: string;
};

export function createSocialImage({
  title = brand.title,
  description = brand.description,
  label = "Portfolio",
}: SocialImageOptions = {}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(125deg, #070a12 0%, #0b1324 54%, #171126 100%)",
          color: "#f5f7fa",
          padding: "72px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            right: "-90px",
            top: "-130px",
            background: "rgba(126, 99, 255, 0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            left: "-160px",
            bottom: "-250px",
            background: "rgba(57, 207, 235, 0.12)",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: "-0.06em",
            }}
          >
            {brand.shortName}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                display: "flex",
                fontSize: 76,
                fontWeight: 700,
                lineHeight: 0.96,
                letterSpacing: "-0.055em",
                maxWidth: "900px",
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "780px",
                fontSize: 30,
                lineHeight: 1.35,
                color: "rgba(245, 247, 250, 0.66)",
              }}
            >
              {description}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 18,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(245, 247, 250, 0.45)",
            }}
          >
            <div
              style={{
                width: 36,
                height: 2,
                background: "#8de3f7",
              }}
            />
            {label}
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
