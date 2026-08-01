import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kigali Innovation City – Investment Opportunity";
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
          background: "linear-gradient(135deg, #0E222B 0%, #1a3340 100%)",
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
              background: "#F5D424",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 700,
              color: "#0E222B",
            }}
          >
            K
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "22px", fontWeight: 600, color: "white" }}>
              Kigali Innovation City
            </span>
            <span style={{ fontSize: "14px", color: "#F5D424", letterSpacing: "0.1em" }}>
              DIGITAL HEART OF AFRICA
            </span>
          </div>
        </div>
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: "800px",
          }}
        >
          Investment Opportunity
        </h1>
        <p style={{ fontSize: "24px", color: "rgba(255,255,255,0.7)", maxWidth: "700px" }}>
          62-hectare mixed-use innovation hub · Rwanda
        </p>
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "48px",
          }}
        >
          {[
            { val: "62 ha", label: "Development" },
            { val: "5", label: "Phases" },
            { val: "4", label: "Universities" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "32px", fontWeight: 700, color: "#F5D424" }}>
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
