import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import li from "./assets/li.png";
import gh from "./assets/gh.png";
import "./CSS/contact.css";
import Typed from "typed.js";
import Swal from "sweetalert2";

function Contact() {
  const typedRef = useRef(null);
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Get In Touch",
        "Virtual Assistant",
        "Executive Assistant",
        "Administrative Support"
      ],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const sanitizeInput = (value) => {
    if (typeof value !== "string") return "";
    return value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  };

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formElement = form.current;
    if (!formElement) return;

    const honeypot = formElement.querySelector('input[name="honeypot"]');
    if (honeypot && honeypot.value.trim()) {
      Swal.fire({
        title: "Bot Detected",
        text: "Message not sent.",
        icon: "warning",
        confirmButtonColor: "var(--accent-color)",
      });
      return;
    }

    const formData = new FormData(formElement);
    const payload = {
      from_name: sanitizeInput(formData.get("from_name")),
      user_email: sanitizeInput(formData.get("user_email")),
      subject: sanitizeInput(formData.get("subject")),
      message: sanitizeInput(formData.get("message")),
      honeypot: sanitizeInput(formData.get("honeypot")),
    };

    if (!payload.from_name || !payload.user_email || !payload.subject || !payload.message) {
      Swal.fire({
        title: "Validation Error",
        text: "Please fill out all the required fields.",
        icon: "error",
        confirmButtonColor: "var(--accent-color)",
      });
      return;
    }

    if (!isValidEmail(payload.user_email)) {
      Swal.fire({
        title: "Validation Error",
        text: "Please enter a valid email address.",
        icon: "error",
        confirmButtonColor: "var(--accent-color)",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Unable to send message.");
      }

      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully to clifboycabrera1202@gmail.com!",
        icon: "success",
        confirmButtonColor: "var(--accent-color)",
        background: "var(--bg-secondary)",
        color: "var(--text-primary)",
      });

      formElement.reset();
    } catch (error) {
      console.error("Contact form submission failed", error);
      Swal.fire({
        title: "Message Not Sent",
        text: error.message || "Something went wrong while sending your message.",
        icon: "error",
        confirmButtonColor: "var(--accent-color)",
        background: "var(--bg-secondary)",
        color: "var(--text-primary)",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <div className="contact-info animate__animated animate__fadeInLeft">
          <div className="typed-container">
            <h1 className="typed-title">
              <span ref={typedRef}></span>
            </h1>
          </div>
          <p className="contact-subtitle">
            Looking for a reliable Virtual Assistant, Executive Assistant, or Administrative Assistant? I am available for full-time, part-time, and contract opportunities. Reach out below to discuss how I can help streamline your daily business operations.
          </p>

          <div className="contact-methods" style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
            <div className="method-item">
              <span className="method-label">
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "6px" }} /> Email
              </span>
              <a href="mailto:clifboycabrera1202@gmail.com" className="method-link">
                clifboycabrera1202@gmail.com
              </a>
            </div>

            <div className="method-item">
              <span className="method-label">
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: "6px" }} /> Phone
              </span>
              <a href="tel:09317283168" className="method-link">
                09317283168
              </a>
            </div>
          </div>

          <div className="social-links">
            <button
              className="social-btn"
              onClick={() => window.open("https://www.linkedin.com/in/clifbelle-cabrera-676150372/", "_blank")}
              title="LinkedIn"
            >
              <img src={li} alt="LinkedIn" />
            </button>
            <button
              className="social-btn"
              onClick={() => window.open("https://github.com/theboy0112", "_blank")}
              title="GitHub"
            >
              <img src={gh} alt="GitHub" />
            </button>
          </div>
        </div>

        <div className="contact-form-wrapper animate__animated animate__fadeInRight">
          <div className="glass-card contact-card">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject (e.g. Executive Assistant Role / Virtual Assistance Inquiry)"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="How can I help support your business?"
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <input
                type="text"
                name="honeypot"
                className="honeypot"
                tabIndex="-1"
                autoComplete="off"
              />

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
