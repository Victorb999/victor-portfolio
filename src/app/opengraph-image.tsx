import { ImageResponse } from "next/og"

export const alt = "Victor Araújo - Senior Software Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

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
          background: "linear-gradient(135deg, #050410 0%, #311b63 60%, #2f52e0 100%)",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700 }}>Victor Araújo</div>
        <div style={{ fontSize: 48, color: "#a78bfa", marginTop: 16 }}>
          Senior Software Engineer
        </div>
        <div style={{ fontSize: 32, color: "#b4c3cb", marginTop: 32 }}>
          10+ years building products people enjoy using.
        </div>
      </div>
    ),
    size
  )
}
