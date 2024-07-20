import React, { useState, useRef } from "react";
import Homeblog from "../Blog/Homeblog";
import Navb from "../Blog/Navb/Navb";
import Categories from "../Blog/Categories";
import Hacks from "../Blog/Hacks";
import Posts from "../Blog/Posts";

const initialPosts = [
  { id: 1, title: 'Tech Post 1', excerpt: 'This is a tech post.', category: 'Tech' },
  { id: 2, title: 'Lifestyle Post 1', excerpt: 'This is a lifestyle post.', category: 'Lifestyle' },
  // Add more posts as needed
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const filteredPosts = selectedCategory
    ? initialPosts.filter((post) => post.category === selectedCategory)
    : initialPosts;

  // Refs for sections
  const homeRef = useRef(null);
  const categoriesRef = useRef(null);
  const postsRef = useRef(null);
  const hacksRef = useRef(null);

  return (
    <>
      <Navb
        homeRef={homeRef}
        categoriesRef={categoriesRef}
        postsRef={postsRef}
        hacksRef={hacksRef}
      />
      <div ref={homeRef}>
        <Homeblog />
      </div>
      <div ref={categoriesRef}>
        <Categories onSelectCategory={setSelectedCategory} />
      </div>
      <div ref={postsRef}>
        <Posts posts={filteredPosts} />
      </div>
      <div ref={hacksRef}>
        <Hacks />
      </div>
    </>
  );
};

export default Blog;
