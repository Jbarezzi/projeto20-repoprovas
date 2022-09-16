import client from "../database/prisma";
import { ISign } from "../interfaces/authInterfaces";

export async function findByEmail(email: string) {
  const user = await client.user.findUnique({ where: { email } });
  return user;
}

export async function insert(newUser: ISign) {
  delete newUser.confirmPassword;
  const result = await client.user.create({ data: newUser });
  if (result === null) {
    throw { type: "error" };
  }
}
