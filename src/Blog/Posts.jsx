import React from "react";

const Posts = ({ posts }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 md:p-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 md:mb-8">Posts</h2>
      <div className="w-full max-w-4xl h-96 overflow-y-auto">
        <ul className="flex flex-col space-y-4">
          {posts.map((post) => (
            <li
              key={post.id}
              className="p-4 bg-white shadow-md rounded-md hover:bg-gray-200 transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
