import { User } from "@prisma/client";
import { prisma } from "../../configs/prisma";

export const createUserService = async (body: User) => {
  try {
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ email: body.email }, { username: body.username }] },
    });

    if (existingUser) {
      throw new Error("Email or username already exist!");
    }

    const newUser = await prisma.user.create({
      data: body,
    });

    return newUser;
  } catch (error) {
    throw error;
  }
};
