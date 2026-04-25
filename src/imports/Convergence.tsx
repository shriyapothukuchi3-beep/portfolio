import svgPaths from "./svg-h0hjnlt2xr";
const imgHero = "/images/Final.png";
const imgInitalPrototype1 = "/images/convergence-1.png";
const imgSketch16764075615591 = "/images/convergence-2.png";
const imgSketch16763580954261 = "/images/convergence-3.png";
const imgSketch16763580551531 = "/images/convergence-4.png";

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
    <div className="absolute contents left-0 top-[351px]" data-name="brand">
      <p className="absolute font-['Clash_Display',sans-serif] font-semibold leading-[normal] left-[86px] not-italic text-[#d4896a] text-[64px] top-[1201px] w-[1157px]">Convergence — Manga-Style Illustration Collage</p>
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[75px] leading-[0] left-[86px] text-[#f2d6cc] text-[20px] top-[1392px] w-[1137px]">
        <p className="leading-[normal] mb-0">A hand-drawn black and white illustration collage composed of multiple manga-inspired character studies and scenes.</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
      <div className="absolute h-[807px] left-0 rounded-[10px] top-[351px] w-[1280px]" data-name="hero">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgHero} />
      </div>
    </div>
  );
}

function Year() {
  return (
    <div className="absolute contents left-[205px] top-[1465px]" data-name="year">
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[241px] text-[#f2d6cc] text-[24px] top-[1465px] whitespace-nowrap">{`Year `}</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[219px] text-[#f2d6cc] text-[24px] top-[1508px] whitespace-nowrap">2023</p>
      <div className="absolute left-[205px] opacity-68 overflow-clip size-[28px] top-[1465px]" data-name="Calendar">
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
    <div className="absolute contents left-[703px] top-[1465px]" data-name="category">
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[742px] text-[#f2d6cc] text-[24px] top-[1465px] whitespace-nowrap">Category</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[757px] text-[#f2d6cc] text-[24px] top-[1508px] whitespace-nowrap">Design</p>
      <div className="absolute left-[703px] overflow-clip size-[28px] top-[1467px]" data-name="Tag">
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
    <div className="absolute contents left-[205px] top-[1465px]" data-name="category and time">
      <Year />
      <Category />
    </div>
  );
}

function Illustration() {
  return (
    <div className="absolute contents left-[85px] top-[1640px]" data-name="illustration">
      <div className="absolute bg-[rgba(122,92,84,0.82)] h-[58px] left-[85px] rounded-[10px] top-[1640px] w-[184px]" />
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[127px] text-[#f2d6cc] text-[20px] top-[1656px] whitespace-nowrap">Illustration</p>
    </div>
  );
}

function Manga() {
  return (
    <div className="absolute contents left-[291px] top-[1640px]" data-name="manga">
      <div className="absolute bg-[rgba(122,92,84,0.82)] h-[58px] left-[291px] rounded-[10px] top-[1640px] w-[152px]" />
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[334px] text-[#f2d6cc] text-[20px] top-[1656px] whitespace-nowrap">Manga</p>
    </div>
  );
}

function Collage() {
  return (
    <div className="absolute contents left-[467px] top-[1640px]" data-name="collage">
      <div className="absolute bg-[rgba(122,92,84,0.82)] h-[58px] left-[467px] rounded-[10px] top-[1640px] w-[152px]" />
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[505px] text-[#f2d6cc] text-[20px] top-[1656px] whitespace-nowrap">Collage</p>
    </div>
  );
}

function BalckAndWhite() {
  return (
    <div className="absolute contents left-[650px] top-[1640px]" data-name="balck and white">
      <div className="absolute bg-[rgba(122,92,84,0.82)] h-[58px] left-[650px] rounded-[10px] top-[1640px] w-[141px]" />
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[0] left-[655px] text-[#f2d6cc] text-[20px] top-[1656px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">{`Black & White`}</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
    </div>
  );
}

function Tools() {
  return (
    <div className="absolute contents left-[85px] top-[1640px]" data-name="tools">
      <Illustration />
      <Manga />
      <Collage />
      <BalckAndWhite />
    </div>
  );
}

function Overview() {
  return (
    <div className="absolute contents leading-[normal] left-[76px] text-[#f2d6cc] text-[32px] top-[1782px]" data-name="overview">
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal left-[76px] top-[1868px] w-[1127px]">A hand-drawn black and white illustration collage composed of multiple manga-inspired character studies and scenes, unified through bold compositional layering. The piece weaves together expressive close-ups, full figures, dragons, celestial imagery, and floral motifs into a single cohesive artwork that feels simultaneously fragmented and intentional.</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold left-[81px] top-[1782px] w-[1127px]">Overview</p>
    </div>
  );
}

function Challeneg() {
  return (
    <div className="absolute contents left-[76px] text-[#f2d6cc] text-[32px] top-[2154px]" data-name="challeneg">
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[0] left-[76px] top-[2230px] w-[1127px]">
        <p className="leading-[normal] mb-0">Create a visually complex multi-character composition that draws from manga aesthetics without feeling like a random assembly of parts — each element needed to hold its own while contributing to a unified visual story.</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[normal] left-[76px] top-[2154px] w-[1127px]">Challenge</p>
    </div>
  );
}

function Wireframe() {
  return (
    <div className="absolute contents left-[76px] top-[2450px]" data-name="wireframe">
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[normal] left-[76px] text-[#f2d6cc] text-[32px] top-[2450px] w-[499px] whitespace-pre-wrap">{`Sketches and initial  prototype`}</p>
      <div className="absolute left-[326px] size-[623px] top-[2967px]" data-name="inital prototype 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgInitalPrototype1} />
      </div>
      <div className="absolute left-[864px] size-[339px] top-[2565px]" data-name="sketch1676407561559 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSketch16764075615591} />
      </div>
      <div className="absolute h-[340px] left-[470px] top-[2565px] w-[339px]" data-name="sketch1676358095426 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSketch16763580954261} />
      </div>
      <div className="absolute left-[76px] size-[339px] top-[2564px]" data-name="sketch1676358055153 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSketch16763580551531} />
      </div>
    </div>
  );
}

function Solurion() {
  return (
    <div className="absolute contents left-[76px] text-[#f2d6cc] text-[32px] top-[3712px]" data-name="solurion">
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[0] left-[76px] top-[3808px] w-[1127px]">
        <p className="leading-[normal] mb-0">Composition came before character — early sketches focused purely on overlapping shapes and diagonal tension to find a layout with natural movement. Once the central arrow structure locked in as the anchor, each zone was filled deliberately: tight eye close-ups for emotional pull, varied scales for depth, and a consistent grayscale palette that lets line work do all the talking.</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[normal] left-[76px] top-[3712px] w-[1127px]">Solution</p>
    </div>
  );
}

function Proceess() {
  return (
    <div className="absolute contents left-[76px] top-[1640px]" data-name="proceess">
      <Tools />
      <Overview />
      <Challeneg />
      <Wireframe />
      <Solurion />
      <div className="absolute h-[760px] left-[235px] rounded-[10px] top-[4130px] w-[738px]" data-name="Final">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgHero} />
      </div>
    </div>
  );
}

function Convergence1() {
  return (
    <div className="absolute contents left-0 top-[351px]" data-name="convergence">
      <Brand />
      <div className="absolute h-0 left-0 top-[1446px] w-[1280.01px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280.01 1">
            <line id="Line 1" opacity="0.46" stroke="var(--stroke-0, white)" x2="1280.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CategoryAndTime />
      <div className="absolute h-0 left-0 top-[1569px] w-[1280.01px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280.01 1">
            <line id="Line 1" opacity="0.46" stroke="var(--stroke-0, white)" x2="1280.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Proceess />
    </div>
  );
}

export default function Convergence() {
  return (
    <div className="bg-[#120a08] relative size-full" data-name="Convergence">
      <Header />
      <div className="absolute left-0 overflow-clip size-[80px] top-[184px]" data-name="chevron_backward">
        <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6667 40">
            <path d={svgPaths.p70c62c0} fill="var(--fill-0, #1D1B20)" id="icon" />
          </svg>
        </div>
      </div>
      <Convergence1 />
    </div>
  );
}