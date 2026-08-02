import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Apex by Citisquare Africa | Kigali Innovation City";
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
          background: "linear-gradient(135deg, #1a1a1a 0%, #0d1117 100%)",
          padding: "60px 80px",
        }}
      >
        <span style={{ fontSize: "14px", color: "#C9A227", letterSpacing: "0.15em", marginBottom: "16px" }}>
          CITISQUARE AFRICA
        </span>
        <h1 style={{ fontSize: "64px", fontWeight: 700, color: "white", lineHeight: 1.1, marginBottom: "16px" }}>
          The Apex
        </h1>
        <p style={{ fontSize: "22px", color: "#C9A227", marginBottom: "24px" }}>
          East Africa&apos;s Premier Technology Investment Address
        </p>
        <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.65)", maxWidth: "800px", lineHeight: 1.5 }}>
          GreenTech Tower · KIC Main Entrance · RDB Free Trade Zone
        </p>
        <div style={{ display: "flex", gap: "40px", marginTop: "48px" }}>
          {[
            { val: "US$28M", label: "Project Cost" },
            { val: "$40.7M", label: "Knight Frank Value" },
            { val: "5", label: "Revenue Streams" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "32px", fontWeight: 700, color: "#C9A227" }}>{s.val}</span>
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
