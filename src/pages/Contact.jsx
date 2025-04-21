import React, { useRef, useState, useEffect } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_d8xtp63',      // Replace with your EmailJS service ID
        'template_0seazj7',     // Replace with your EmailJS template ID
        formRef.current,
        'lPM5Hjl6gbhlXbbfn'       // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setSubmitted(true);
          formRef.current.reset();
          setTimeout(() => setSubmitted(false), 4000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-section" id="contact" data-aos="fade-up">
      <h2>Contact Kaigama Yusuf</h2>
      <p>We’d love to hear from you — reach out with inquiries, invitations, or messages of support.</p>

      <div className="contact-content">
        <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject (Optional)" />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
          {submitted && <div className="success-msg">✅ Message sent successfully!</div>}
        </form>

        <div className="contact-info">
        <p>
  <FontAwesomeIcon icon={faEnvelope} />{' '}
  <a href="mailto:contact@kaigamayusuf.com">contact@kaigamayusuf.com</a></p>  
     {/* <p><FontAwesomeIcon icon={faPhone} /> +234 XXX XXX XXXX</p> */}
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Potiskum, Yobe State, Nigeria</p>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
