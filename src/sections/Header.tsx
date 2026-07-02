"use client";
import { useEffect, useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Force scroll to top on reload/mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id], div[id]");
      let currentSection = activeSection;

      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = (section as HTMLElement).offsetTop - 150;
        const height = (section as HTMLElement).offsetHeight;
        const id = section.getAttribute("id");

        if (id && ["home", "projects", "about", "contact"].includes(id)) {
          if (top >= offset && top < offset + height) {
            currentSection = id;
          }
        }
      });

      // Special case: if we hit the bottom of the page, highlight the last section
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          className={`nav-item ${
            activeSection === "home" ? "bg-white !text-gray-900 hover:bg-white/70" : ""
          }`}
        >
          Home
        </a>
        <a
          href="#projects"
          className={`nav-item ${
            activeSection === "projects" ? "bg-white !text-gray-900 hover:bg-white/70" : ""
          }`}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`nav-item ${
            activeSection === "about" ? "bg-white !text-gray-900 hover:bg-white/70" : ""
          }`}
        >
          About
        </a>
        <a
          href="#contact"
          className={`nav-item ${
            activeSection === "contact" ? "bg-white !text-gray-900 hover:bg-white/70" : ""
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
