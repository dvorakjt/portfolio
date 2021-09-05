import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ColorModeContext } from "../../../../services/colormode/colormode.context";
import "./styles.css";

export const Navbar = ({ links, hide }) => {
  const { colorMode } = useContext(ColorModeContext);
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      role="navigation"
      aria-label="Main Menu"
      style={{ display: hide ? "none" : "flex" }}
      className={`${colorMode === "light" ? "lightMode" : "darkMode"} ${
        toggle ? "responsive" : ""
      }`}
    >
      <ul>
        {links.map((link, index) => {
          return (
            <li
              key={`${link.text}-${index}`}
              className={`${
                colorMode === "light"
                  ? "lightMode lightModeHighlight"
                  : "darkMode darkModeHighlight"
              }`}
            >
              <a
                onClick={() => setToggle(false)}
                href={link.url}
                style={{
                  animation: `fade-in 1s ease-out ${index * 0.1}s 1 forwards`,
                }}
                className={`${
                  colorMode === "light" ? "lightMode" : "darkMode"
                }`}
              >
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <button
        id="hamburger"
        onClick={() => setToggle(!toggle)}
        aria-expanded={toggle}
        aria-label={`${toggle ? "Close" : "Open"} Mobile Navigation Menu`}
        className={`${
          colorMode === "light"
            ? "lightMode lightModeHighlight"
            : "darkMode darkModeHighlight"
        }`}
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
    </nav>
  );
};
