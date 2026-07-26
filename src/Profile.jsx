import React from "react";
import education from "./assets/education.png";
import experience from "./assets/experience.png";
import "./CSS/profile.css";
import "animate.css";

function Profile() {
  const whyHireMeCards = [
    {
      title: "Reliable",
      desc: "Dependable executive support ensuring deadlines are met and operations run smoothly without interruption."
    },
    {
      title: "Organized",
      desc: "Structured approach to inbox management, scheduling, file systems, and workflow tracking."
    },
    {
      title: "Professional",
      desc: "Polished communication, business etiquette, and high-level representation for executives and clients."
    },
    {
      title: "Tech-Savvy",
      desc: "Computer Science graduate proficient with modern digital workspace tools, cloud apps, and AI software."
    },
    {
      title: "Detail-Oriented",
      desc: "Meticulous accuracy in document preparation, data entry, calendar management, and research."
    },
    {
      title: "Fast Learner",
      desc: "Quick to master new software, company SOPs, and specialized tools with minimal supervision."
    },
    {
      title: "Confidential",
      desc: "Strict adherence to data privacy, NDA integrity, and handling sensitive business information."
    },
    {
      title: "Adaptable",
      desc: "Flexible in fast-paced environments, managing changing priorities and multitasking seamlessly."
    }
  ];

  const experienceHighlights = [
    { title: "Documentation", desc: "Creating standard operating procedures, meeting minutes, and corporate records." },
    { title: "Team Collaboration", desc: "Coordinating across cross-functional teams, clients, and executive stakeholders." },
    { title: "Problem Solving", desc: "Analyzing complex tasks and devising efficient, scalable administrative solutions." },
    { title: "Organization", desc: "Architecting structured digital file systems, inventory logs, and calendar schedules." },
    { title: "Process Improvement", desc: "Streamlining daily workflows to reduce operational friction and save executive time." },
    { title: "Digital Tools", desc: "Leveraging Google Workspace, MS Office, Notion, Trello, Slack, and AI automation." },
    { title: "Communication", desc: "Managing professional email correspondence, client inquiries, and meeting prep." }
  ];

  return (
    <div className="container" id="profile">
      <div className="profile-info animate__animated animate__fadeInLeft">
        <h4 className="profile-edu">
          <img src={education} alt="Education" className="profile-icon" />
          <span>Computer Science Graduate | Technical Proficiency</span>
        </h4>
        <h4 className="profile-exp">
          <img src={experience} alt="Experience" className="profile-icon" />
          <span>Virtual Assistant | Executive & Administrative Specialist</span>
        </h4>
        <p style={{ lineHeight: "1.7", color: "var(--text-secondary)", fontSize: "1.05rem", marginTop: "10px" }}>
          Computer Science graduate with strong technical proficiency and extensive expertise in Administrative Support, Executive Assistance, and Virtual Operations. Highly skilled in organization, communication, time management, and meticulous attention to detail. Committed to confidentiality, adaptability, and fast learning to optimize executive productivity and business growth.
        </p>
      </div>

      {/* Experience & Transferable Skills */}
      <div className="calendar-wrapper animate__animated animate__fadeInRight">
        <h3 style={{ color: "var(--accent-color)", fontSize: "1.6rem", fontWeight: "700", textAlign: "center", marginBottom: "15px" }}>
          Experience & Transferable Skills
        </h3>
        <p style={{ textAlign: "center", color: "var(--text-secondary)", marginBottom: "20px" }}>
          Leveraging a strong foundation in Computer Science and Frontend Development internship experience to deliver tech-driven administrative excellence.
        </p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "15px" }}>
          {experienceHighlights.map((item, idx) => (
            <div key={idx} style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              borderRadius: "16px",
              padding: "16px",
              textAlign: "left"
            }}>
              <h4 style={{ color: "var(--accent-color)", fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px" }}>
                {item.title}
              </h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.5" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Hire Me Section */}
      <div className="calendar-wrapper animate__animated animate__fadeInUp">
        <h3 style={{ color: "var(--accent-color)", fontSize: "1.6rem", fontWeight: "700", textAlign: "center", marginBottom: "15px" }}>
          Why Hire Me
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "15px" }}>
          {whyHireMeCards.map((card, index) => (
            <div key={index} style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              borderRadius: "16px",
              padding: "20px",
              transition: "transform 0.3s ease",
              textAlign: "left"
            }}>
              <h4 style={{ color: "var(--accent-color)", fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px" }}>
                {card.title}
              </h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.5" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
