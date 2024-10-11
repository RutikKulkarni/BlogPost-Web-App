import { Request, Response } from "express";
import Blog, { IBlog } from "../models/Blog";

export const createBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, content, location } = req.body;
    const blog: IBlog = await Blog.create({
      title,
      content,
      location,
      author: req.userId,
    });
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error creating blog" });
  }
};

export const getBlogsByLocation = async (
  req: Request,
  res: Response
): Promise<void> => {
  const location = req.params.location;
  try {
    const blogs = await Blog.find({ location });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs" });
  }
};
