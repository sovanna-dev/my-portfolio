import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import FadeInSection from "./FadeInSection";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

function Contact() {
    const formRef = useRef();
    const [status, setStatus] = useState("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setStatus("sent");
                formRef.current.reset();
            })
            .catch(() => {
                setStatus("error");
            });
    };

    return (
        <section id="contact" className="contact">
            <h2 className="section-title">Contact Me</h2>
            <p className="contact-sub">
                Have an opportunity or just want to say hi? Send me a message.
            </p>

            <FadeInSection delay={0.1}>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <div className="contact-item">
                            <span className="info-label">Email</span>
                            <span className="info-value">rasovanna785@email.com</span>
                        </div>
                        <div className="contact-item">
                            <span className="info-label">LinkedIn</span>
                            <a
                                href="https://linkedin.com/in/sovanna-ra-866504347/"
                                target="_blank"
                                rel="noreferrer"
                                className="info-value link"
                            >
                                linkedin.com/in/sovanna-ra
                            </a>
                        </div>
                        <div className="contact-item">
                            <span className="info-label">GitHub</span>
                            <a
                                href="https://github.com/sovanna-dev"
                                target="_blank"
                                rel="noreferrer"
                                className="info-value link"
                            >
                                github.com/sovanna-dev
                            </a>
                        </div>
                        <div className="contact-item">
                            <span className="info-label">Telegram</span>
                            <a
                                href="https://t.me/sovannara3"
                                target="_blank"
                                rel="noreferrer"
                                className="info-value link"
                            >
                                @sovanna_ra
                            </a>
                        </div>
                    </div>

                    <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                        {status === "sent" ? (
                            <div className="form-success">
                                Message sent! I'll get back to you soon.
                            </div>
                        ) : (
                            <>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="from_email"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        placeholder="What's on your mind?"
                                        required
                                    />
                                </div>

                                {status === "error" && (
                                    <p className="form-error">
                                        Something went wrong. Please try again.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="btn-primary"
                                    disabled={status === "sending"}
                                >
                                    {status === "sending" ? "Sending..." : "Send Message"}
                                </button>
                            </>
                        )}
                    </form>
                </div>
            </FadeInSection>
        </section>
    );
}

export default Contact;
