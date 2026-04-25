import svgPaths from "./svg-uls2v2l8cn";
const imgScreenshot20260403At65906Pm1 = "/images/rentique-homepage.png";
const imgScreenshot20260404At120159Am1 = "/images/rentique-wireframe.png";
const imgScreenshot20260404At120320Am1 = "/images/rentique-1.png";
const imgScreenshot20260404At120407Am1 = "/images/rentique-2.png";
const imgScreenshot20260404At120334Am1 = "/images/rentique-3.png";

function Header() {
  return (
    <div className="absolute contents left-[-17px] top-[-361px]" data-name="header">
      <div className="absolute h-[1211px] left-[-17px] top-[-361px] w-[1297px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1297 1211">
          <path d={svgPaths.p9fb7900} fill="var(--fill-0, #D4896A)" id="art" />
        </svg>
      </div>
      <div className="absolute bg-[rgba(18,10,8,0.28)] h-[125px] left-0 opacity-48 top-0 w-[1280px]" />
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[21px] text-[#f2d6cc] text-[32px] top-[48px] w-[362px]">SHRIYA POTHUKUCHI</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[792px] text-[#f2d6cc] text-[32px] top-[41px] w-[104px]">WORK</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[1098px] text-[#f2d6cc] text-[32px] top-[41px] w-[118px]">{`ABOUT `}</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[922px] text-[#f2d6cc] text-[32px] top-[41px] w-[152px]">GALLERY</p>
    </div>
  );
}

function Brand() {
  return (
    <div className="absolute contents left-0 top-[348px]" data-name="brand">
      <p className="absolute font-['Clash_Display',sans-serif] font-semibold leading-[normal] left-[86px] not-italic text-[#d4896a] text-[64px] top-[1201px] w-[1120px]">Rentique — Circular Fashion Rental App</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[75px] leading-[normal] left-[86px] text-[#f2d6cc] text-[20px] top-[1377px] w-[1069px]">An IoT-driven sustainable fashion rental app that merges style, technology, and environmental responsibility.</p>
      <div className="absolute h-[807px] left-0 top-[348px] w-[1280px]" data-name="Screenshot 2026-04-03 at 6.59.06 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260403At65906Pm1} />
      </div>
    </div>
  );
}

function Year() {
  return (
    <div className="absolute contents left-[194px] top-[1477px]" data-name="year">
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[230px] text-[#f2d6cc] text-[24px] top-[1477px] whitespace-nowrap">{`Year `}</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[208px] text-[#f2d6cc] text-[24px] top-[1520px] whitespace-nowrap">2025</p>
      <div className="absolute left-[194px] opacity-68 overflow-clip size-[28px] top-[1477px]" data-name="Calendar">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
          <div className="absolute inset-[-8.57%_-9.52%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 27.3333">
              <path d={svgPaths.pc6ae480} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Category() {
  return (
    <div className="absolute contents left-[692px] top-[1477px]" data-name="category">
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[731px] text-[#f2d6cc] text-[24px] top-[1477px] whitespace-nowrap">Category</p>
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[0] left-[711px] text-[#f2d6cc] text-[24px] top-[1520px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">UX/UI Design</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
      <div className="absolute left-[692px] overflow-clip size-[28px] top-[1479px]" data-name="Tag">
        <div className="absolute inset-[8.33%_11.79%_11.81%_8.33%]" data-name="Icon">
          <div className="absolute inset-[-4.47%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.3668 24.361">
              <path d={svgPaths.p113e980} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryAndTime() {
  return (
    <div className="absolute contents left-[194px] top-[1477px]" data-name="category and time">
      <Year />
      <Category />
    </div>
  );
}

function UxUi() {
  return (
    <div className="absolute contents left-[85px] top-[1640px]" data-name="ux/ui">
      <div className="absolute bg-[rgba(122,92,84,0.82)] h-[58px] left-[85px] rounded-[10px] top-[1640px] w-[184px]" />
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[115px] text-[#f2d6cc] text-[20px] top-[1656px] whitespace-nowrap">
        UX/UI Design
        <br aria-hidden="true" />
        <br aria-hidden="true" />
      </p>
    </div>
  );
}

function Sustainable() {
  return (
    <div className="absolute contents left-[291px] top-[1640px]" data-name="sustainable">
      <div className="absolute bg-[rgba(122,92,84,0.82)] h-[58px] left-[291px] rounded-[10px] top-[1640px] w-[219px]" />
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[307px] text-[#f2d6cc] text-[20px] top-[1656px] whitespace-nowrap">
        Sustainable Fashion
        <br aria-hidden="true" />
        <br aria-hidden="true" />
      </p>
    </div>
  );
}

function Iot() {
  return (
    <div className="absolute contents left-[536px] top-[1640px]" data-name="iot">
      <div className="absolute bg-[rgba(122,92,84,0.82)] h-[58px] left-[536px] rounded-[10px] top-[1640px] w-[152px]" />
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[597px] text-[#f2d6cc] text-[20px] top-[1656px] whitespace-nowrap">IoT</p>
    </div>
  );
}

function Figma() {
  return (
    <div className="absolute contents left-[717px] top-[1640px]" data-name="figma">
      <div className="absolute bg-[rgba(122,92,84,0.82)] h-[58px] left-[717px] rounded-[10px] top-[1640px] w-[141px]" />
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[759px] text-[#f2d6cc] text-[20px] top-[1656px] whitespace-nowrap">Figma</p>
    </div>
  );
}

function Tools() {
  return (
    <div className="absolute contents left-[85px] top-[1640px]" data-name="tools">
      <UxUi />
      <Sustainable />
      <Iot />
      <Figma />
    </div>
  );
}

function Viewproject() {
  return (
    <a className="absolute contents cursor-pointer left-[86px] top-[1778px]" data-name="viewproject" href="https://www.figma.com/proto/LZ9fBZD7E9q4abMLuCjJpn/Untitled?node-id=1-3&page-id=0%3A1&starting-point-node-id=1%3A3&t=EL2n6r8BF0Ri1mqG-1" target="_blank">
      <div className="absolute bg-[#d4896a] h-[58px] left-[86px] rounded-[10px] top-[1778px] w-[252px]" />
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold h-[40px] leading-[normal] left-[112px] text-[#7a5c54] text-[32px] top-[1787px] w-[199px]">View project</p>
    </a>
  );
}

function Overview() {
  return (
    <div className="absolute contents leading-[normal] left-[76px] text-[#f2d6cc] text-[32px] top-[1929px]" data-name="overview">
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal left-[76px] top-[2015px] w-[1127px]">Rentique is an IoT-driven sustainable fashion rental app that merges style, technology, and environmental responsibility into one seamless experience. Using RFID-tagged garments and smart racks, every rental becomes fully traceable — from cleaning history and wear count to real-time sustainability impact. Designed for younger consumers who want to look good without the guilt, Rentique makes circular fashion feel premium, personal, and effortless.</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold left-[81px] top-[1929px] w-[1127px]">Overview</p>
    </div>
  );
}

function Challenge() {
  return (
    <div className="absolute contents leading-[normal] left-[76px] text-[#f2d6cc] text-[32px] top-[2371px]" data-name="challenge">
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal left-[76px] top-[2471px] w-[1127px]">{`Current rental services are manual, opaque, and trust-deficient — users have no way of knowing how clean a garment really is, how many times it's been worn, or what environmental difference their choice actually makes. Sustainable fashion exists, but it won't be chosen unless it feels like an upgrade, not a compromise.`}</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold left-[76px] top-[2371px] w-[1127px]">Challenge</p>
    </div>
  );
}

function Wireframes() {
  return (
    <div className="absolute contents left-[76px] top-[2812px]" data-name="wireframes">
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[normal] left-[76px] text-[#f2d6cc] text-[32px] top-[2812px] w-[220px]">Wireframes</p>
      <div className="absolute h-[342px] left-[133px] top-[2901px] w-[1013px]" data-name="Screenshot 2026-04-04 at 12.01.59 AM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260404At120159Am1} />
      </div>
    </div>
  );
}

function Solution() {
  return (
    <div className="absolute contents leading-[normal] left-[76px] text-[#f2d6cc] text-[32px] top-[3384px]" data-name="solution">
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal left-[76px] top-[3482px] w-[1127px]">{`A home screen that makes showing up easy — today's events and online friends are front and center, so there's always a reason to act. Joining an event takes just a few taps: pick in-person or virtual, see who's coming, confirm the location, and go. A weekly social summary celebrates progress and gently nudges users to keep engaging, turning a daunting habit into a rewarding one.`}</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold left-[76px] top-[3384px] w-[1127px]">Solution</p>
    </div>
  );
}

function Final() {
  return (
    <div className="absolute contents left-[76px] top-[3845px]" data-name="final">
      <div className="absolute h-[627px] left-[76px] top-[3845px] w-[313px]" data-name="Screenshot 2026-04-04 at 12.03.20 AM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260404At120320Am1} />
      </div>
      <div className="absolute h-[627px] left-[833px] top-[3845px] w-[313px]" data-name="Screenshot 2026-04-04 at 12.04.07 AM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260404At120407Am1} />
      </div>
      <div className="absolute h-[627px] left-[454px] top-[3845px] w-[313px]" data-name="Screenshot 2026-04-04 at 12.03.34 AM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260404At120334Am1} />
      </div>
    </div>
  );
}

function Process() {
  return (
    <div className="absolute contents left-[76px] top-[1640px]" data-name="process">
      <Tools />
      <Viewproject />
      <Overview />
      <Challenge />
      <Wireframes />
      <Solution />
      <Final />
    </div>
  );
}

function Rentique1() {
  return (
    <div className="absolute contents left-0 top-[348px]" data-name="rentique">
      <Brand />
      <div className="absolute h-0 left-0 top-[1452px] w-[1280.01px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280.01 1">
            <line id="Line 2" opacity="0.46" stroke="var(--stroke-0, white)" x2="1280.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CategoryAndTime />
      <div className="absolute h-0 left-0 top-[1598px] w-[1280.01px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280.01 1">
            <line id="Line 1" opacity="0.46" stroke="var(--stroke-0, white)" x2="1280.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Process />
    </div>
  );
}

export default function Rentique() {
  return (
    <div className="bg-[#120a08] relative size-full" data-name="Rentique">
      <Header />
      <div className="absolute left-0 overflow-clip size-[80px] top-[184px]" data-name="chevron_backward">
        <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6667 40">
            <path d={svgPaths.p70c62c0} fill="var(--fill-0, #1D1B20)" id="icon" />
          </svg>
        </div>
      </div>
      <Rentique1 />
    </div>
  );
}