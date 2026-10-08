import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #070a12 0%, #0d1728 60%, #191329 100%)",
          color: "#f5f7fa",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 58,
          fontWeight: 700,
          letterSpacing: "-0.08em",
        }}
      >
        JAP
      </div>
    ),
    size,
  );
}
