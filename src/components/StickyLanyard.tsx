"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import("./Lanyard"), { ssr: false });

export default function StickyLanyard() {
  const [visible, setVisible] = useState(false);
  const markerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const marker = markerRef.current;
      if (!marker) return;
      // The marker's position relative to the document top
      const markerTop = marker.getBoundingClientRect().top + window.scrollY;
      
      // Only show the lanyard when the user has scrolled down to the Projects section
      // (meaning the top of the Projects section is near the top of the viewport)
      if (window.scrollY > markerTop - 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
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
