import React from "react";

const YTCard = ({ video }) => {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <iframe
            className="w-full h-[240px] rounded-t-lg"
            src={video.url}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {video.title}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default YTCard;
