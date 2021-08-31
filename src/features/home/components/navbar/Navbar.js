import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export const Navbar = ({ links, hide }) => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  return (
    <nav
      role="navigation"
      aria-label="Main Menu"
      style={{ display: hide ? "none" : "flex" }}
      className={toggle ? "responsive" : ""}
    >
      <ul>
        {links.map((link, index) => {
          return (
            <li key={`${link.text}-${index}`}>
              <a
                href={link.url}
                style={{
                  animation: `fade-in 1s ease-out ${index * 0.1}s 1 forwards`,
                }}
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
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
    </nav>
  );
};
