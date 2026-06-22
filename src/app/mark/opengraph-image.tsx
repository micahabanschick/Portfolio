import { ImageResponse } from "next/og";
import { markHero, markSite } from "@/data/mark";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = markSite.title;

export default function MarkOpengraphImage() {
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
          backgroundColor: "#f7f3ec",
          backgroundImage:
            "radial-gradient(800px 500px at 100% 0%, #dcebe8 0%, transparent 60%)",
          color: "#211c16",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#0f766e",
            marginBottom: 20,
            fontFamily: "sans-serif",
          }}
        >
          Psychiatry · Therapy · Author
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>
          {markHero.name}
        </div>
        <div style={{ fontSize: 40, color: "#0f766e", marginTop: 12 }}>
          {markHero.title}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#6f6557",
            marginTop: 28,
            maxWidth: 940,
            fontFamily: "sans-serif",
          }}
        >
          {`${markHero.location} · ${markHero.years}`}
        </div>
      </div>
    ),
    { ...size }
  );
}
