import { useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/design")}>Design</button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default Blog;
