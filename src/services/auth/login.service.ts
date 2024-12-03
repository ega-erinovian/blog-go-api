import { User } from "@prisma/client";
import { prisma } from "../../configs/prisma";
import { comparePassword } from "../../lib/argon";
import { sign } from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../../configs/env";

export const loginService = async (body: User) => {
  try {
    const { email, username } = body;

    const user = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] },
    });

    if (!user) {
      throw new Error("Invalid Credentials");
    }

    const isPasswordValid = await comparePassword(body.password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid Credentials");
    }

    const tokenPayload = { id: user.id };

    const token = sign(tokenPayload, JWT_SECRET_KEY!, { expiresIn: "1h" });

    const { password, ...userWithoutPassword } = user;

    return { ...userWithoutPassword, token };
  } catch (error) {
    throw error;
  }
};
