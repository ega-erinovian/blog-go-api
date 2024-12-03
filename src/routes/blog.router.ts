import express from "express";
import {
  createBlogController,
  getBlogController,
  getBlogsController,
} from "../controllers/blog.controller";

const router = express.Router();

router.get("/", getBlogsController);
router.get("/:id", getBlogController);
router.post("/", createBlogController);

export default router;
