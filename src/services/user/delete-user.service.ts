import { prisma } from "../../configs/prisma";

export const deleteUserService = async (id: number) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id },
    });

    if (!user) {
      throw new Error(`user ${id} not found.`);
    }

    // soft delete
    await prisma.user.update({
      where: { id },
      data: { isDeleted: true },
    });

    return { message: `User ${id} is deleted` };
  } catch (error) {
    throw error;
  }
};
