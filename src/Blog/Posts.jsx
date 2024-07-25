import React from "react";
import PostCard from "./PostCard"; 
import img from "./img.png"

const Posts = () => {
  const posts = [
    {
      id: 1,
      imageUrl: img,
    },
    {
      id: 2,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8AAxAr9ZNr9JCwn2QZ35rSWWuiayhh0ayQ&s",
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
