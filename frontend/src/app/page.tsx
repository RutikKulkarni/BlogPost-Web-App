"use client"
import React, { useEffect, useState } from "react";
import axios from "@/utils/api";
import BlogCard from "@/components/BlogCard";

interface Blog {
  _id: string;
  title: string;
  content: string;
}

const HomePage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchLocation() {
      const { data } = await axios.get("https://ipapi.co/json/");
      const location = data.country_name;
      const blogsData = await axios.get(`/api/blogs/${location}`);
      setBlogs(blogsData.data);
    }
    fetchLocation();
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default HomePage;
