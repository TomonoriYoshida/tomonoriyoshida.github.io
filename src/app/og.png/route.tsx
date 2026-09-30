import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { ogImage } from "@/data/site";

// Rendered to out/og.png at build time. Not the opengraph-image file
// convention: a static export writes that without an extension, and GitHub
// Pages would serve it as application/octet-stream instead of image/png.
export const dynamic = "force-static";

// Noto Sans JP subset to the characters of this image (the default font has
// no Japanese glyphs). After changing the text, regenerate both files from
// https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400&text=... (and @700);
// without a browser User-Agent, Google Fonts serves TrueType, which ImageResponse needs.
const fontDirectory = join(process.cwd(), "src/app/fonts");
const regular = await readFile(join(fontDirectory, "og-noto-sans-jp-400.ttf"));
const bold = await readFile(join(fontDirectory, "og-noto-sans-jp-700.ttf"));

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#ffffff",
          color: "#171717",
          borderTop: "16px solid #0f766e",
          fontFamily: "Noto Sans JP",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#0f766e" }}>Portfolio</div>
          <div style={{ marginTop: 8, fontSize: 104, fontWeight: 700 }}>Yoshida</div>
          <div style={{ marginTop: 16, fontSize: 44, fontWeight: 700 }}>ソフトウェアエンジニア</div>
          <div style={{ marginTop: 12, fontSize: 34, color: "#5c5c5c" }}>
            バックエンド / 設計 / プロジェクトマネジメント
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#5c5c5c" }}>
          <div>PHP · Laravel · API設計 · 外部データの取込</div>
          <div>tomonoriyoshida.github.io</div>
        </div>
      </div>
    ),
    {
      width: ogImage.width,
      height: ogImage.height,
      fonts: [
        { name: "Noto Sans JP", data: regular, weight: 400, style: "normal" },
        { name: "Noto Sans JP", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
