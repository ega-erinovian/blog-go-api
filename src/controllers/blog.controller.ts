import { NextFunction, Request, Response } from "express";
import { getBlogsService } from "../services/blog/get-blogs.service";
import { createBlogService } from "../services/blog/create-blog.service";
import { getBlogService } from "../services/blog/get-blog.service";

export const getBlogsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getBlogsService();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getBlogController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const result = await getBlogService(id);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const createBlogController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createBlogService(req.body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
