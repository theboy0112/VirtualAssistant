import React, { useState, useEffect } from "react";
import "./CSS/skills.css";
import { skillIcons } from "./assets/svgIcons.js";

function Skills() {
  const [hoveredTitle, setHoveredTitle] = useState("");
  const [hoveredDescription, setHoveredDescription] = useState("");
  const [activeCard, setActiveCard] = useState(null);
  const [isTouch, setIsTouch] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all"); // "all", "admin", "software"

  useEffect(() => {
    const checkTouch = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    };
    setIsTouch(checkTouch());
  }, []);

  const allSkills = [
    // Administrative Skills
    {
      category: "admin",
      title: "Organization",
      bgColor: "#2563eb",
      img: skillIcons.organization,
      description: "Systematizing workflows, digital filing systems, and administrative processes for peak efficiency."
    },
    {
      category: "admin",
      title: "Communication",
      bgColor: "#3b82f6",
      img: skillIcons.communication,
      description: "Clear, professional written and verbal communication across executive teams and external clients."
    },
    {
      category: "admin",
      title: "Time Management",
      bgColor: "#1d4ed8",
      img: skillIcons.timeManagement,
      description: "Prioritizing high-value tasks, managing deadlines, and optimizing executive schedules."
    },
    {
      category: "admin",
      title: "Multitasking",
      bgColor: "#4f46e5",
      img: skillIcons.multitasking,
      description: "Efficiently handling concurrent projects and shifting operational demands without compromising quality."
    },
    {
      category: "admin",
      title: "Customer Service",
      bgColor: "#0284c7",
      img: skillIcons.customerService,
      description: "Providing empathetic, responsive, and highly professional support to clients and stakeholders."
    },
    {
      category: "admin",
      title: "Attention to Detail",
      bgColor: "#0d9488",
      img: skillIcons.attentionToDetail,
      description: "Ensuring precision in data entry, document formatting, schedule management, and report auditing."
    },

    // Software & Productivity Skills
    {
      category: "software",
      title: "Microsoft Word",
      bgColor: "#2b579a",
      img: skillIcons.msWord,
      description: "Professional document creation, corporate formatting, report templates, and documentation."
    },
    {
      category: "software",
      title: "Microsoft Excel",
      bgColor: "#217346",
      img: skillIcons.msExcel,
      description: "Data analysis, financial tracking, complex formulas, pivot tables, and spreadsheet organization."
    },
    {
      category: "software",
      title: "PowerPoint",
      bgColor: "#d24726",
      img: skillIcons.powerPoint,
      description: "Designing engaging executive presentations, pitch decks, and corporate slide decks."
    },
    {
      category: "software",
      title: "Google Docs",
      bgColor: "#4285f4",
      img: skillIcons.googleDocs,
      description: "Real-time collaborative document editing, team SOP creation, and report drafting."
    },
    {
      category: "software",
      title: "Google Sheets",
      bgColor: "#0f9d58",
      img: skillIcons.googleSheets,
      description: "Cloud-based spreadsheet management, tracking logs, automated calculations, and data organization."
    },
    {
      category: "software",
      title: "Google Calendar",
      bgColor: "#4285f4",
      img: skillIcons.googleCalendar,
      description: "Advanced schedule management, time blocking, multi-timezone coordination, and appointment booking."
    },
    {
      category: "software",
      title: "Gmail",
      bgColor: "#ea4335",
      img: skillIcons.gmail,
      description: "Inbox zero management, email filtering, auto-responders, canned templates, and executive correspondence."
    },
    {
      category: "software",
      title: "Google Drive",
      bgColor: "#ffba00",
      img: skillIcons.googleDrive,
      description: "Cloud storage architecture, permission management, and structured file taxonomies."
    },
    {
      category: "software",
      title: "Canva",
      bgColor: "#00c4cc",
      img: skillIcons.canva,
      description: "Visual content creation, executive graphics, presentation assets, and visual documentation."
    },
    {
      category: "software",
      title: "ChatGPT",
      bgColor: "#10a37f",
      img: skillIcons.chatgpt,
      description: "AI-assisted drafting, research automation, content summarization, and workflow optimization."
    },
    {
      category: "software",
      title: "Slack",
      bgColor: "#4a154b",
      img: skillIcons.slack,
      description: "Real-time team communication, channel organization, and operational messaging."
    },
    {
      category: "software",
      title: "Zoom",
      bgColor: "#2d8cff",
      img: skillIcons.zoom,
      description: "Meeting scheduling, host coordination, agenda preparation, and virtual conference management."
    },
  ];

  const filteredCards = selectedCategory === "all" 
    ? allSkills 
    : allSkills.filter(s => s.category === selectedCategory);

  const handleCardClick = (index, card) => {
    if (isTouch) {
      if (activeCard === index) {
        setActiveCard(null);
        setHoveredTitle("");
        setHoveredDescription("");
      } else {
        setActiveCard(index);
        setHoveredTitle(card.title);
        setHoveredDescription(card.description);
      }
    }
  };

  const handleMouseEnter = (index, card) => {
    if (!isTouch) {
      setHoveredTitle(card.title);
      setHoveredDescription(card.description);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouch) {
      setHoveredTitle("");
      setHoveredDescription("");
    }
  };

  return (
    <div className="skills" id="skills">
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--text-primary)", marginBottom: "15px" }}>
          Skills & Software Proficiency
        </h2>

        {/* Filter Buttons */}
        <div style={{ display: "inline-flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={() => setSelectedCategory("all")}
            style={{
              background: selectedCategory === "all" ? "var(--accent-color)" : "var(--glass-bg)",
              color: selectedCategory === "all" ? "#fff" : "var(--text-primary)",
              border: "1px solid var(--glass-border)",
              padding: "8px 18px",
              borderRadius: "12px",
              fontWeight: "600"
            }}
          >
            All Skills ({allSkills.length})
          </button>
          <button
            onClick={() => setSelectedCategory("admin")}
            style={{
              background: selectedCategory === "admin" ? "var(--accent-color)" : "var(--glass-bg)",
              color: selectedCategory === "admin" ? "#fff" : "var(--text-primary)",
              border: "1px solid var(--glass-border)",
              padding: "8px 18px",
              borderRadius: "12px",
              fontWeight: "600"
            }}
          >
            Administrative Skills (6)
          </button>
          <button
            onClick={() => setSelectedCategory("software")}
            style={{
              background: selectedCategory === "software" ? "var(--accent-color)" : "var(--glass-bg)",
              color: selectedCategory === "software" ? "#fff" : "var(--text-primary)",
              border: "1px solid var(--glass-border)",
              padding: "8px 18px",
              borderRadius: "12px",
              fontWeight: "600"
            }}
          >
            Software & Productivity (15)
          </button>
        </div>
      </div>

      <div className="skills-wrapper">
        <div className="description-container">
          <h3 className="skill-title">{hoveredTitle || "Hover or Tap a Skill"}</h3>
          <p className="skill-description">
            {hoveredDescription || "Select any skill card on the right to explore my specific virtual assistance expertise and software tool mastery."}
          </p>
        </div>

        <div className="cards-container">
          {filteredCards.map((card, index) => (
            <li
              className={`cards ${isTouch && activeCard === index ? "active" : ""}`}
              key={card.title}
              onClick={() => handleCardClick(index, card)}
              onMouseEnter={() => handleMouseEnter(index, card)}
              onMouseLeave={handleMouseLeave}
            >
              <span style={{ backgroundColor: card.bgColor }}></span>
              <span style={{ backgroundColor: card.bgColor }}></span>
              <span style={{ backgroundColor: card.bgColor }}></span>
              <img src={card.img} alt={card.title} />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
