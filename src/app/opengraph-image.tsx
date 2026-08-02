import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Citisquare Africa | Real Estate Investment Consultancy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #262626 0%, #1a1a1a 100%)",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "#C9A227",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 700,
              color: "#262626",
            }}
          >
            C
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "22px", fontWeight: 600, color: "white" }}>
              Citisquare Africa
            </span>
            <span style={{ fontSize: "14px", color: "#C9A227", letterSpacing: "0.1em" }}>
              REAL ESTATE INVESTMENT CONSULTANCY
            </span>
          </div>
        </div>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.15,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          Origination · Structuring · Development
        </h1>
        <p style={{ fontSize: "22px", color: "rgba(255,255,255,0.7)", maxWidth: "900px", lineHeight: 1.4 }}>
          Democratising access to legally structured, high-return real estate across Africa — underpinned by good governance at every stage.
        </p>
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "48px",
          }}
        >
          {[
            { val: "Origination", label: "High-potential assets" },
            { val: "Structuring", label: "Investable vehicles" },
            { val: "Delivery", label: "End-to-end development" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "24px", fontWeight: 700, color: "#C9A227" }}>
                {s.val}
              </span>
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
