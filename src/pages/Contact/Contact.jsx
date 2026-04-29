import { useState } from "react";

import FadeIn from "../../components/shared/FadeIn";
import PageBanner from "../../components/shared/PageBanner";
import SectionHeading from "../../components/shared/SectionHeading";

import "./Contact.css";

const EMPTY_FORM = { name: "", email: "", message: "" };


export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);

  const set = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSend = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    alert("Message sent! We'll be in touch soon.");
    setForm(EMPTY_FORM);
  };

  return (
    <>
      <PageBanner
        title="Contact Us"
        sub="Reservations, questions, or just to say hello"
      />

      <div className="section contact-section">
        <SectionHeading title="Get in Touch" />

        <div className="contact-grid">
          {/*  Map + address  */}
          <FadeIn>
            <div className="map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2166984395626!2d-73.9878449!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1699900000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant location"
              />
            </div>
            <div className="contact-address">
              <strong>New York Diner</strong>
              350 Fifth Avenue, New York, NY 10118<br />
              +1 (212) 555-0192<br />
              hello@nydiner.com
            </div>
          </FadeIn>

          {/*  Contact form  */}
          <FadeIn delay={0.15}>
            <div className="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="c-name">Name</label>
                <input
                  id="c-name" className="form-input" type="text"
                  placeholder="Your full name"
                  value={form.name} onChange={set("name")}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="c-email">Email</label>
                <input
                  id="c-email" className="form-input" type="email"
                  placeholder="your@email.com"
                  value={form.email} onChange={set("email")}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="c-message">Message</label>
                <textarea
                  id="c-message" className="form-textarea"
                  placeholder="Write your message here..."
                  value={form.message} onChange={set("message")}
                />
              </div>

              <button className="btn-submit" onClick={handleSend}>
                Send Message
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
