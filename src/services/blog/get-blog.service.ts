import { prisma } from "../../configs/prisma";

export const getBlogService = async (id: number) => {
  try {
    const blog = await prisma.blog.findFirst({
      where: { id, isDeleted: false },
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

    if (!blog) {
      throw new Error(`Blog ${id} not found.`);
    }

    return blog;
  } catch (error) {
    throw error;
  }
};
