import React from "react";

const Posts = ({ posts }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-black mb-4">
        Posts
      </h2>
      <div className="space-y-4 w-full max-w-3xl">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-700">{post.excerpt}</p>
            <span className="block mt-4 text-gray-500">{post.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
