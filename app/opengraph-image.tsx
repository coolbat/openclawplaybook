import { ImageResponse } from "next/og";

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
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 60px",
          background:
            "linear-gradient(135deg, rgba(246,238,232,1) 0%, rgba(255,244,237,1) 58%, rgba(255,228,213,1) 100%)",
          color: "#2c1d19",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "2px solid rgba(237,106,60,0.35)",
            color: "#ed6a3c",
            borderRadius: 999,
            padding: "10px 18px",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          OpenClaw Quick Start
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 74,
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              maxWidth: 900,
            }}
          >
            OpenClaw Playbook
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.28,
              color: "#7a665c",
              maxWidth: 860,
            }}
          >
            Bilingual quick start, starter workflows, and symptom-first troubleshooting for your first useful OpenClaw run.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 14,
            color: "#b84a2f",
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          <span>Quick Start</span>
          <span>Learn</span>
          <span>Templates</span>
          <span>Troubleshoot</span>
        </div>
      </div>
    ),
    size
  );
}
