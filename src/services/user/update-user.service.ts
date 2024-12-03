import { Prisma, User } from "@prisma/client";
import { prisma } from "../../configs/prisma";

export const updateUserService = async (id: number, body: Partial<User>) => {
  try {
    let whereInput: Prisma.UserWhereInput[] = [];

    if (body.email) {
      whereInput.push({ email: body.email });
    }

    if (body.username) {
      whereInput.push({ username: body.username });
    }

    const existingUser = await prisma.user.findFirst({
      where: { OR: whereInput },
    });

    if (existingUser) {
      throw new Error("email or username already exist");
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: body,
    });

    return updatedUser;
  } catch (error) {
    throw error;
  }
};
