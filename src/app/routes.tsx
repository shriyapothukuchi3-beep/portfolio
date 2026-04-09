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
    <div className="w-full h-screen overflow-y-auto overflow-x-auto">
      <div style={{ height: "3800px", minWidth: "1280px", position: "relative" }}>
        <Homepage />
        <NavigationOverlay />
        <TransparentLink to="/work" style={{ left: 480, top: 730, width: 242, height: 99 }} />
        <TransparentLink to="/about" style={{ left: 920, top: 728, width: 242, height: 99 }} />
        <TransparentLink to="/work/design" style={{ left: 34, top: 2800, width: 581, height: 280 }} />
        <TransparentLink to="/work/animation" style={{ left: 664, top: 2799, width: 581, height: 280 }} />
      </div>
    </div>
  );
}

function AboutMePage() {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-auto">
      <div style={{ height: "3950px", minWidth: "1280px", position: "relative" }}>
        <AboutMe />
        <NavigationOverlay />
      </div>
    </div>
  );
}

function WorkPage() {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-auto">
      <div style={{ height: "2300px", minWidth: "1280px", position: "relative" }}>
        <Work />
        <NavigationOverlay showBack backTo="/" />
        <TransparentLink to="/work/uxui" style={{ left: 99, top: 485, width: 747, height: 385 }} />
        <TransparentLink to="/work/design" style={{ left: 490, top: 1071, width: 747, height: 385 }} />
        <TransparentLink to="/work/animation" style={{ left: 65, top: 1657, width: 747, height: 425 }} />
      </div>
    </div>
  );
}

function MyWorksPage() {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-auto">
      <div style={{ height: "2600px", minWidth: "1280px", position: "relative" }}>
        <MyWorks />
        <NavigationOverlay showBack backTo="/work" />
        <TransparentLink to="/work/uxui/lune" style={{ left: 44, top: 744, width: 580, height: 784 }} />
        <TransparentLink to="/work/uxui/coffee" style={{ left: 656, top: 744, width: 580, height: 784 }} />
        <TransparentLink to="/work/uxui/rentique" style={{ left: 45, top: 1590, width: 580, height: 757 }} />
        <TransparentLink to="/work/uxui/meetup" style={{ left: 656, top: 1590, width: 580, height: 757 }} />
      </div>
    </div>
  );
}

function MyWorksDesignPage() {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-auto">
      <div style={{ height: "1700px", minWidth: "1280px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, width: "1280px", overflowX: "clip" }}>
          <MyWorksDesign />
        </div>
        <NavigationOverlay showBack backTo="/work" />
        <TransparentLink to="/work/design/convergence" style={{ left: 44, top: 744, width: 580, height: 784 }} />
        <TransparentLink to="/work/design/cumbia" style={{ left: 656, top: 744, width: 580, height: 784 }} />
      </div>
    </div>
  );
}

function MeetUpPage() {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-auto">
      <div style={{ height: "5300px", minWidth: "1280px", position: "relative" }}>
        <MeetUp />
        <NavigationOverlay showBack backTo="/work/uxui" />
      </div>
    </div>
  );
}

function RentiquePage() {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-auto">
      <div style={{ height: "4700px", minWidth: "1280px", position: "relative" }}>
        <Rentique />
        <NavigationOverlay showBack backTo="/work/uxui" />
      </div>
    </div>
  );
}

function CoffeePage() {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-auto">
      <div style={{ height: "5900px", minWidth: "1280px", position: "relative" }}>
        <Coffee />
        <NavigationOverlay showBack backTo="/work/uxui" />
      </div>
    </div>
  );
}

function LunePage() {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-auto">
      <div style={{ height: "6700px", minWidth: "1280px", position: "relative" }}>
        <Lune />
        <NavigationOverlay showBack backTo="/work/uxui" />
      </div>
    </div>
  );
}

function ConvergencePage() {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-auto">
      <div style={{ height: "5100px", minWidth: "1280px", position: "relative" }}>
        <Convergence />
        <NavigationOverlay showBack backTo="/work/design" />
      </div>
    </div>
  );
}

function CumbiaPage() {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-auto">
      <div style={{ height: "5100px", minWidth: "1280px", position: "relative" }}>
        <CumbiaProject />
      </div>
    </div>
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
  { path: "/work/design", Component: MyWorksDesignPage },
  { path: "/work/design/convergence", Component: ConvergencePage },
  { path: "/work/design/cumbia", Component: CumbiaPage },
  { path: "/work/animation", Component: MyWorksAnimation },
  { path: "/work/animation/derby-car", Component: DerbyCarPage },
  { path: "/work/animation/ball-bounce", Component: BallBouncePage },
  { path: "/work/animation/peg-jump", Component: PegJumpPage },
  { path: "/work/animation/walk-cycle", Component: WalkCyclePage },
  { path: "/gallery", Component: GalleryPage },
  { path: "*", Component: HomepagePage },
]);