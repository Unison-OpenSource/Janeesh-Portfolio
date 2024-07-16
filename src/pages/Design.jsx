import React from "react";
import { useNavigate } from "react-router-dom";

const Design = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7218651963893161984"
        height="501"
        width="504"
        frameBorder="0"
        allowFullScreen
        title="Embedded post"
        className="shadow-lg rounded"
      ></iframe>
    </div>
  );
};

export default Design;
