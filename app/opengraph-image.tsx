import { ImageResponse } from "next/og";

export const alt = "Justin Angelo Perez — Software, frameworks, and digital systems";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
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
            width: "520px",
            height: "520px",
            borderRadius: "999px",
            right: "-120px",
            top: "-180px",
            background: "rgba(126, 99, 255, 0.17)",
            filter: "blur(50px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "999px",
            left: "-180px",
            bottom: "-260px",
            background: "rgba(57, 207, 235, 0.15)",
            filter: "blur(50px)",
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
            JAP
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
              Justin Angelo Perez
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
              Building software, frameworks, and digital systems.
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
            Portfolio
          </div>
        </div>
      </div>
    ),
    size,
  );
}
