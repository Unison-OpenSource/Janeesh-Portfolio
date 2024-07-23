import React from "react";
import PostCard from "./PostCard"; 
import img from  "./1 (1).png"
import jiimg from  "./1 (2).png"
// Adjust the path as needed

const Posts = () => {
  const posts = [
    {
      id: 1,
      imageUrl: img,
    },
    {
      id: 2,
      imageUrl: jiimg,
    },
    // Add more posts as needed
  ];

  return (
    <div className="p-4 md:p-6">
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
