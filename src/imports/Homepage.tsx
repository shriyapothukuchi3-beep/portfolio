const imgHero = "/images/hero-homepage.png";
const imgPathway = "/images/Pathway_hero.png";
const imgLune = "/images/lune-homepage.png";
const imgGrabNGo = "/images/GrabNGo_hero.png";
const imgProfilePic = "/images/aboutus.jpeg";

function Header() {
  return (
    <div className="absolute contents left-0 top-0" data-name="header">
      <div className="absolute bg-[#120a08] h-[125px] left-0 opacity-48 top-0 w-[1280px]" />
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[21px] text-[#f2d6cc] text-[32px] top-[48px] w-[362px]">SHRIYA POTHUKUCHI</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[792px] text-[#f2d6cc] text-[32px] top-[41px] w-[104px]">WORK</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[1098px] text-[#f2d6cc] text-[32px] top-[41px] w-[118px]">{`ABOUT `}</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[922px] text-[#f2d6cc] text-[32px] top-[41px] w-[152px]">GALLERY</p>
    </div>
  );
}

function ProjectsAnsStuff() {
  return (
    <div className="absolute contents font-['Plus_Jakarta_Sans',sans-serif] font-light left-[108px] text-[#f2d6cc] text-[32px] top-[667px]" data-name="projects ans stuff">
      <div className="absolute h-[38px] leading-[0] left-[111px] top-[741px] w-[206px]">
        <p className="leading-[normal] mb-0">3 disciplines</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
      <p className="absolute leading-[normal] left-[108px] top-[815px] w-[220px]">2 internships</p>
      <div className="absolute h-[38px] leading-[0] left-[113px] top-[667px] w-[190px]">
        <p className="leading-[normal] mb-0">4+ projects</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
    </div>
  );
}

function ViewProjectsbutton() {
  return (
    <div className="absolute contents left-[480px] top-[730px]" data-name="view projectsbutton">
      <div className="absolute bg-[rgba(212,137,106,0.53)] h-[99px] left-[480px] rounded-[10px] top-[730px] w-[242px]" />
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[38px] leading-[0] left-[500px] text-[32px] text-white top-[761px] w-[223px]">
        <p className="leading-[normal] mb-0">View projects</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
    </div>
  );
}

function AboutmeButton() {
  return (
    <div className="absolute contents left-[920px] top-[728px]" data-name="aboutme button">
      <div className="absolute bg-[rgba(212,137,106,0.53)] h-[99px] left-[920px] rounded-[10px] top-[728px] w-[242px]" />
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[38px] leading-[normal] left-[967px] text-[32px] text-white top-[761px] w-[190px]">About Me</p>
    </div>
  );
}

function HeroCard() {
  return (
    <div className="absolute contents left-[55px] top-[247px]" data-name="hero card">
      <div className="absolute bg-[#d4896a] h-[608px] left-[87px] opacity-88 top-[286px] w-[1138px]" />
      <div className="absolute bg-[#120a08] h-[626px] left-[55px] opacity-88 top-[247px] w-[1147px]" />
      <ProjectsAnsStuff />
      <ViewProjectsbutton />
      <AboutmeButton />
      <p className="absolute font-['Clash_Display',sans-serif] font-bold leading-[normal] left-[113px] not-italic text-[#f2d6cc] text-[64px] top-[331px] whitespace-nowrap">
        I design experiences.
        <br aria-hidden="true" />I animate stories.
      </p>
      <p className="absolute font-['Clash_Display',sans-serif] font-bold leading-[normal] left-[111px] not-italic text-[#d4896a] text-[96px] top-[489px] whitespace-nowrap">I build brands.</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal leading-[normal] left-[111px] text-[#f2d6cc] text-[36px] top-[263px] whitespace-nowrap">DESIGNER · ILLUSTRATOR · 3D ANIMATOR</p>
    </div>
  );
}

function SelectedWorks() {
  return (
    <div className="absolute contents left-0 top-[1084px]" data-name="selected works">
      <p className="absolute font-['Clash_Display',sans-serif] font-bold leading-[normal] left-[39px] not-italic text-[#f2d6cc] text-[64px] top-[1084px] whitespace-nowrap">Selected works</p>
      <div className="absolute h-[662px] left-0 top-[2080px] w-[630px]" data-name="pathway">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPathway} />
      </div>
      <div className="absolute h-[662px] left-[649px] top-[2080px] w-[630px]" data-name="lune">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLune} />
      </div>
      <div className="absolute h-[868px] left-0 top-[1179px] w-[1279px]" data-name="grab n go">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGrabNGo} />
      </div>
    </div>
  );
}

function ViewProjectsbutton1() {
  return (
    <div className="absolute contents left-[63px] top-[2980px]" data-name="view projectsbutton">
      <div className="absolute bg-[#d4896a] h-[58px] left-[63px] rounded-[10px] top-[2980px] w-[233px]" />
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[43px] leading-[0] left-[93px] text-[#7a5c54] text-[24px] top-[2991px] w-[181px]">
        <p className="leading-[normal] mb-0">View projects</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
    </div>
  );
}

function Design() {
  return (
    <div className="absolute contents left-[34px] top-[2800px]" data-name="design">
      <div className="absolute bg-[rgba(212,137,106,0.44)] h-[280px] left-[34px] rounded-[10px] top-[2800px] w-[581px]" />
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[30px] leading-[0] left-[54px] text-[#f2d6cc] text-[24px] top-[2810px] w-[285px]">
        <p className="leading-[normal] mb-0">UI/UX · BRAND DESIGN</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
      <p className="absolute font-['Clash_Display',sans-serif] h-[60px] leading-[normal] left-[54px] not-italic text-[#f2d6cc] text-[48px] top-[2852px] w-[463px]">Design that thinks.</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-medium h-[42px] leading-[normal] left-[54px] text-[#f2d6cc] text-[24px] top-[2924px] w-[440px]">Figma · Research · Systems · Identity</p>
      <ViewProjectsbutton1 />
    </div>
  );
}

function Viewproejctsbutton() {
  return (
    <div className="absolute contents left-[693px] top-[2980px]" data-name="viewproejctsbutton">
      <div className="absolute bg-[#d4896a] h-[58px] left-[693px] rounded-[10px] top-[2980px] w-[233px]" />
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[28px] leading-[0] left-[727px] text-[#7a5c54] text-[24px] top-[2991px] w-[199px]">
        <p className="leading-[normal] mb-0">View projects</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
    </div>
  );
}

function Aniamrion() {
  return (
    <div className="absolute contents left-[664px] top-[2799px]" data-name="aniamrion">
      <div className="absolute bg-[rgba(212,137,106,0.44)] h-[280px] left-[664px] rounded-[10px] top-[2799px] w-[581px]" />
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[44px] leading-[0] left-[693px] text-[#f2d6cc] text-[24px] top-[2810px] w-[343px]">
        <p className="leading-[normal] mb-0">ILLUSTRATION · 3D · MOTION</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
      <p className="absolute font-['Clash_Display',sans-serif] h-[60px] leading-[normal] left-[684px] not-italic text-[#f2d6cc] text-[48px] top-[2852px] w-[368px]">Art that feels.</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-medium h-[42px] leading-[normal] left-[693px] text-[#f2d6cc] text-[24px] top-[2924px] w-[359px] whitespace-pre-wrap">{`Maya  · Unity · After Effects`}</p>
      <Viewproejctsbutton />
    </div>
  );
}

function UxUi() {
  return (
    <div className="absolute contents left-[451px] top-[3462px]" data-name="ux/ui">
      <div className="absolute bg-[rgba(122,92,84,0.82)] h-[58px] left-[451px] rounded-[10px] top-[3462px] w-[233px]" />
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[28px] leading-[0] left-[485px] text-[#f2d6cc] text-[24px] top-[3477px] w-[164px]">
        <p className="leading-[normal] mb-0">UI/UX Design</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
    </div>
  );
}

function BrandIdentity() {
  return (
    <div className="absolute contents left-[710px] top-[3462px]" data-name="brand identity">
      <div className="absolute bg-[rgba(122,92,84,0.82)] h-[58px] left-[710px] rounded-[10px] top-[3462px] w-[233px]" />
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[28px] leading-[0] left-[744px] text-[#f2d6cc] text-[24px] top-[3477px] w-[164px]">
        <p className="leading-[normal] mb-0">Brand Identity</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
    </div>
  );
}

function Component3DAnimation() {
  return (
    <div className="absolute contents left-[978px] top-[3462px]" data-name="3d animation">
      <div className="absolute bg-[rgba(122,92,84,0.82)] h-[58px] left-[978px] rounded-[10px] top-[3462px] w-[233px]" />
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[28px] leading-[0] left-[1012px] text-[#f2d6cc] text-[24px] top-[3477px] w-[164px]">
        <p className="leading-[normal] mb-0">3D Animation</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
    </div>
  );
}

function Illustration() {
  return (
    <div className="absolute contents left-[451px] top-[3552px]" data-name="illustration">
      <div className="absolute bg-[rgba(122,92,84,0.82)] h-[58px] left-[451px] rounded-[10px] top-[3552px] w-[233px]" />
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[28px] leading-[0] left-[497px] text-[#f2d6cc] text-[24px] top-[3567px] w-[136px]">
        <p className="leading-[normal] mb-0">Illustration</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
    </div>
  );
}

function MotionDesign() {
  return (
    <div className="absolute contents left-[710px] top-[3554px]" data-name="motion design">
      <div className="absolute bg-[rgba(122,92,84,0.82)] h-[58px] left-[710px] rounded-[10px] top-[3554px] w-[233px]" />
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[28px] leading-[0] left-[744px] text-[#f2d6cc] text-[24px] top-[3569px] w-[164px]">
        <p className="leading-[normal] mb-0">Motion Design</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="absolute contents left-[451px] top-[3462px]" data-name="skills">
      <UxUi />
      <BrandIdentity />
      <Component3DAnimation />
      <Illustration />
      <MotionDesign />
    </div>
  );
}

function Contact() {
  return (
    <div className="absolute contents left-[34px] top-[3148px]" data-name="contact">
      <div className="absolute bg-[rgba(212,137,106,0.44)] h-[499px] left-[34px] rounded-[10px] top-[3148px] w-[1211px]" />
      <p className="absolute font-['Clash_Display',sans-serif] font-semibold leading-[normal] left-[432px] not-italic text-[#f2d6cc] text-[48px] top-[3190px] whitespace-nowrap">Shriya Pothukuchi</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-medium leading-[normal] left-[444px] text-[#f2d6cc] text-[24px] top-[3249px] whitespace-nowrap">Dallas, TX</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-medium h-[135px] leading-[normal] left-[451px] text-[#f2d6cc] text-[20px] top-[3295px] w-[776px]">{`I'm a multi-disciplinary designer passionate about creating memorable digital experiences. With expertise in UI/UX design, graphic illustration, and 3D animation, I bring ideas to life through thoughtful design and engaging motion.`}</p>
      <Skills />
      <div className="absolute h-[319px] left-[72px] rounded-[10px] top-[3175px] w-[291px]" data-name="profile pic">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[111.7%] left-[-18.35%] max-w-none top-[-10.23%] w-[125.8%]" src={imgProfilePic} />
        </div>
      </div>
    </div>
  );
}

function Homepage1() {
  return (
    <div className="absolute contents left-0 top-[247px]" data-name="homepage">
      <HeroCard />
      <SelectedWorks />
      <Design />
      <Aniamrion />
      <Contact />
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-[#120a08] relative w-[1280px] h-full" data-name="Homepage-">
      <div className="absolute h-[1024px] left-0 top-0 w-[1280px]" data-name="hero">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
      </div>
      <div className="absolute bg-black h-[1026px] left-0 opacity-21 top-[-2px] w-[1280px]" data-name="overlay" />
      <Header />
      <Homepage1 />
    </div>
  );
}
