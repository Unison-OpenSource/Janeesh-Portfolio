import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const AboutForm = (props) => {
  const form = useRef();
  const [inputs, setInputs] = useState({
    from_name: "",
    number: "",
    user_email: "",
    company_name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

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

    // Clear form inputs after submission
    setInputs({
      from_name: "",
      number: "",
      user_email: "",
      company_name: "",
      message: "",
    });
  };

  return (
    <div className="w-full flex justify-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center gap-6 w-full max-w-lg"
      >
        <label className="text-xl font-medium text-gray-800">Your Name</label>
        <input
          type="text"
          name="from_name"
          placeholder="Enter your Name"
          value={inputs.from_name}
          onChange={handleChange}
          required
          className="w-full text-xl p-4 rounded-md border-2 border-lightblue-400 outline-none bg-white text-gray-800"
          style={{ borderColor: "#ADD8E6" }} // Change border color to light blue
        />

        <label className="text-xl font-medium text-gray-800">
          Phone Number
        </label>
        <input
          type="tel"
          name="number"
          placeholder="Enter your phone number"
          value={inputs.number}
          onChange={handleChange}
          required
          className="w-full text-xl p-4 rounded-md border-2 border-lightblue-400 outline-none bg-white text-gray-800"
          style={{ borderColor: "#ADD8E6" }} // Change border color to light blue
        />

        <label className="text-xl font-medium text-gray-800">Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="Enter your Mail"
          value={inputs.user_email}
          onChange={handleChange}
          required
          className="w-full text-xl p-4 rounded-md border-2 border-lightblue-400 outline-none bg-white text-gray-800"
          style={{ borderColor: "#ADD8E6" }} // Change border color to light blue
        />

        <label className="text-xl font-medium text-gray-800">
          Company Name
        </label>
        <input
          type="text"
          name="company_name"
          placeholder="Enter your College name"
          value={inputs.company_name}
          onChange={handleChange}
          required
          className="w-full text-xl p-4 rounded-md border-2 border-lightblue-400 outline-none bg-white text-gray-800"
          style={{ borderColor: "#ADD8E6" }} // Change border color to light blue
        />

        <label className="text-xl font-medium text-gray-800">Message</label>
        <textarea
          name="message"
          value={inputs.message}
          onChange={handleChange}
          required
          className="w-full text-xl p-4 rounded-md border-2 border-lightblue-400 outline-none h-40 bg-white text-gray-800"
          style={{ borderColor: "#ADD8E6" }} // Change border color to light blue
        ></textarea>

        <button
          type="submit"
          className="text-xl font-medium text-white border-1.5 border-purple-400 rounded-md bg-gradient-to-r from-purple-400 to-purple-600 p-3 transition duration-300 ease-in-out hover:text-purple-400 hover:bg-transparent"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default AboutForm;
