import React from "react";
import PostCard from "./PostCard"; // Adjust the path as needed

const Posts = () => {
  const posts = [
    {
      id: 1,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1fYUJTGP_7VICM1ogQKKOLASmTGkRWfXM3g&s",
    },
    {
      id: 2,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1fYUJTGP_7VICM1ogQKKOLASmTGkRWfXM3g&s",
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
