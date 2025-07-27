import { prisma } from "./prisma"; // atau dari path sesuai koneksi prisma kamu

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({ where: { email } });
};
