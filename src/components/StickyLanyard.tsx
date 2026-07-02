"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import("./Lanyard"), { ssr: false });

export default function StickyLanyard() {
  const [visible, setVisible] = useState(false);
  const markerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show if the marker is on-screen OR has scrolled past the top of the viewport
        setVisible(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );
    observer.observe(marker);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={markerRef} className="absolute top-0 w-full h-1" />
      {visible && (
        <div className="hidden lg:block fixed top-0 right-8 w-[320px] h-screen z-40 pointer-events-none">
          <Lanyard position={[0, 0, 20]} lanyardWidth={1.5} />
        </div>
      )}
    </>
  );
}
