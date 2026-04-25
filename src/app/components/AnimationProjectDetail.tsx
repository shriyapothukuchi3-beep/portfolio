import svgPaths from "../../imports/svg-uls2v2l8cn";
import { NavigationOverlay } from "./NavigationOverlay";

export interface AnimationProjectDetailProps {
  title: string;
  subtitle: string;
  vimeoId: string;
  vimeoUrl: string;
  year: string;
  categoryLabel: string;
  tags: string[];
  overview: string;
  challenge: string;
  solution: string;
}

function Header() {
  return (
    <div className="absolute contents left-[-17px] top-[-361px]" data-name="header">
      <div className="absolute h-[1211px] left-[-17px] top-[-361px] w-[1297px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1297 1211">
          <path d={svgPaths.p9fb7900} fill="var(--fill-0, #D4896A)" id="art" />
        </svg>
      </div>
      <div className="absolute bg-[rgba(18,10,8,0.28)] h-[125px] left-0 opacity-48 top-0 w-[1280px]" />
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[21px] text-[#f2d6cc] text-[32px] top-[48px] w-[362px]">SHRIYA POTHUKUCHI</p>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[792px] text-[#f2d6cc] text-[32px] top-[41px] w-[104px]">WORK</p>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[1098px] text-[#f2d6cc] text-[32px] top-[41px] w-[118px]">{`ABOUT `}</p>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[922px] text-[#f2d6cc] text-[32px] top-[41px] w-[152px]">GALLERY</p>
    </div>
  );
}

function Divider({ top }: { top: number }) {
  return (
    <div className="absolute h-0 left-0 w-[1280.01px]" style={{ top }}>
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280.01 1">
          <line opacity="0.46" stroke="white" x2="1280.01" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}

export default function AnimationProjectDetail({
  title,
  subtitle,
  vimeoId,
  vimeoUrl,
  year,
  categoryLabel,
  tags,
  overview,
  challenge,
  solution,
}: AnimationProjectDetailProps) {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-auto">
      <div style={{ height: "2350px", minWidth: "1280px", position: "relative" }}>
        <div className="bg-[#120a08] relative size-full">
          <Header />

          {/* Back chevron */}
          <div className="absolute left-0 overflow-clip size-[80px] top-[184px]" data-name="chevron_backward">
            <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6667 40">
                <path d={svgPaths.p70c62c0} fill="var(--fill-0, #1D1B20)" />
              </svg>
            </div>
          </div>

          {/* ── Vimeo Video ── */}
          <div className="absolute left-0 top-[355px] w-[1280px] h-[720px]">
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=0&color=d4896a&title=0&byline=0&portrait=0`}
              className="w-full h-full"
              style={{ border: "none" }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={title}
            />
          </div>

          {/* ── Title ── */}
          <p
            className="absolute font-['Clash_Display:Semibold',sans-serif] not-italic leading-[normal] left-[86px] top-[1120px] w-[1120px]"
            style={{ color: "#d4896a", fontSize: 52 }}
          >
            {title}
          </p>

          {/* ── Subtitle ── */}
          <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[97px] top-[1220px] w-[1069px] text-[#f2d6cc] text-[20px]">
            {subtitle}
          </p>

          {/* ── Divider 1 ── */}
          <Divider top={1340} />

          {/* ── Year ── */}
          <div className="absolute left-[194px] top-[1368px]" data-name="year">
            <div className="absolute left-0 opacity-68 overflow-clip size-[28px]" data-name="Calendar">
              <div className="absolute inset-[8.33%_12.5%]">
                <div className="absolute inset-[-8.57%_-9.52%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 27.3333">
                    <path d={svgPaths.pc6ae480} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#f2d6cc] text-[24px] ml-[36px]">Year</p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#f2d6cc] text-[24px] ml-[14px] mt-[4px]">{year}</p>
          </div>

          {/* ── Category ── */}
          <div className="absolute left-[692px] top-[1368px]" data-name="category">
            <div className="absolute left-0 overflow-clip size-[28px] top-[2px]">
              <div className="absolute inset-[8.33%_11.79%_11.81%_8.33%]">
                <div className="absolute inset-[-4.47%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.3668 24.361">
                    <path d={svgPaths.p113e980} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#f2d6cc] text-[24px] ml-[36px]">Category</p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#f2d6cc] text-[24px] ml-[14px] mt-[4px]">{categoryLabel}</p>
          </div>

          {/* ── Divider 2 ── */}
          <Divider top={1490} />

          {/* ── Tags ── */}
          <div className="absolute left-[85px] top-[1530px] flex flex-wrap gap-[18px]">
            {tags.map((tag, i) => (
              <div
                key={i}
                className="bg-[rgba(122,92,84,0.82)] h-[48px] rounded-[10px] px-[22px] flex items-center"
              >
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#f2d6cc] text-[18px] whitespace-nowrap">
                  {tag}
                </p>
              </div>
            ))}
          </div>

          {/* ── View project button ── */}
          <a
            href={vimeoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[86px] top-[1650px] h-[52px] rounded-[10px] px-[36px] flex items-center cursor-pointer"
            style={{ backgroundColor: "#d4896a" }}
          >
            <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] whitespace-nowrap" style={{ color: "#120a08", fontSize: 18 }}>
              View project on Vimeo
            </span>
          </a>

          {/* ── Overview ── */}
          <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] left-[81px] text-[#f2d6cc] text-[32px] top-[1760px]">
            Overview
          </p>
          <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[76px] text-[#f2d6cc] text-[20px] top-[1808px] w-[1127px]">
            {overview}
          </p>

          {/* ── Challenge ── */}
          <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] left-[76px] text-[#f2d6cc] text-[32px] top-[1940px]">
            Challenge
          </p>
          <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[76px] text-[#f2d6cc] text-[20px] top-[1988px] w-[1127px]">
            {challenge}
          </p>

          {/* ── Solution ── */}
          <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] left-[76px] text-[#f2d6cc] text-[32px] top-[2120px]">
            Solution
          </p>
          <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[76px] text-[#f2d6cc] text-[20px] top-[2168px] w-[1127px]">
            {solution}
          </p>

          <NavigationOverlay showBack backTo="/work/animation" />
        </div>
      </div>
    </div>
  );
}