import React from "react";

const YTCard = ({ video }) => {
  return (
    <div
      className="relative flex justify-center h-[300px] w-[160px] border border-4 border-black rounded-2xl bg-gray-50 mb-6"
      style={{ boxShadow: "5px 5px 2.5px 6px rgb(209, 218, 218)" }}
    >
      <span className="border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl"></span>
      <span className="absolute -right-2 top-14 border border-4 border-black h-7 rounded-md"></span>
      <span className="absolute -right-2 bottom-36 border border-4 border-black h-10 rounded-md"></span>
      <div className="relative w-full h-full pb-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-2xl"
          src={video.url}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YTCard;
