import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import skills from "./assets/skills.png";
import project from "./assets/project.png";
import home from "./assets/home.png";
import about from "./assets/about.png";
import message from "./assets/message.png";
import Typed from "typed.js";
import "./CSS/App.css";
import "animate.css";

function Home() {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false; // Default to Light Mode
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.body.className = theme;
    document.documentElement.className = theme;
  }, [darkMode]);

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        "Virtual Assistant",
        "Executive Assistant",
        "Administrative Assistant"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
    });

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="home-background">
      <nav>
        <ul className="nav-list">
          <li className="nav-item logo-item">
            <div className="logo-wrapper">
              <FontAwesomeIcon icon={faBriefcase} className="logo-icon" />
              <span className="logo-text">VA</span>
            </div>
          </li>
          <li className="nav-item">
            <a href="#home" className="button">
              <img src={home} alt="Home" />
              <span className="label">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#profile" className="button">
              <img src={about} alt="About" />
              <span className="label">About</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#project" className="button">
              <img src={project} alt="Services" />
              <span className="label">Services</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="button">
              <img src={skills} alt="Skills" />
              <span className="label">Skills</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="button">
              <img src={message} alt="Contact" />
              <span className="label">Contact</span>
            </a>
          </li>
          <li className="nav-item">
            <button
              className="button theme-toggle"
              onClick={toggleDarkMode}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                className={darkMode ? "sun-icon" : "moon-icon"}
              />
            </button>
          </li>
        </ul>
      </nav>

      <div className="hero-content animate__animated animate__fadeIn" style={{ maxWidth: "850px", padding: "0 20px" }}>
        <div style={{
          display: "inline-block",
          padding: "6px 16px",
          borderRadius: "20px",
          background: "var(--glass-bg)",
          border: "1px solid var(--glass-border)",
          color: "var(--accent-color)",
          fontSize: "0.95rem",
          fontWeight: "600",
          marginBottom: "15px",
          letterSpacing: "0.05em"
        }}>
          <span ref={typedRef}></span>
        </div>

        <h1 className="hero-title" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.2", marginBottom: "15px" }}>
          Helping Businesses Stay Organized, Efficient, and Productive.
        </h1>

        <p className="hero-subtitle" style={{ fontSize: "1.15rem", lineHeight: "1.7", margin: "0 auto 30px auto" }}>
          Computer Science graduate providing reliable administrative support, executive assistance, and virtual assistance. I help businesses streamline daily operations through excellent organization, communication, and modern digital tools.
        </p>

        <div className="hero-buttons" style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" className="visit-button" style={{ textDecoration: "none", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "12px 28px", fontSize: "1rem" }}>
            Hire Me
          </a>
          <a href="/clifboyresumeVA1.pdf" download="clifboyresumeVA1.pdf" className="button" style={{ textDecoration: "none", color: "var(--text-primary)", display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "12px 24px", fontSize: "1rem" }}>
            Download Resume
          </a>
          <a href="/clifboyresumeVA1.pdf" target="_blank" rel="noopener noreferrer" className="button" style={{ textDecoration: "none", color: "var(--text-primary)", display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "12px 24px", fontSize: "1rem" }}>
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
