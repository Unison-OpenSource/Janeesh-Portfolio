import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      description: "A deep dive into the new features in React.",
      iframeSrc:
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7218497366377529344",
    },
    {
      id: 2,
      title: "Building Responsive Web Apps",
      description: "Best practices for responsive design.",
      iframeSrc:
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7218497366377529344",
    },
    {
      id: 3,
      title: "JavaScript ES6 Features",
      description: "An overview of ES6 and its advantages.",
      iframeSrc:
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7218497366377529344",
    },
  ];

  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Latest Blog Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <iframe
                src={post.iframeSrc}
                height="300"
                width="100%"
                frameBorder="0"
                allowFullScreen
                title={`Embedded post ${post.id}`}
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Blog;
