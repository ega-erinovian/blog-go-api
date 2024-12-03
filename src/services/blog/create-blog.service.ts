import { Blog, User } from "@prisma/client";
import { prisma } from "../../configs/prisma";

export const createBlogService = async (body: Blog) => {
  try {
    const newUser = await prisma.blog.create({
      data: body,
    });

    return newUser;
  } catch (error) {
    throw error;
  }
};
