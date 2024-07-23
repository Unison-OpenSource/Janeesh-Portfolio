import React from "react";

const PostCard = ({ imageUrl }) => {
  return (
    <div className="relative w-full pb-[56.25%] h-0 overflow-hidden">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Post Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <p className="text-gray-600">No Image Available</p>
        </div>
      )}
    </div>
  );
};

export default PostCard;
