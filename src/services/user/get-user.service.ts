import { prisma } from "../../configs/prisma";

export const getUserService = async (id: number) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id, isDeleted: false },
      //   include: { posts: true },
      include: { blogs: { select: { title: true } } },
    });

    if (!user) {
      throw new Error(`user ${id} not found.`);
    }

    return user;
  } catch (error) {
    throw error;
  }
};
