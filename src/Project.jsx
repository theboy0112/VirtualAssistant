import React, { useState, useEffect } from "react";
import "./CSS/project.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { serviceImages, portfolioImages } from "./assets/serviceImages.js";

function Project() {
  const [activeTab, setActiveTab] = useState("services"); // "services" or "portfolio"
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveCardIndex(null);
  };

  const handleCardClick = (index) => {
    setActiveCardIndex(prevIndex => prevIndex === index ? null : index);
  };

  const servicesList = [
    {
      title: "Executive Assistance",
      image: serviceImages.execAssistance,
      description: "High-level administrative and C-suite support, managing complex calendars, priority communications, and executive operations.",
      tags: ["C-Suite Support", "Scheduling", "Confidentiality"]
    },
    {
      title: "Administrative Support",
      image: serviceImages.adminSupport,
      description: "End-to-end operational support including document control, vendor relations, meeting logistics, and task tracking.",
      tags: ["Operations", "Workflow", "Office Admin"]
    },
    {
      title: "Email Management",
      image: serviceImages.emailMgmt,
      description: "Achieving Inbox Zero through custom filtering rules, automated labelling, priority inbox triage, and professional drafting.",
      tags: ["Inbox Zero", "Gmail", "Outlook"]
    },
    {
      title: "Calendar Management",
      image: serviceImages.calendarMgmt,
      description: "Optimizing schedules with time-blocking, buffer management, multi-timezone coordination, and conflict resolution.",
      tags: ["Google Calendar", "Time Blocking", "Timezones"]
    },
    {
      title: "Appointment Scheduling",
      image: serviceImages.appointmentSched,
      description: "Streamlining client calls and team meetings using Calendly, Google Calendar, and automated reminder sequences.",
      tags: ["Calendly", "Client Booking", "Reminders"]
    },
    {
      title: "Data Entry",
      image: serviceImages.dataEntry,
      description: "Meticulous data recording, audit verification, database maintenance, and spreadsheet cleanup with 99.9% accuracy.",
      tags: ["Data Integrity", "Excel", "Spreadsheets"]
    },
    {
      title: "Internet Research",
      image: serviceImages.internetResearch,
      description: "Conducting thorough market analysis, vendor comparison, lead sourcing, and synthesizing research reports.",
      tags: ["Market Research", "Lead Gen", "Reporting"]
    },
    {
      title: "File Organization",
      image: serviceImages.fileOrg,
      description: "Designing intuitive cloud folder hierarchies, standardized file-naming conventions, and access permission controls.",
      tags: ["Google Drive", "Dropbox", "Cloud Filing"]
    },
    {
      title: "Travel Coordination",
      image: serviceImages.travelCoord,
      description: "Handling end-to-end travel logistics: flights, hotel reservations, ground transport, and master travel itineraries.",
      tags: ["Itineraries", "Logistics", "Reservations"]
    },
    {
      title: "Customer Support",
      image: serviceImages.customerSupport,
      description: "Providing empathetic, timely ticket resolution, client inquiries handling, and FAQ documentation.",
      tags: ["Client Care", "Helpdesk", "Zendesk/Freshdesk"]
    },
    {
      title: "CRM Management",
      image: serviceImages.crmMgmt,
      description: "Updating client contact records, pipeline stage management, deal logging, and activity tracking across CRM platforms.",
      tags: ["HubSpot", "Salesforce", "Lead Tracking"]
    },
    {
      title: "Google Workspace",
      image: serviceImages.googleWorkspace,
      description: "Power user management of Docs, Sheets, Slides, Drive, Forms, and Gmail for seamless collaboration.",
      tags: ["Docs", "Sheets", "Slides", "Drive"]
    },
    {
      title: "Microsoft Office",
      image: serviceImages.msOffice,
      description: "Expert creation and formatting of documents, spreadsheets, presentations, and Outlook communications.",
      tags: ["Word", "Excel", "PowerPoint", "Outlook"]
    },
    {
      title: "Document Preparation",
      image: serviceImages.docPrep,
      description: "Crafting polished executive reports, presentation pitch decks, templates, and corporate correspondence.",
      tags: ["Formatting", "Templates", "Proofreading"]
    }
  ];

  const portfolioList = [
    {
      title: "Email Management Workflow",
      image: portfolioImages.emailWorkflow,
      description: "Custom email triage system featuring color-coded labels, priority filters, canned responses, and daily inbox cleanup SOP.",
      tags: ["Inbox Zero", "SOP", "Templates"]
    },
    {
      title: "Executive Calendar Management",
      image: portfolioImages.calendarMgmtSample,
      description: "Master calendar system designed for C-level executives, featuring color-coded focus blocks, travel buffers, and automated booking.",
      tags: ["Calendar SOP", "Time Blocking", "Multi-Timezone"]
    },
    {
      title: "Administrative Dashboard",
      image: portfolioImages.adminDashboard,
      description: "Interactive Notion/Sheets dashboard for real-time tracking of executive tasks, recurring bills, vendor logs, and team updates.",
      tags: ["Notion", "Dashboard", "KPI Tracking"]
    },
    {
      title: "Meeting Notes Template",
      image: portfolioImages.meetingNotes,
      description: "Standardized executive meeting minutes template featuring attendee logs, action items with assigned owners, and key decision logs.",
      tags: ["Meeting Minutes", "Action Items", "Documentation"]
    },
    {
      title: "Travel Planning",
      image: portfolioImages.travelPlanning,
      description: "Comprehensive multi-city travel itinerary packet including flight details, hotel voucher links, local transport, and emergency contacts.",
      tags: ["Itinerary", "Travel Logistics", "Reservations"]
    },
    {
      title: "File Organization",
      image: portfolioImages.fileOrgSample,
      description: "Structured Google Drive taxonomy for a growing company, establishing standardized folder naming conventions and permission tiers.",
      tags: ["Drive Architecture", "Taxonomy", "Cloud Storage"]
    },
    {
      title: "Productivity Workspace",
      image: portfolioImages.productivityWorkspace,
      description: "All-in-one digital command center built in Notion integrating daily to-do lists, project Kanban boards, CRM contacts, and resource library.",
      tags: ["Notion Hub", "Kanban", "Workflow"]
    }
  ];

  const currentItems = activeTab === "services" ? servicesList : portfolioList;

  return (
    <div className="projects-section" id="project">
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ marginBottom: "15px" }}>Services & Portfolio</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 30px auto" }}>
          Click or tap any card below to view detailed service specs and key tools used.
        </p>

        {/* Tab Toggle */}
        <div style={{
          display: "inline-flex",
          background: "var(--glass-bg)",
          border: "1px solid var(--glass-border)",
          borderRadius: "16px",
          padding: "6px",
          gap: "8px"
        }}>
          <button
            onClick={() => handleTabChange("services")}
            style={{
              background: activeTab === "services" ? "var(--accent-color)" : "transparent",
              color: activeTab === "services" ? "#fff" : "var(--text-primary)",
              border: "none",
              padding: "10px 24px",
              borderRadius: "12px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            Services ({servicesList.length})
          </button>
          <button
            onClick={() => handleTabChange("portfolio")}
            style={{
              background: activeTab === "portfolio" ? "var(--accent-color)" : "transparent",
              color: activeTab === "portfolio" ? "#fff" : "var(--text-primary)",
              border: "none",
              padding: "10px 24px",
              borderRadius: "12px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            Work Samples ({portfolioList.length})
          </button>
        </div>
      </div>

      <div className="card-container">
        {currentItems.map((item, index) => {
          const isActive = activeCardIndex === index;
          return (
            <div
              className={`card animate__animated animate__fadeInUp ${isActive ? "active" : ""}`}
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 50}
              key={item.title}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="card-title">
                <h5 style={{ margin: 0, fontSize: "1.3rem" }}>{item.title}</h5>
                <span style={{ fontSize: "0.8rem", color: "var(--accent-color)", display: "block", marginTop: "6px", fontWeight: "600" }}>
                  {isActive ? "✕ Close Details" : "＋ Click for Details"}
                </span>
              </div>

              <div className="card-overlay">
                <h5 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--accent-color)", marginBottom: "10px" }}>
                  {item.title}
                </h5>
                <p className="card-description">{item.description}</p>
                <div className="card-buttons">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: "var(--glass-border)",
                        color: "var(--text-primary)",
                        padding: "4px 10px",
                        borderRadius: "8px",
                        fontSize: "0.8rem",
                        fontWeight: "600"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
