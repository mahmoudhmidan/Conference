import React from "react";
import "./ContactForm.css";
import emailjs from "emailjs-com";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function App() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_eljcbvn",
                "template_r1bpobb",
                e.target,
                "key"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.log(error.text);
                    alert("An error occurred, please try again.");
                }
            );

        e.target.reset();
    };

    return (
        <div className="app">
            <div className="contact-details">
                <form
                    id="contact-form"
                    className="contact-form"
                    onSubmit={sendEmail}
                >
                    <input
                        placeholder="Name*"
                        type="text"
                        name="name"
                        required={true}
                    />
                    <input
                        placeholder="Email Address*"
                        type="email"
                        name="email"
                        required={true}
                    />
                    <textarea
                        maxLength={300}
                        placeholder="Message (max 300 characters)*"
                        name="message"
                        required={true}
                    />
                    <button type="submit">Submit</button>
                </form>
                <div className="info-wrap">
                    <h2 className="info-title">Contact Information</h2>
                    <h3 className="info-sub-title">
                        Fill up the form and our Team will get back to you
                        within 24 hours
                    </h3>
                    <ul className="info-details">
                        <li>
                            <CallIcon />
                            <span>Phone:</span>{" "}
                            <a href="tel:+964123456789">+964-123456789</a>
                        </li>
                        <li>
                            <MailIcon />
                            <span>Email:</span>{" "}
                            <a href="mailto:info@company-email.com">
                            info@expert-els.com
                            </a>
                        </li>
                    </ul>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/your-profile">
                            <LinkedInIcon />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=">
                            <FacebookIcon />
                        </a>
                        <a href="https://www.twitter.com/your-profile">
                            <TwitterIcon />
                        </a>
                        <a href="https://www.instagram.com/your-profile">
                            <InstagramIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
