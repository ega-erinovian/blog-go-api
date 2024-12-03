import { prisma } from "../../configs/prisma";

export const getBlogsService = async () => {
  try {
    const blogs = await prisma.blog.findMany({
      where: { isDeleted: false },
      include: {
        blogCategories: {
          select: {
            id: true,
            categories: { select: { id: true, name: true } },
          },
        },
        user: { select: { id: true, username: true } },
      },
    });

    return blogs;
  } catch (error) {
    throw error;
  }
};
