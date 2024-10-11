"use client" 

import React from "react";

interface Blog {
  title: string;
  content: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => (
  <div>
    <h2>{blog.title}</h2>
    <p>{blog.content}</p>
  </div>
);

export default BlogCard;
