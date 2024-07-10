import { useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Blog</h1>
      <button onClick={() => navigate("/")}>Home</button>
      {/* Add your blog content here */}
    </div>
  );
}

export default Blog;
