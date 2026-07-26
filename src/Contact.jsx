import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import li from "./assets/li.png";
import gh from "./assets/gh.png";
import "./CSS/contact.css";
import Typed from "typed.js";
import Swal from "sweetalert2";

function Contact() {
  const typedRef = useRef(null);
  const form = useRef();

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

  const sendEmail = (e) => {
    e.preventDefault();

    const honeypot = form.current.querySelector('input[name="honeypot"]').value;
    if (honeypot) {
      Swal.fire({
        title: "Bot Detected",
        text: "Message not sent.",
        icon: "warning",
        confirmButtonColor: "var(--accent-color)",
      });
      return;
    }

    const submitButton = form.current.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    const formData = new FormData(form.current);
    const name = formData.get("from_name");
    const email = formData.get("user_email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const triggerMailtoFallback = () => {
      const mailtoUrl = `mailto:clifboycabrera1202@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoUrl;
    };

    emailjs
      .sendForm(
        "service_e5ngyy6",
        "template_yn8kixe",
        form.current,
        "dcauHtnGsdkNIMdna"
      )
      .then(
        () => {
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully to clifboycabrera1202@gmail.com!",
            icon: "success",
            confirmButtonColor: "var(--accent-color)",
            background: "var(--bg-secondary)",
            color: "var(--text-primary)",
          });
          form.current.reset();
        },
        (error) => {
          console.warn("EmailJS direct send encountered an issue, opening mailto fallback:", error);
          triggerMailtoFallback();
          Swal.fire({
            title: "Opening Email Client",
            text: "Opening your default email client to send message directly to clifboycabrera1202@gmail.com...",
            icon: "info",
            confirmButtonColor: "var(--accent-color)",
            background: "var(--bg-secondary)",
            color: "var(--text-primary)",
          });
        }
      )
      .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
      });
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

              <button type="submit" className="submit-button">
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
