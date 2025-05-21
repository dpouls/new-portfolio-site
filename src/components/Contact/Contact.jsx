import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Swal from "sweetalert2";

const ContactUs = (path) => {
  console.log('path', path);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current && form.current['from_name'].value === "") {
      alert("Please enter your name");
      return;
    }
    if (form.current && form.current?.reply_to.value === "") {
      alert("Please enter your email");
      return;
    }
    if (form.current && form.current?.message.value === "") {
      alert("Please enter your message");
      return;
    }
    emailjs
      .sendForm("service_ryog1jc", "template_m93onwp", form.current, {
        publicKey: "kfhhd723QHRtafKOV",
      })
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            text: "I'll get back to you as soon as possible.",
            icon: "success",  
          });
          form.current.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div class="home">
      <div class="contact">
        <h1 style={{ color: "#1872CE" }}>Contact Me</h1>
        
        <div class="social-links">
          <a href="https://github.com/dpouls" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="social-icon">📦</i>
            <span class="social-label">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/dallin-poulson" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="social-icon">💼</i>
            <span class="social-label">LinkedIn</span>
          </a>
          <a href="mailto:dallinpoulson@gmail.com" class="social-link">
            <i class="social-icon">✉️</i>
            <span class="social-label">Email</span>
          </a>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <input
              autoFocus
              type="text"
              name="from_name"
              placeholder="Name"
              style={{ width: "45%" }}
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Email"
              style={{ width: "45%" }}
            />
          </div>
          <textarea name="message" placeholder="Your message here..." />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
