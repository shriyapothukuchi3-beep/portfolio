import { createBrowserRouter, Link } from "react-router";
import type { CSSProperties } from "react";
import Homepage from "../imports/Homepage";
import AboutMe from "../imports/AboutMe";
import Work from "../imports/Work";
import MyWorks from "../imports/MyWorks";
import MyWorksDesign from "../imports/MyWorksDesign";
import MeetUp from "../imports/MeetUp";
import Rentique from "../imports/Rentique";
import Coffee from "../imports/Coffee";
import Lune from "../imports/Lune";
import Convergence from "../imports/Convergence";
import MyWorksAnimation from "./components/MyWorksAnimation";
import AnimationProjectDetail from "./components/AnimationProjectDetail";
import { NavigationOverlay } from "./components/NavigationOverlay";
import CumbiaProject from "./components/CumbiaProject";
import GalleryPage from "./components/GalleryPage";
import ResponsiveCanvasPage from "./components/ResponsiveCanvasPage";
import UxCaseStudyDetail from "./components/UxCaseStudyDetail";

const imgPathwayHero = "/images/Pathway_hero.png";
const imgPathwayDrawing = "/images/Pathway_Drawing.PNG";
const imgPathwayWatch = "/images/Pathway_watch.PNG";
const imgPathwayCane = "/images/Pathway_cane.PNG";
const imgPathwaySensor = "/images/Pathway_sensor.PNG";
const imgPathwayStoryboard = "/images/Pathway_storyboaard.PNG";
const imgPathwayWireframes = "/images/Pathway_wireframes.png";
const imgGrabNGoHero = "/images/GrabNGo_hero.png";
const imgGrabNGoResearchMethods = "/images/GrabNGo_Researchmethods.png";
const imgGrabNGoResearchMethods02 = "/images/GrabNGo_Researchmethods02.png";
const imgGrabNGoSketches = "/images/GrabNGo_sketches.png";
const imgGrabNGoMidfi = "/images/GrabNGo_Midfi.png";
const imgGrabNGoAllScreens = "/images/GrabNGo_allscreens.png";
const imgGrabNGoResults = "/images/GrabNGo_Resultsfromtesting.png";
const imgGrabNGoResults02 = "/images/GrabNGo_Resultsfromtesting02.png";

// ── Transparent clickable overlay helper ─────────────────────────────────────

function TransparentLink({ to, style }: { to: string; style: CSSProperties }) {
  return (
    <Link
      to={to}
      className="absolute pointer-events-auto"
      style={{ ...style, opacity: 0, zIndex: 15, cursor: "pointer" }}
      aria-label={to}
    />
  );
}

// ── Page wrappers ─────────────────────────────────────────────────────────────

function HomepagePage() {
  return (
    <ResponsiveCanvasPage height={3800}>
      <div style={{ width: 1280, height: 3800, position: "relative" }}>
        <Homepage />
        <NavigationOverlay />
        <TransparentLink to="/work" style={{ left: 480, top: 730, width: 242, height: 99 }} />
        <TransparentLink to="/about" style={{ left: 920, top: 728, width: 242, height: 99 }} />
        <TransparentLink to="/work/uxui/grabngo" style={{ left: 0, top: 1179, width: 1279, height: 868 }} />
        <TransparentLink to="/work/uxui/pathway" style={{ left: 0, top: 2080, width: 630, height: 662 }} />
        <TransparentLink to="/work/uxui/lune" style={{ left: 649, top: 2080, width: 630, height: 662 }} />
        <TransparentLink to="/work/design" style={{ left: 34, top: 2800, width: 581, height: 280 }} />
        <TransparentLink to="/work/animation" style={{ left: 664, top: 2799, width: 581, height: 280 }} />
      </div>
    </ResponsiveCanvasPage>
  );
}

function AboutMePage() {
  return (
    <ResponsiveCanvasPage height={3950}>
      <div style={{ width: 1280, height: 3950, position: "relative" }}>
        <AboutMe />
        <NavigationOverlay />
      </div>
    </ResponsiveCanvasPage>
  );
}

function WorkPage() {
  return (
    <ResponsiveCanvasPage height={2300}>
      <div style={{ width: 1280, height: 2300, position: "relative" }}>
        <Work />
        <NavigationOverlay showBack backTo="/" />
        <TransparentLink to="/work/uxui" style={{ left: 99, top: 485, width: 747, height: 385 }} />
        <TransparentLink to="/work/design" style={{ left: 490, top: 1071, width: 747, height: 385 }} />
        <TransparentLink to="/work/animation" style={{ left: 65, top: 1657, width: 747, height: 425 }} />
      </div>
    </ResponsiveCanvasPage>
  );
}

function MyWorksPage() {
  return (
        <ResponsiveCanvasPage height={3500}>
      <div style={{ width: 1280, height: 3500, position: "relative" }}>
        <MyWorks />
        <NavigationOverlay showBack backTo="/work" />
        <TransparentLink to="/work/uxui/lune" style={{ left: 44, top: 744, width: 580, height: 784 }} />
        <TransparentLink to="/work/uxui/coffee" style={{ left: 656, top: 744, width: 580, height: 784 }} />
        <TransparentLink to="/work/uxui/rentique" style={{ left: 45, top: 1590, width: 580, height: 757 }} />
        <TransparentLink to="/work/uxui/meetup" style={{ left: 656, top: 1590, width: 580, height: 757 }} />
        <TransparentLink to="/work/uxui/pathway" style={{ left: 45, top: 2436, width: 580, height: 787 }} />
        <TransparentLink to="/work/uxui/grabngo" style={{ left: 656, top: 2436, width: 580, height: 787 }} />
      </div>
    </ResponsiveCanvasPage>
  );
}

function MyWorksDesignPage() {
  return (
        <ResponsiveCanvasPage height={1700}>
      <div style={{ width: 1280, height: 1700, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, width: "1280px", overflowX: "clip" }}>
          <MyWorksDesign />
        </div>
        <NavigationOverlay showBack backTo="/work" />
        <TransparentLink to="/work/design/convergence" style={{ left: 44, top: 744, width: 580, height: 784 }} />
        <TransparentLink to="/work/design/cumbia" style={{ left: 656, top: 744, width: 580, height: 784 }} />
      </div>
    </ResponsiveCanvasPage>
  );
}

function MeetUpPage() {
  return (
        <ResponsiveCanvasPage height={5300}>
      <div style={{ width: 1280, height: 5300, position: "relative" }}>
        <MeetUp />
        <NavigationOverlay showBack backTo="/work/uxui" />
      </div>
    </ResponsiveCanvasPage>
  );
}

function RentiquePage() {
  return (
        <ResponsiveCanvasPage height={4700}>
      <div style={{ width: 1280, height: 4700, position: "relative" }}>
        <Rentique />
        <NavigationOverlay showBack backTo="/work/uxui" />
      </div>
    </ResponsiveCanvasPage>
  );
}

function CoffeePage() {
  return (
        <ResponsiveCanvasPage height={5900}>
      <div style={{ width: 1280, height: 5900, position: "relative" }}>
        <Coffee />
        <NavigationOverlay showBack backTo="/work/uxui" />
      </div>
    </ResponsiveCanvasPage>
  );
}

function LunePage() {
  return (
        <ResponsiveCanvasPage height={6700}>
      <div style={{ width: 1280, height: 6700, position: "relative" }}>
        <Lune />
        <NavigationOverlay showBack backTo="/work/uxui" />
      </div>
    </ResponsiveCanvasPage>
  );
}

function PathwayPage() {
  return (
    <ResponsiveCanvasPage height={7600}>
      <div style={{ width: 1280, height: 7600, position: "relative" }}>
        <UxCaseStudyDetail
          heroImage={imgPathwayHero}
          heroAlt="Pathway concept illustration"
          title="Pathway — Smart Navigation Aid for the Visually Impaired"
          subtitle="A dual-component assistive system designed to bridge the final navigation gap: helping blind users detect door edges and locate handles without interrupting their movement."
          year="2026"
          duration="3 weeks"
          tools="Procreate, Figma, Lovable"
          tags={["Inclusive Design", "Assistive Technology", "Haptic UX", "Physical Prototype", "Mobile Design", "User Research"]}
          projectUrl="https://pathway-sound-motion.lovable.app"
          projectLabel="Open live app"
          sections={[
            {
              title: "My Contribution",
              paragraphs: [
                "This was a 3-week undergraduate design project with a team of three. I owned the user research, concept ideation, Procreate product illustrations, storyboards, app wireframes, the majority of the Lovable prototype screens, and the final video edit.",
              ],
            },
            {
              title: "The Problem",
              paragraphs: [
                "Blind users can navigate a city block and find a building. But that final moment — locating the door edge and finding the handle — has almost no support. Most tools stop at ground-level navigation. The vertical detection gap is where the experience breaks down.",
              ],
            },
            {
              title: "The Insight That Drove Everything",
              paragraphs: [
                "Blind users are already expert navigators. The worst thing we could design was something that created dependence. The solution had to augment the skills users already rely on instead of replacing them.",
              ],
            },
            {
              title: "The Solution",
              paragraphs: [
                "Pathway is a dual-component system. A sensor-enhanced cane detects obstacles and approaching doorways, while a smartwatch wristband delivers haptic feedback to guide hand placement toward the door edge and handle.",
                "We chose haptics over audio because blind users already depend on environmental sound as a primary awareness channel. Adding constant voice prompts would compete with that input. Haptics stay discreet, are learnable in minutes, and still work in noisy environments.",
              ],
              images: [
                { src: imgPathwayWatch, alt: "Pathway watch interface illustration" },
                { src: imgPathwaySensor, alt: "Pathway sensor component rendering" },
                { src: imgPathwayCane, alt: "Pathway enhanced cane illustration" },
              ],
              columns: 3,
            },
            {
              title: "The Haptic Grammar",
              paragraphs: [
                "The most important design decision was keeping the signal system extremely small. Three signals were enough to communicate intent without forcing users to memorize an entire language of vibration patterns.",
              ],
              bullets: [
                "Single pulse — door edge within 2 metres.",
                "Directional pulse — left or right wrist fires to indicate turn direction.",
                "Triple pulse — handle within grasp, extend hand.",
              ],
            },
            {
              title: "Key Design Decisions",
              bullets: [
                "Bone conduction is the default audio mode, not earbuds, so ears remain open to environmental sound.",
                "Voice-first login begins with “PATH IS LISTENING” on the first screen instead of hiding accessibility behind settings.",
                "The sensor attaches to existing cane types without requiring users to replace the mobility tool they already trust.",
                "Emergency alert uses a triple-shake gesture so it is fast in a crisis but difficult to trigger by accident.",
              ],
            },
            {
              title: "What I Made",
              paragraphs: [
                "I illustrated the complete Pathway ecosystem in Procreate: existing cane types, the final sensor-enhanced cane, the smartwatch interface, and the PathClip sensor fob. I also built two six-panel storyboards, annotated app wireframes, the majority of the Lovable prototype screens, and the final scenario video with design callouts.",
              ],
              images: [
                { src: imgPathwayDrawing, alt: "Pathway concept drawing" },
                { src: imgPathwayStoryboard, alt: "Pathway storyboard panels" },
                { src: imgPathwayWireframes, alt: "Pathway app wireframes", span: 2 },
              ],
              columns: 2,
            },
            {
              title: "What I'd Change",
              paragraphs: [
                "The research was desk-based. In a next iteration, I would validate the haptic grammar with blind users under real navigation conditions, because signals that feel clear on paper can behave very differently at a doorway under stress or time pressure.",
              ],
            },
          ]}
        />
      </div>
    </ResponsiveCanvasPage>
  );
}

function GrabNGoPage() {
  return (
    <ResponsiveCanvasPage height={7600}>
      <div style={{ width: 1280, height: 7600, position: "relative" }}>
        <UxCaseStudyDetail
          heroImage={imgGrabNGoHero}
          heroAlt="Grab N Go app hero screens"
          title="Grab N Go — Food Insecurity on Campus"
          subtitle="A campus food-access service designed around the reality that students skip meals not only because of cost, but because getting food can feel slow, exhausting, and socially uncomfortable."
          year="2026"
          duration="3 weeks"
          tools="Figma, Lyssna"
          tags={["UX Research", "Card Sorting", "Tree Testing", "A/B Testing", "Usability Testing", "Mobile Design", "Social Impact"]}
          projectUrl="https://www.figma.com/proto/zNWYgat8dlpc52Ep8fwg24/A5-Grab-Go-Hi-Fi-Prototype?node-id=10-2&p=f&viewport=358%2C106%2C0.08&t=NUcNZMSimCctZfgM-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10%3A2&page-id=0%3A1"
          projectLabel="Open prototype"
          sections={[
            {
              title: "My Contribution",
              paragraphs: [
                "This was a 3-week team project with three members. I owned the research synthesis across all four assignment phases, one lo-fi sketch, mid-fi wireframes for Machine Locations, Payment, Profile Settings, and Confirmation, plus contributions to the final hi-fi prototype.",
              ],
            },
            {
              title: "The Problem",
              paragraphs: [
                "27% of UTD students skip meals because they cannot afford food. We originally framed this as a cost problem, but the research quickly showed that money alone was not the whole story.",
              ],
            },
            {
              title: "The Pivot",
              paragraphs: [
                "Secondary research, interviews, and a focus group kept revealing the same thing: students were skipping meals because of time, energy, and embarrassment as much as cost. 71% had never used on-campus food resources, and 41.9% did not even know they existed.",
                "That reframed the design challenge. Instead of asking how to make food cheaper, we focused on how to make food access take almost no effort and feel completely normal.",
              ],
            },
            {
              title: "The Solution",
              paragraphs: [
                "Grab N Go combines smart vending machines across campus with a companion app. Students can browse meals, pre-order between classes, pick up with a QR code, and pay with their student ID. No cash, no lines, and no need to plan a full food run into an already packed day.",
              ],
            },
            {
              title: "Research Methods Used",
              paragraphs: [
                "Every major information architecture and interface decision in the app is backed by participant data, not designer instinct. When a category split 57/43 in the card sort, we reflected that ambiguity in the app instead of forcing students into a single arbitrary path.",
              ],
              bullets: [
                "Hybrid card sort — 7 participants.",
                "Tree test — 9 participants.",
                "5-second test — 6 participants.",
                "Usability testing — 3 participants.",
                "A/B testing — 11 participants.",
              ],
              images: [
                { src: imgGrabNGoResearchMethods, alt: "Grab N Go research methods board" },
                { src: imgGrabNGoResearchMethods02, alt: "Grab N Go research insights board" },
              ],
              columns: 2,
            },
            {
              title: "Key Design Decisions",
              bullets: [
                "Comet Card is the default payment option so students are not blocked by not carrying cash or a wallet.",
                "Dietary filters appear in both Menu and Profile because the card sort showed users expected them in both places.",
                "A 30-minute pickup window reduces vending machine backup while still fitting campus walking time.",
                "Black menu-bar text over orange replaced the earlier version after A/B testing showed 55% preferred it for contrast.",
              ],
              images: [
                { src: imgGrabNGoSketches, alt: "Grab N Go sketches" },
                { src: imgGrabNGoMidfi, alt: "Grab N Go mid-fi wireframes" },
              ],
              columns: 2,
            },
            {
              title: "My Screens",
              paragraphs: [
                "The Machine Locations flow is built around proximity, showing what is closest to the student's current building rather than what is nearest to campus center. The Payment screen defaults to Comet Card and makes the vending fee explicit. Profile Settings follow the hierarchy validated in tree testing, and the Confirmation screen keeps the QR code, building name, and pickup timer together in one place.",
              ],
              images: [
                { src: imgGrabNGoAllScreens, alt: "Grab N Go all screens collage", span: 2 },
              ],
              columns: 2,
            },
            {
              title: "Results From Testing",
              paragraphs: [
                "Onboarding was rated 5/5 by every usability-test participant. People described the experience as minimal, clean, friendly, professional, and easy to understand. The next improvements were also clear: item cards need visible prices, and the order flow should feel more memorable.",
              ],
              images: [
                { src: imgGrabNGoResults, alt: "Grab N Go results from testing board" },
                { src: imgGrabNGoResults02, alt: "Grab N Go testing notes" },
              ],
              columns: 2,
            },
            {
              title: "What I'd Change",
              paragraphs: [
                "I would run contextual inquiry during real meal-time rushes. Watching students navigate the app when they are actually hungry, moving between classes, and under time pressure would reveal friction that lab-based testing simply cannot surface. I would also validate the concept with a larger participant pool.",
              ],
            },
          ]}
        />
      </div>
    </ResponsiveCanvasPage>
  );
}

function ConvergencePage() {
  return (
        <ResponsiveCanvasPage height={5100}>
      <div style={{ width: 1280, height: 5100, position: "relative" }}>
        <Convergence />
        <NavigationOverlay showBack backTo="/work/design" />
      </div>
    </ResponsiveCanvasPage>
  );
}

function CumbiaPage() {
  return (
   <ResponsiveCanvasPage height={5100}>
      <div style={{ width: 1280, height: 5100, position: "relative" }}>
        <CumbiaProject />
      </div>
    </ResponsiveCanvasPage>
  );
}

function GalleryCanvasPage() {
  return (
    <ResponsiveCanvasPage height={2650}>
      <div style={{ width: 1280, height: 2650, position: "relative" }}>
        <GalleryPage />
      </div>
    </ResponsiveCanvasPage>
  );
}

// ── Animation project pages ───────────────────────────────────────────────────

function DerbyCarPage() {
  return (
    <AnimationProjectDetail
      title="Derby Car — 3D Animation"
      subtitle="A fully self-produced 3D animated piece built in Autodesk Maya, covering the complete production pipeline."
      vimeoId="1067220024"
      vimeoUrl="https://vimeo.com/1067220024"
      year="2023"
      categoryLabel="Animation"
      tags={["3D Animation", "Maya", "Modeling", "Rigging"]}
      overview="A fully self-produced 3D animated piece built in Autodesk Maya, covering the complete production pipeline from modeling and rigging to final animation. The project demonstrates end-to-end technical skill in bringing a derby car to life through movement."
      challenge="Execute every stage of the 3D production pipeline independently — modeling a believable derby car, building a rig that would allow natural and dynamic movement, and animating it in a way that communicated weight, speed, and personality."
      solution="Built from scratch in Maya, the car was modeled with attention to the battered, characterful aesthetic of derby vehicles, then rigged to support realistic motion. The animation focused on conveying physical weight and momentum — letting the movement itself tell the story rather than relying on environment or effects."
    />
  );
}

function BallBouncePage() {
  return (
    <AnimationProjectDetail
      title="Ball Bounce — 3D Animation"
      subtitle="A 3D ball bounce animation in Autodesk Maya, built around one of the most fundamental exercises in animation."
      vimeoId="1177111644"
      vimeoUrl="https://vimeo.com/1177111644"
      year="2024"
      categoryLabel="Animation"
      tags={["3D Animation", "Maya", "Timing", "Squash and Stretch"]}
      overview="A 3D ball bounce animation in Autodesk Maya, built around one of the most fundamental exercises in animation — using a simple object to demonstrate mastery of the core principles of motion."
      challenge="A bouncing ball is the animator's baseline test. Getting it right means nailing timing, squash and stretch, arc of motion, and the subtle ease-in and ease-out that separates convincing physics from a floating object."
      solution="Animated across a curved ramp environment, the ball's trajectory, speed, and deformation were carefully keyframed to sell the illusion of real weight and momentum — proving that the principles of great animation live in the details, not the complexity of the subject."
    />
  );
}

function PegJumpPage() {
  return (
    <AnimationProjectDetail
      title="Peg Jump — 3D Animation"
      subtitle="A 3D animation of a peg character jumping across platforms in Maya with a custom set and animation approach."
      vimeoId="1067221403"
      vimeoUrl="https://vimeo.com/1067221403"
      year="2025"
      categoryLabel="Animation"
      tags={["3D Animation", "Maya", "Environment Design", "Character Motion"]}
      overview="A 3D animation of a peg character jumping across platforms in Maya, built using a custom set and animation approach. The project demonstrates environmental storytelling through set design alongside character animation, bringing a simple figure to life within a purposefully constructed scene."
      challenge="Animate a convincing jump sequence that sells weight, airtime, and landing impact — while also designing a set that gives the motion context and scale without overshadowing the character."
      solution="The platform layout was designed to create natural anticipation — varying heights and gaps that make each jump feel deliberate and earned. The peg's animation focused on the key principles of squash, stretch, and follow-through, ensuring each takeoff and landing communicated real physical weight despite the character's minimal form."
    />
  );
}

function WalkCyclePage() {
  return (
    <AnimationProjectDetail
      title="Character Walk Cycle — 3D Animation"
      subtitle="A 3D character walk cycle animated in Autodesk Maya, focusing on believable human locomotion."
      vimeoId="1177111010"
      vimeoUrl="https://vimeo.com/1177111010"
      year="2025"
      categoryLabel="Animation"
      tags={["3D Animation", "Character Animation", "Maya", "Walk Cycle"]}
      overview="A 3D character walk cycle animated in Autodesk Maya, focusing on the fundamentals of believable human locomotion. Working from a pre-built model, the project hones in purely on the craft of animation — translating technical keyframes into natural, fluid movement."
      challenge="A walk cycle is deceptively simple — the smallest timing or weight shift error reads immediately as unnatural. The challenge was to animate a convincing, grounded walk that felt alive rather than mechanical."
      solution="By focusing on weight distribution, hip sway, and follow-through across each step, the animation moves beyond a basic loop into something that feels physically grounded. Every keyframe was tuned to ensure momentum carried naturally from one pose to the next."
    />
  );
}

// ── Router ─────────────────────────────────────────────────────────────────────

export const router = createBrowserRouter([
  { path: "/", Component: HomepagePage },
  { path: "/about", Component: AboutMePage },
  { path: "/work", Component: WorkPage },
  { path: "/work/uxui", Component: MyWorksPage },
  { path: "/work/uxui/meetup", Component: MeetUpPage },
  { path: "/work/uxui/rentique", Component: RentiquePage },
  { path: "/work/uxui/coffee", Component: CoffeePage },
  { path: "/work/uxui/lune", Component: LunePage },
  { path: "/work/uxui/pathway", Component: PathwayPage },
  { path: "/work/uxui/grabngo", Component: GrabNGoPage },
  { path: "/work/design", Component: MyWorksDesignPage },
  { path: "/work/design/convergence", Component: ConvergencePage },
  { path: "/work/design/cumbia", Component: CumbiaPage },
  { path: "/work/animation", Component: MyWorksAnimation },
  { path: "/work/animation/derby-car", Component: DerbyCarPage },
  { path: "/work/animation/ball-bounce", Component: BallBouncePage },
  { path: "/work/animation/peg-jump", Component: PegJumpPage },
  { path: "/work/animation/walk-cycle", Component: WalkCyclePage },
  { path: "/gallery", Component: GalleryCanvasPage },
  { path: "*", Component: HomepagePage },
]);
