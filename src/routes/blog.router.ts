import express from "express";
import {
  createBlogController,
  getBlogController,
  getBlogsController,
} from "../controllers/blog.controller";
import { verifyToken } from "../lib/jwt";

const router = express.Router();

router.get("/", getBlogsController);
router.get("/:id", getBlogController);
router.post("/", verifyToken, createBlogController);

export default router;
