import { Router } from "express";
import { createBlog, getBlogsByLocation } from "../controllers/blog.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router: Router = Router();

router.post("/create", authMiddleware, createBlog);
router.get("/:location", getBlogsByLocation);

export default router;
