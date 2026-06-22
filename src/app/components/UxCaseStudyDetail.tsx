import svgPaths from "../../imports/svg-uls2v2l8cn";
import { NavigationOverlay } from "./NavigationOverlay";

type GalleryImage = {
  src: string;
  alt: string;
  span?: 1 | 2 | 3;
  className?: string;
};

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  images?: GalleryImage[];
  columns?: 1 | 2 | 3;
};

export interface UxCaseStudyDetailProps {
  heroImage: string;
  heroAlt: string;
  title: string;
  subtitle: string;
  year: string;
  duration: string;
  tools: string;
  tags: string[];
  projectUrl: string;
  projectLabel: string;
  backTo?: string;
  sections: Section[];
}

function Header() {
  return (
    <div className="absolute contents left-[-17px] top-[-361px]" data-name="header">
      <div className="absolute h-[1211px] left-[-17px] top-[-361px] w-[1297px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1297 1211">
          <path d={svgPaths.p9fb7900} fill="var(--fill-0, #D4896A)" id="art" />
        </svg>
      </div>
      <div className="absolute bg-[rgba(18,10,8,0.28)] h-[125px] left-0 opacity-48 top-0 w-[1280px]" data-name="header" />
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[21px] text-[#f2d6cc] text-[32px] top-[48px] w-[362px]">SHRIYA POTHUKUCHI</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[792px] text-[#f2d6cc] text-[32px] top-[41px] w-[104px]">WORK</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[1098px] text-[#f2d6cc] text-[32px] top-[41px] w-[118px]">{`ABOUT `}</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[922px] text-[#f2d6cc] text-[32px] top-[41px] w-[152px]">GALLERY</p>
    </div>
  );
}

function BackChevron() {
  return (
    <div className="absolute left-0 overflow-clip size-[80px] top-[184px]" data-name="chevron_backward">
      <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6667 40">
          <path d={svgPaths.p70c62c0} fill="var(--fill-0, #1D1B20)" />
        </svg>
      </div>
    </div>
  );
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[16px] border border-[rgba(242,214,204,0.18)] bg-[rgba(122,92,84,0.26)] p-6">
      <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#d4896a] text-[16px] uppercase tracking-[0.12em]">{label}</p>
      <p className="mt-3 font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-[1.45] text-[#f2d6cc] text-[22px]">{value}</p>
    </div>
  );
}

function SectionBlock({ title, paragraphs = [], bullets = [], images = [], columns = 2 }: Section) {
  const gridClass =
    columns === 1
      ? "grid-cols-1"
      : columns === 3
        ? "grid-cols-3"
        : "grid-cols-2";

  return (
    <section className="mt-18">
      <h2 className="font-['Clash_Display',sans-serif] font-semibold text-[#d4896a] text-[40px] leading-[1.05]">{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p
          key={`${title}-paragraph-${index}`}
          className="mt-5 font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[#f2d6cc] text-[22px] leading-[1.65]"
        >
          {paragraph}
        </p>
      ))}
      {bullets.length > 0 && (
        <div className="mt-8 grid gap-4">
          {bullets.map((bullet, index) => (
            <div
              key={`${title}-bullet-${index}`}
              className="rounded-[14px] bg-[rgba(122,92,84,0.34)] px-6 py-5 font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#f2d6cc] text-[20px] leading-[1.55]"
            >
              {bullet}
            </div>
          ))}
        </div>
      )}
      {images.length > 0 && (
        <div className={`mt-8 grid ${gridClass} gap-6`}>
          {images.map((image, index) => (
            <div
              key={`${title}-image-${index}`}
              className={`overflow-hidden rounded-[18px] border border-[rgba(242,214,204,0.16)] bg-[rgba(122,92,84,0.2)] ${
                image.span === 2 ? "col-span-2" : image.span === 3 ? "col-span-3" : ""
              }`}
            >
              <img
                alt={image.alt}
                className={`h-full w-full object-cover ${image.className ?? ""}`}
                src={image.src}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default function UxCaseStudyDetail({
  heroImage,
  heroAlt,
  title,
  subtitle,
  year,
  duration,
  tools,
  tags,
  projectUrl,
  projectLabel,
  backTo = "/work/uxui",
  sections,
}: UxCaseStudyDetailProps) {
  return (
    <div className="bg-[#120a08] relative size-full">
      <Header />
      <BackChevron />

      <div className="absolute left-[76px] top-[343px] w-[1128px] pb-[160px]">
        <div className="overflow-hidden rounded-[24px] border border-[rgba(242,214,204,0.12)] bg-[rgba(122,92,84,0.16)]">
          <img alt={heroAlt} className="block h-[780px] w-full object-cover" src={heroImage} />
        </div>

        <div className="mt-20">
          <h1 className="font-['Clash_Display',sans-serif] font-semibold text-[#d4896a] text-[58px] leading-[1.02]">
            {title}
          </h1>
          <p className="mt-8 max-w-[1069px] font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[#f2d6cc] text-[24px] leading-[1.6]">
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6">
          <MetaCard label="Year" value={year} />
          <MetaCard label="Duration" value={duration} />
          <MetaCard label="Tools" value={tools} />
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {tags.map((tag) => (
            <div
              key={tag}
              className="rounded-[12px] bg-[rgba(122,92,84,0.82)] px-5 py-3 font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#f2d6cc] text-[18px] whitespace-nowrap"
            >
              {tag}
            </div>
          ))}
        </div>

        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex h-[58px] items-center rounded-[12px] bg-[#d4896a] px-8 font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#120a08] text-[20px]"
        >
          {projectLabel}
        </a>

        {sections.map((section) => (
          <SectionBlock key={section.title} {...section} />
        ))}
      </div>

      <NavigationOverlay showBack backTo={backTo} />
    </div>
  );
}
