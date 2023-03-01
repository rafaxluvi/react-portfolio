import "./contact.css";
import { SiMinutemailer } from "react-icons/si";
import React, {useRef} from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eruhvmy', 'template_d2pi2a9', form.current, 'pLpFrJi8v3Or8kzFg')
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiMinutemailer className="contact__option-icon" />
            <h4>Email</h4>
            <h5>engineerluvi@gmail.com</h5>
            <a href="mailto:engineerluvi@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* end of contact option */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder ="Your full name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows="7" placeholder="Your message"required></textarea>
          <button type ="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
