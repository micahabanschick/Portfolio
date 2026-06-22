import { ImageResponse } from "next/og";
import { hero, site } from "@/data/content";

// Generated at build time into a static image for the link preview card.
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.title;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#07070b",
          backgroundImage:
            "radial-gradient(1000px 600px at 0% 0%, #2a0b4e 0%, transparent 60%), radial-gradient(900px 600px at 100% 100%, #4a0b3a 0%, transparent 55%)",
          color: "#f4f4f8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#d946ef",
            marginBottom: 24,
          }}
        >
          Portfolio
        </div>
        <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1.05 }}>
          {hero.name}
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            marginTop: 8,
            background: "linear-gradient(100deg, #7c3aed, #d946ef, #22d3ee)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {hero.title}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#9a9ab0",
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          {hero.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
