import { useState } from "react";
import svgPaths from "../../imports/svg-q0lvc4xdz4";
import { NavigationOverlay } from "./NavigationOverlay";

// ── Gallery data ───────────────────────────────────────────────────────────────

interface GalleryItem {
  url: string;
  height: number;
}

// Distribute 12 images across 3 columns with deliberately uneven heights
const col1: GalleryItem[] = [
  {
    url: "/images/gallery-1.jpeg",
    height: 300,
  },
  {
    url: "/images/gallery-2.jpeg",   
    height: 480,
  },
  {
    url: "/images/gallery-10.jpeg",
    height: 340,
  },
  {
    url: "/images/gallery-4.jpeg",
    height: 460,
  },
];

const col2: GalleryItem[] = [
  {
    url: "/images/gallery-5.jpeg",
    height: 480,
  },
  {
    url: "/images/gallery-3.jpeg",
    height: 310,
  },
  {
    url: "/images/gallery-9.jpeg",
    height: 450,
  },
  {
    url: "/images/gallery-8.jpeg",
    height: 330,
  },
];

const col3: GalleryItem[] = [
  {
    url: "/images/gallery-7.jpeg",
    height: 330,
  },
  {
    url: "/images/gallery-11.jpeg",
    height: 480,
  },
  {
    url: "/images/gallery-6.jpeg",
    height: 300,
  },
  {
    url: "/images/gallery-12.jpeg",
    height: 430,
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function Header() {
  return (
    <div className="absolute contents left-[-17px] top-[-361px]" data-name="header">
      {/* Solid pink fill so the navbar area is always covered */}
      <div className="absolute bg-[#D4896A] left-0 top-0 w-[1280px] h-[850px]" />
      <div className="absolute h-[1211px] left-[-17px] top-[-361px] w-[1297px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1297 1211">
          <path d={svgPaths.p9fb7900} fill="#D4896A" />
        </svg>
      </div>
      <div className="absolute bg-[rgba(18,10,8,0.28)] h-[125px] left-0 opacity-48 top-0 w-[1280px]" />
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[21px] text-[#f2d6cc] text-[32px] top-[48px] w-[362px]">SHRIYA POTHUKUCHI</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[792px] text-[#f2d6cc] text-[32px] top-[41px] w-[104px]">WORK</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[922px] text-[#f2d6cc] text-[32px] top-[41px] w-[152px]">GALLERY</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[1098px] text-[#f2d6cc] text-[32px] top-[41px] w-[118px]">ABOUT</p>
    </div>
  );
}

function Bar() {
  return (
    <div className="absolute contents left-[39px] top-[444px]" data-name="bar">
      <div className="absolute h-[180px] left-[39px] top-[444px] w-[548px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 548 180">
          <path d={svgPaths.p1fa91980} fill="#AB7559" />
        </svg>
      </div>
      <div className="absolute bg-[#120a08] h-[163px] left-[63px] opacity-88 rounded-[10px] top-[444px] w-[524px]" />
      <div className="absolute font-['Clash_Display',sans-serif] h-[108px] leading-[0] left-[107px] not-italic text-[#d4896a] text-[64px] top-[477px] w-[350px]">
        <p className="leading-[normal] mb-0">Gallery</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute contents leading-[normal] left-[89px] top-[185px]" data-name="heading">
      {/* "My " in dark (punches through the terracotta art) */}
      <p className="absolute font-['Clash_Display',sans-serif] left-[89px] not-italic text-[#120a08] text-[64px] top-[185px] whitespace-nowrap">
        My works
      </p>
      {/* "works" in cream overlaid on top to create two-tone effect */}
      <p className="absolute font-['Clash_Display',sans-serif] left-[89px] not-italic text-[#f2d6cc] text-[64px] top-[185px] whitespace-nowrap">
        {"My\u00A0"}
      </p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-medium left-[133px] text-[#f2d6cc] text-[24px] top-[264px] w-[1100px]">
        A curated look across all creative work — illustration, design, animation, and beyond.
      </p>
    </div>
  );
}

// ── Image tile with hover overlay ─────────────────────────────────────────────

interface TileProps {
  item: GalleryItem;
  onClick: (item: GalleryItem) => void;
}

function Tile({ item, onClick }: TileProps) {
  return (
    <div
      className="relative overflow-hidden rounded-[10px] cursor-pointer group"
      style={{ height: item.height, marginBottom: 20, flexShrink: 0 }}
      onClick={() => onClick(item)}
    >
      {/* Photo */}
      <img
        src={item.url}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(to top, rgba(18,10,8,0.88) 0%, rgba(18,10,8,0.3) 50%, transparent 100%)", padding: "20px 22px" }}
      >
        <p
          className="font-['Clash_Display',sans-serif] not-italic leading-[normal] text-[#d4896a]"
          style={{ fontSize: 20 }}
        >
          {item.title}
        </p>
        <div className="mt-[8px]">
          <span
            className="inline-block bg-[rgba(122,92,84,0.85)] rounded-[6px] font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[#f2d6cc] leading-[normal]"
            style={{ fontSize: 13, padding: "4px 12px" }}
          >
            {item.category}
          </span>
        </div>
      </div>

      {/* Expand icon on hover */}
      <div
        className="absolute top-[14px] right-[14px] flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ width: 34, height: 34, background: "rgba(212,137,106,0.18)", border: "1px solid rgba(212,137,106,0.45)" }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M9 1h4v4M5 13H1V9M13 1L8 6M1 13l5-5" stroke="#f2d6cc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────────

interface LightboxProps {
  item: GalleryItem;
  onClose: () => void;
}

function Lightbox({ item, onClose }: LightboxProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ backgroundColor: "rgba(18,10,8,0.93)", zIndex: 200 }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center"
        style={{ maxWidth: "90vw" }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.url}
          alt={item.title}
          className="object-contain rounded-[12px]"
          style={{ maxWidth: "88vw", maxHeight: "78vh" }}
        />
        {/* Caption row */}
        <div className="mt-[18px] w-full flex items-center justify-between" style={{ padding: "0 4px" }}>
          <div>
            <p
              className="font-['Clash_Display',sans-serif] not-italic leading-[normal] text-[#d4896a]"
              style={{ fontSize: 24 }}
            >
              {item.title}
            </p>
            <p
              className="font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] text-[#f2d6cc] mt-[5px]"
              style={{ fontSize: 16 }}
            >
              {item.category}
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-[40px] flex items-center justify-center rounded-full transition-all duration-200 hover:border-[#d4896a]"
            style={{
              width: 44, height: 44,
              background: "rgba(212,137,106,0.12)",
              border: "1px solid rgba(242,214,204,0.3)",
              flexShrink: 0,
            }}
            aria-label="Close lightbox"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2 2L13 13M13 2L2 13" stroke="#f2d6cc" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main export ────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  return (
    <>
      <div
        className="bg-[#120a08] relative w-[1280px]"
        style={{ height: 2650 }}
        data-name="Gallery"
      >
        <Header />
        <Bar />

        <div className="absolute left-[-1px] overflow-clip size-[80px] top-[184px]">
          <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4">
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24.6667 40"
            >
              <path d={svgPaths.p70c62c0} fill="#1D1B20" />
            </svg>
          </div>
        </div>

        <div
          className="absolute flex"
          style={{ top: 744, left: 44, right: 44, gap: 20 }}
        >
          <div className="flex flex-col" style={{ flex: "1 1 0", gap: 0 }}>
            {col1.map((item) => (
              <Tile key={item.url} item={item} onClick={setLightbox} />
            ))}
          </div>

          <div className="flex flex-col" style={{ flex: "1 1 0", gap: 0 }}>
            {col2.map((item) => (
              <Tile key={item.url} item={item} onClick={setLightbox} />
            ))}
          </div>

          <div className="flex flex-col" style={{ flex: "1 1 0", gap: 0 }}>
            {col3.map((item) => (
              <Tile key={item.url} item={item} onClick={setLightbox} />
            ))}
          </div>
        </div>

        <NavigationOverlay showBack backTo="/" />
      </div>

      {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}
    </>
  );
}
