"use client";
import { useState, useRef, useEffect } from "react";
import rough from "roughjs/bundled/rough.esm.js";

function NavLink({ text, href, hovered }) {
  const linkRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    svg.innerHTML = "";

    if (hovered && linkRef.current) {
      const el = linkRef.current;
      const rc = rough.svg(svg);
      const width = el.offsetWidth;
      const height = el.offsetHeight;

      const ellipse = rc.ellipse(
        width / 2,
        height / 2,
        width - 7,
        height - 6,
        {
          stroke: "black",
          strokeWidth: 2,
          roughness: 2.2,
          fill: "transparent",
        }
      );

      svg.appendChild(ellipse);
    }
  }, [hovered]);

  return (
    <a
      href={href}
      ref={linkRef}
      className={`
        relative 
        text-black 
        hover:text-white 
        no-underline 
        inline-block 
        transition-colors duration-300
        px-1 py-1 text-xs         // base styles for smallest screens
        sm:px-4 sm:text-sm        // slightly larger for small screens
        md:px-4 md:text-base      // medium screens
        lg:px-4 lg:text-lg        // large screens
      `}
    >
      {text}
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </a>
  );
}

export default function FloatingNavbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [width, setWidth] = useState("w-[30%] md:w-[20%]"); // default collapsed width
  const [padding, setPadding] = useState("px-3");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(isHovered ? "w-[90%] sm:w-[70%] md:w-[70%] lg:w-150" : "w-[30%] md:w-[20%] lg:w-40");
      //setWidth(isHovered ? "w-300": "w-[30%] md:w-[20%] lg:w-[10%]");
      //setPadding(isHovered ? "px-2 sm:px-2 md:px-4 lg:px-2" : "px-2");
    }, 0); // allows transition to register
    return () => clearTimeout(timeout);
  }, [isHovered]);

  const handleEnter = () => setIsHovered(true);
  const handleLeave = () => setIsHovered(false);

  const menuItems = ["Home", "About", "Projects", "Resume", "CodeForces"];

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`
        fixed left-5 top-5 z-10 h-[40px] md:h-[70px]
        bg-gradient-to-tl from-white/5 to-white/10 
        border border-white/20 
        backdrop-blur-lg shadow-xl 
        rounded-[30px] flex items-center 
        overflow-hidden whitespace-nowrap cursor-pointer
        transition-all duration-500 ease-in-out
        ${width} ${padding}
      `}
    >
      {!isHovered ? (
//         <div className="flex items-center justify-between w-10 px-1 md:px-4 lg:px-4">
//   {/* Hamburger Icon */}
//   <div className="relative sm:w-6 md:w-6 h-4">
//     <span className="absolute sm:w-2 md:w-6 h-[2px] bg-white top-0 transition-all" />
//     <span className="absolute sm:w-2 md:w-6 h-[2px] bg-white top-[7px] transition-all" />
//     <span className="absolute sm:w-2 md:w-6 h-[2px] bg-white top-[14px] transition-all" />
//   </div>

//   {/* Hover text - visible on larger screens, hidden on small ones */}
//   <span className="hidden sm:inline text-white text-xs md:text-sm font-semibold font-mono tracking-wider select-none">
//     Hover
//   </span>
// </div>

      
        <div className="flex items-center justify-around w-full px-2 md:px-4 lg:px-4">
  {/* Hamburger Icon */}
  <div className="relative w-10 h-4">
    <span className="absolute w-5 h-[2px] bg-white top-0 transition-all" />
    <span className="absolute w-5 h-[2px] bg-white top-[7px] transition-all" />
    <span className="absolute w-5 h-[2px] bg-white top-[14px] transition-all" />
  </div>

  <span className="text-white text-xs md:text-sm font-semibold font-mono tracking-wider select-none">
    Hover
  </span>
</div>
) : (
<div className="flex w-full justify-around items-center">
  {menuItems.map((label) => (
    <div
      key={label}
      onMouseEnter={() => setHoveredItem(label.toLowerCase())}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <NavLink
        href={`/${label.toLowerCase()}`}
        text={label}
        hovered={hoveredItem === label.toLowerCase()}
      />
    </div>
  ))}
</div>

      )}
    </div>
  );
}
