import React from "react";
import "./AboutForm.css";

const AboutForm = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="firstname" placeholder="First Name" />
        </div>
        <div>
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <div>
          <textarea name="message" placeholder="Your Message" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AboutForm;
