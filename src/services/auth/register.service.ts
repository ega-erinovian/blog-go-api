import { User } from "@prisma/client";
import { hashPassword } from "../../lib/argon";
import { prisma } from "../../configs/prisma";

export const registerService = async (body: User) => {
  try {
    const { email, username, password } = body;

    // Karena sudah destructuring tidak perlu panggil body.email dll lagi
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] },
    });

    if (existingUser) {
      throw new Error("Email or username already exist!");
    }

    // hashing password using argon2
    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    // Memisahkan password asli agar tidak ikut ter-return / ditampilkan
    const { password: pw, ...userWithoutPassword } = newUser;

    return userWithoutPassword;
  } catch (error) {
    throw error;
  }
};
