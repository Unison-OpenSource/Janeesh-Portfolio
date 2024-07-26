import React from "react";
import PostCard from "./PostCard";
import img from "./img.png";
import Graph from "./Graph";

const Posts = () => {
  const posts = [
    {
      id: 1,
      imageUrl: img,
    },
    {
      id: 2,
      imageUrl:
        "https://wallpapers-clan.com/wp-content/uploads/2024/07/aesthetic-cityscape-sunset-bridge-desktop-wallpaper-cover.jpg",
    },
    // Add more posts as needed
  ];

  return (
    <div className="p-4 md:p-6">
      <Graph />
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} imageUrl={post.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
