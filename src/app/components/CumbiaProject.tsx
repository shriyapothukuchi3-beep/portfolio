import svgPaths from "../../imports/svg-h0hjnlt2xr";
import { NavigationOverlay } from "./NavigationOverlay";

const imgHero = "/images/color-final-prototype.png";
const imgFinal2 = "/images/cumbia-initial.png";
const imgSketches = "/images/cumbia-sketches.png";

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

export default function CumbiaProject() {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-auto">
      <div style={{ height: "5100px", minWidth: "1280px", position: "relative" }}>
        <div className="bg-[#120a08] relative size-full" data-name="Cumbia">
          <Header />

          <div className="absolute left-0 overflow-clip size-[80px] top-[184px]" data-name="chevron_backward">
            <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6667 40">
                <path d={svgPaths.p70c62c0} fill="var(--fill-0, #1D1B20)" id="icon" />
              </svg>
            </div>
          </div>

          <div className="absolute h-[807px] left-0 rounded-[10px] top-[351px] w-[1280px]" data-name="hero">
            <img
              alt="Cumbia — Digital Illustration"
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full"
              src={imgHero}
            />
          </div>

          <p className="absolute font-['Clash_Display:Semibold',sans-serif] leading-[normal] left-[86px] not-italic text-[#d4896a] text-[64px] top-[1201px] w-[1157px]">
            Cumbia — Digital Illustration
          </p>

          <div className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[75px] leading-[0] left-[86px] text-[#f2d6cc] text-[20px] top-[1392px] w-[1137px]">
            <p className="leading-[normal] mb-0">A bold digital illustration capturing the energy and motion of traditional Latin dance.</p>
            <p className="leading-[normal]">&nbsp;</p>
          </div>

          <Divider top={1446} />

          <div className="absolute contents left-[205px] top-[1465px]" data-name="year">
            <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[241px] text-[#f2d6cc] text-[24px] top-[1465px] whitespace-nowrap">Year</p>
            <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[219px] text-[#f2d6cc] text-[24px] top-[1508px] whitespace-nowrap">2024</p>
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

          <div className="absolute contents left-[703px] top-[1465px]" data-name="category">
            <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[742px] text-[#f2d6cc] text-[24px] top-[1465px] whitespace-nowrap">Category</p>
            <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[757px] text-[#f2d6cc] text-[24px] top-[1508px] whitespace-nowrap">Design</p>
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

          <Divider top={1569} />

          {[
            { label: "Illustration", left: 85, width: 184 },
            { label: "Digital Art", left: 291, width: 167 },
            { label: "Motion", left: 480, width: 127 },
            { label: "Visual Storytelling", left: 629, width: 248 },
          ].map(({ label, left, width }) => (
            <div key={label} className="absolute contents" style={{ left, top: 1640 }}>
              <div
                className="absolute bg-[rgba(122,92,84,0.82)] h-[58px] rounded-[10px]"
                style={{ left, top: 1640, width }}
              />
              <p
                className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#f2d6cc] text-[20px] top-[1656px] whitespace-nowrap"
                style={{ left: left + 22 }}
              >
                {label}
              </p>
            </div>
          ))}

          <div className="absolute contents leading-[normal] left-[76px] text-[#f2d6cc] text-[32px] top-[1782px]" data-name="overview">
            <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold left-[81px] top-[1782px] w-[1127px]">Overview</p>
            <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal left-[76px] top-[1868px] w-[1127px]">
              A bold digital illustration capturing the energy and motion of traditional Latin dance, rendered through high-contrast neon line work against a deep black background. The piece pairs an elaborately detailed dancer in full skirt motion with a stark flat silhouette, creating a striking visual tension between complexity and simplicity.
            </p>
          </div>

          <div className="absolute contents left-[76px] text-[#f2d6cc] text-[32px] top-[2154px]" data-name="challenge">
            <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] left-[76px] top-[2154px] w-[1127px]">Challenge</p>
            <div className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] left-[76px] top-[2230px] w-[1127px]">
              <p className="leading-[normal] mb-0">Translate the raw kinetic energy of live dance into a static image — conveying movement, rhythm, and cultural vibrancy without losing visual clarity or impact.</p>
              <p className="leading-[normal]">&nbsp;</p>
            </div>
          </div>

          <div className="absolute contents left-[76px] top-[2450px]" data-name="wireframe">
            <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] left-[76px] text-[#f2d6cc] text-[32px] top-[2450px] w-[499px] whitespace-pre-wrap">{`Sketches and initial prototype`}</p>
            <div className="absolute left-[76px] top-[2530px] w-[1127px] h-[780px]" data-name="sketches">
              <img
                alt="Sketches and initial explorations"
                className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
                src={imgSketches}
              />
            </div>
          </div>

          <div className="absolute contents left-[76px] text-[#f2d6cc] text-[32px] top-[3450px]" data-name="solution">
            <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] left-[76px] top-[3450px] w-[1127px]">Solution</p>
            <div className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] left-[76px] top-[3540px] w-[1127px]">
              <p className="leading-[normal] mb-0">Six early explorations tested everything from abstract swirls to flat graphic silhouettes before the final direction locked in. The dense contour lines rippling across the dancer&apos;s skirt were inspired directly by the layered, billowing fabric of traditional cumbia costumes — reinterpreted through neon yellow-green and crimson to capture the heat of the dance floor rather than replicate it literally.</p>
              <p className="leading-[normal]">&nbsp;</p>
            </div>
          </div>

          <div className="absolute h-[760px] left-[76px] rounded-[10px] top-[3900px] w-[545px]" data-name="Final 1">
            <img
              alt="Cumbia final illustration"
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full"
              src={imgHero}
            />
          </div>
          <div className="absolute h-[760px] left-[659px] rounded-[10px] top-[3900px] w-[545px]" data-name="Final 2">
            <img
              alt="Cumbia final illustration variant"
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full"
              src={imgFinal2}
            />
          </div>

          <NavigationOverlay showBack backTo="/work/design" />
        </div>
      </div>
    </div>
  );
}