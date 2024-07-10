import React from "react";

const Map = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6568467533184!2d77.66064029978071!3d12.993786338796141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1136218ea079%3A0xc6bf20ea89abad92!2sGoogle%20Bangalore%20-%20Old%20Madras%20Road!5e0!3m2!1sen!2sin!4v1720585502548!5m2!1sen!2sin"
        width="400"
        height="300"
        style={{ border: 30 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
