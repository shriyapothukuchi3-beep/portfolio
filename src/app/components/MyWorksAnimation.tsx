const imgDerbyCar = "/images/Derbycar.png";
const imgBallBounce = "/images/Bouncingball.png";
const imgPegJump = "/images/Peg.png";
const imgWalkCycle = "/images/Walk.png";
     
import svgPaths from "../../imports/svg-q0lvc4xdz4";
import { NavigationOverlay } from "./NavigationOverlay";
import { Link } from "react-router";

interface ProjectCardProps {
  slug: string;
  image: string;
  title: string;
  description: string;
  top: number;
  left: number;
}

function ProjectCard({ slug, image, title, description, top, left }: ProjectCardProps) {
  return (
    <Link
      to={`/work/animation/${slug}`}
      className="absolute block overflow-hidden rounded-[10px]"
      style={{ top, left, width: 580, height: 610 }}
    >
      {/* Thumbnail image */}
      <div className="w-full overflow-hidden" style={{ height: 430 }}>
        <img
          alt={title}
          className="w-full h-full object-cover"
          src={image}
        />
      </div>
      {/* Info bar */}
      <div
        className="w-full relative flex flex-col justify-center"
        style={{ height: 180, backgroundColor: "#1a0d09", padding: "0 28px" }}
      >
        <p
          className="font-['Clash_Display:Bold',sans-serif] not-italic leading-[normal]"
          style={{ color: "#d4896a", fontSize: 26 }}
        >
          {title}
        </p>
        <p
          className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] mt-[8px]"
          style={{ color: "#f2d6cc", fontSize: 16, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}
        >
          {description}
        </p>
        {/* Arrow */}
        <div className="absolute right-[20px] top-[20px] overflow-clip" style={{ width: 50, height: 50 }}>
          <div className="absolute inset-[20%]">
            <div className="absolute inset-[-4%]">
              <svg className="block size-full" fill="none" viewBox="0 0 37.5 37.5">
                <path d={svgPaths.pa04c200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Bar() {
  return (
    <div className="absolute contents left-[39px] top-[444px]" data-name="bar">
      <div className="absolute h-[180px] left-[39px] top-[444px] w-[548px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 548 180">
          <path d={svgPaths.p1fa91980} fill="var(--fill-0, #AB7559)" id="Rectangle 25" />
        </svg>
      </div>
      <div className="absolute bg-[#120a08] h-[163px] left-[63px] opacity-88 rounded-[10px] top-[444px] w-[524px]" />
      <div className="absolute font-['Clash_Display:Bold',sans-serif] h-[108px] leading-[0] left-[107px] not-italic text-[#d4896a] text-[64px] top-[477px] w-[350px]">
        <p className="leading-[normal] mb-0">Animation</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
    </div>
  );
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
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[21px] text-[#f2d6cc] text-[32px] top-[48px] w-[362px]">SHRIYA POTHUKUCHI</p>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[792px] text-[#f2d6cc] text-[32px] top-[41px] w-[104px]">WORK</p>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[1098px] text-[#f2d6cc] text-[32px] top-[41px] w-[118px]">{`ABOUT `}</p>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[922px] text-[#f2d6cc] text-[32px] top-[41px] w-[152px]">GALLERY</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute contents leading-[normal] left-[89px] top-[185px]" data-name="heading">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium left-[133px] text-[#f2d6cc] text-[24px] top-[264px] w-[1133px]">A collection of 3D animation projects built in Autodesk Maya — exploring movement, weight, and the principles of animation.</p>
      <p className="absolute font-['Clash_Display:Bold',sans-serif] left-[89px] not-italic text-[#d4896a] text-[64px] top-[185px] whitespace-nowrap">My works</p>
      <p className="absolute font-['Clash_Display:Bold',sans-serif] left-[89px] not-italic text-[#120a08] text-[64px] top-[185px] whitespace-nowrap">{`My `}</p>
    </div>
  );
}

export default function MyWorksAnimation() {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-auto">
      <div style={{ height: "2200px", minWidth: "1280px", position: "relative" }}>
        <div className="bg-[#120a08] relative size-full" data-name="My works - animation">
          <Bar />
          <Header />
          <Heading />

          {/* Row 1 */}
          <ProjectCard
            slug="derby-car"
            image={imgDerbyCar}
            title="Derby Car — 3D Animation"
            description="A fully self-produced 3D animated piece built in Autodesk Maya, covering the complete production pipeline."
            top={744}
            left={44}
          />
          <ProjectCard
            slug="ball-bounce"
            image={imgBallBounce}
            title="Ball Bounce — 3D Animation"
            description="A 3D ball bounce animation in Autodesk Maya demonstrating timing, squash and stretch, and the fundamentals of motion."
            top={744}
            left={656}
          />

          {/* Row 2 */}
          <ProjectCard
            slug="peg-jump"
            image={imgPegJump}
            title="Peg Jump — 3D Animation"
            description="A 3D animation of a peg character jumping across platforms in Maya with a custom set and animation approach."
            top={1404}
            left={44}
          />
          <ProjectCard
            slug="walk-cycle"
            image={imgWalkCycle}
            title="Character Walk Cycle — 3D Animation"
            description="A 3D character walk cycle animated in Autodesk Maya, focusing on believable human locomotion."
            top={1404}
            left={656}
          />

          {/* Back chevron visual */}
          <div className="absolute left-[-1px] overflow-clip size-[80px] top-[184px]" data-name="chevron_backward">
            <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6667 40">
                <path d={svgPaths.p70c62c0} fill="var(--fill-0, #1D1B20)" id="icon" />
              </svg>
            </div>
          </div>

          <NavigationOverlay showBack backTo="/work" />
        </div>
      </div>
    </div>
  );
}
