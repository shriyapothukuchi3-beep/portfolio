import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router";

type ResponsiveCanvasPageProps = {
  height: number;
  children: ReactNode;
};

const DESIGN_WIDTH = 1280;

function getInitialScrollTop(pathname: string, scale: number) {
  if (/^\/work\/uxui\/[^/]+$/.test(pathname)) {
    return 980 * scale;
  }

  return 0;
}

export default function ResponsiveCanvasPage({
  height,
  children,
}: ResponsiveCanvasPageProps) {
  const [scale, setScale] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = Math.max(
        window.innerWidth || 0,
        document.documentElement.clientWidth || 0,
        window.visualViewport?.width || 0,
      );
      const nextScale = Math.min(viewportWidth / DESIGN_WIDTH, 1);
      setScale(nextScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    window.addEventListener("pageshow", updateScale);
    window.addEventListener("load", updateScale);
    window.visualViewport?.addEventListener("resize", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale);
      window.removeEventListener("pageshow", updateScale);
      window.removeEventListener("load", updateScale);
      window.visualViewport?.removeEventListener("resize", updateScale);
    };
  }, []);

  useEffect(() => {
    const targetTop = getInitialScrollTop(location.pathname, scale);

    requestAnimationFrame(() => {
      window.scrollTo({ top: targetTop, left: 0, behavior: "auto" });
    });
  }, [location.pathname, scale]);

  return (
    <div
      className="min-h-screen overflow-x-hidden overflow-y-auto bg-[#120a08]"
      style={{ width: "100vw", minWidth: "100vw" }}
    >
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
