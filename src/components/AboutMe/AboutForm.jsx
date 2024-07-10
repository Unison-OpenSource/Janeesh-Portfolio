import { useRef } from "react";
import emailjs from "@emailjs/browser";

const AboutForm = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Ensure props.handleSubmit is defined and is a function before calling it
    if (props.handleSubmit && typeof props.handleSubmit === "function") {
      props.handleSubmit();
    } else {
      console.error("handleSubmit is not a function or not defined");
    }

    alert("Mail sent.");

    emailjs
      .sendForm(
        "janeeshrocks", // Service ID
        "template_cqz9uxc", // Template ID
        form.current,
        "z5u06SVWVYN_3fnis" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  };

  const labelStyle = {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    fontSize: '1.2rem',
    padding: '1rem',
    borderRadius: '0.6rem',
    outline: 'none',
    border: '2px solid #e401fe',
  };

  const textAreaStyle = {
    width: '100%',
    fontSize: '1.2rem',
    padding: '1rem',
    borderRadius: '0.6rem',
    outline: 'none',
    border: '2px solid #e401fe',
    minHeight: '150px',
  };

  const buttonStyle = {
    fontSize: '1.3rem',
    fontWeight: '500',
    color: '#fff',
    border: '1.5px solid #a892fe',
    borderRadius: '0.6rem',
    background: 'linear-gradient(90deg, #a892fe 0%, #8064e8 100%)',
    padding: '0.7rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  return (
    <div style={formStyle}>
      <form ref={form} onSubmit={sendEmail}>
        <label style={labelStyle}>Your Name</label>
        <input
          type="text"
          name="from_name"
          placeholder="Enter your Name"
          required
          style={inputStyle}
        />

        <label style={labelStyle}>Phone Number</label>
        <input
          type="tel"
          name="number"
          placeholder="Enter your phone number"
          required
          style={inputStyle}
        />

        <label style={labelStyle}>Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="Enter your Mail"
          required
          style={inputStyle}
        />

        <label style={labelStyle}>Company Name</label>
        <input
          type="text"
          name="company_name"
          placeholder="Enter your College name"
          required
          style={inputStyle}
        />

        <label style={labelStyle}>Message</label>
        <textarea name="message" required style={textAreaStyle}></textarea>

        <input type="submit" value="Send" style={buttonStyle} />
      </form>
    </div>
  );
};

export default AboutForm;
