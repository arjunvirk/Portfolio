// MobileMenu.jsx
import React from "react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    // fixed inset-0 covers entire viewport; we animate opacity instead of height
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      // background is applied separately so it fades with opacity
      style={{ background: "rgba(0,0,0,0.95)" }}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <nav className="flex flex-col items-center">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          Home
        </a>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0 delay-75" : "opacity-0 translate-y-5"}
          `}
        >
          About
        </a>

        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0 delay-150" : "opacity-0 translate-y-5"}
          `}
        >
          Projects
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-5"}
          `}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
