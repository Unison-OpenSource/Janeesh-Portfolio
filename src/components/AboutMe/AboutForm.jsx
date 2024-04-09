import React from "react";
import "./AboutForm.css";

const AboutForm = () => {
  return (
    <div className="contact-form-content">
      <form>
        <div  className="name-container">
          <input type="text" name="firstname" placeholder="First Name" />
        </div>
        <div>
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <div>
          <input type="email" name="Email" placeholder="Email" />
        </div>
        <div>
          <textarea name="message" placeholder="Your Message" />
        </div>
        <div>
          <button type="submit">SEND</button>
        </div>
      </form>
    </div>
  );
};

export default AboutForm;
