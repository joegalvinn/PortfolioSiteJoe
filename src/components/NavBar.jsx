"use client";
import { Play } from "next/font/google";
import "./navbar.css";
import useMousePosition from "./useMousePosition";
import { useState } from "react";

// Google font setup
const play = Play({ weight: "400", subsets: ["latin"] });

const Navbar = ({ sections }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 40 : 30;

  return (
    <div className={play.className}>
      <nav className="navbar-container fixed z-50 p-4">
        <ul className="nav-list">
          {/* Back to Top Link */}
          <li className="nav-item back-to-top-item pb-2">
            <a href="#" className="nav-link back-to-top-link">
              Back to Top
            </a>
          </li>

          {/* Section Links */}
          {sections.map((section, index) => (
            <li key={index} className={`nav-item section-item-${index} pb-2`}>
              <a
                href={section.link}
                className={`nav-link section-link-${index}`}
              >
                {section.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
