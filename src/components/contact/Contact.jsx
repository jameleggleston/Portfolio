import "./contact.css";
import Email from "../../img/email.png";
import GitHub from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_07ajjmi', 'template_fr70rqi', form.current, 'user_keGk9p1c9uxzhJoj3hNBU')
      .then((result) => {
          console.log(result.text);
          setDone(true)
        }, (error) => {
          console.log(error.text);
        });
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's connect or colaberate!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <a
               href='mailto:jamel.eggleston@gmail.com'  
               rel='noreferrer'
               target='_blank'
              >
                <img src={Email} alt="" className="c-icon" />
              </a>
              jamel.eggleston@gmail.com  
            </div>
            <div className="c-info-item">
              <a
                href="https://www.linkedin.com/in/jamel-eggleston-4804481a4/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={LinkedIn} alt="" className="c-icon" />
              </a>
            </div>
            <div className="c-info-item">
              <a
                href="https://github.com/jameleggleston"
                target="_blank"
                rel="noreferrer"
              >
                <img src={GitHub} alt="" className="c-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>Get in touch.</b> I'm always freelancing and looking for an
            opportunity to grown and learn!
          </p>
          <form ref={form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you for your message!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
