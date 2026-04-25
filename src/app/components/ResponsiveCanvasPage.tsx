import { useEffect, useState, type ReactNode } from "react";

type ResponsiveCanvasPageProps = {
  height: number;
  children: ReactNode;
};

const DESIGN_WIDTH = 1280;

export default function ResponsiveCanvasPage({
  height,
  children,
}: ResponsiveCanvasPageProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      const nextScale = Math.min(viewportWidth / DESIGN_WIDTH, 1);
      setScale(nextScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto bg-[#120a08]">
      <div
        className="mx-auto relative"
        style={{
          width: DESIGN_WIDTH * scale,
          height: height * scale,
        }}
      >
        <div
          style={{
            width: DESIGN_WIDTH,
            height,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}