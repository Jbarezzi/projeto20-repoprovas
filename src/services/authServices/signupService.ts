import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { ISign } from "../../interfaces/authTypes";
import { errorFactory } from "../../utils";
import { authRepository } from "../../repositories";
import { conflict } from "../../utils/errorFactory";

export async function signup(newUser: ISign) {
  await verifyIfEmailExists(newUser.email);
  verifyIfPasswordIsCorrect(newUser.password, newUser.confirmPassword!);
  newUser.password = await encryptPassword(newUser.password);
  await authRepository.insert(newUser);
}

async function verifyIfEmailExists(email: string) {
  const hasUser: User | null = await authRepository.findByEmail(email);
  if (hasUser !== null) {
    throw errorFactory.conflict(
      "There's already a user registered with this email."
    );
  }
}

async function verifyIfPasswordIsCorrect(
  password: string,
  confirmPassword: string
) {
  if (confirmPassword !== password)
    throw conflict("The passwords don't match.");
}

async function encryptPassword(password: string) {
  const SALT_ROUNDS = 10;
  const encryptedPassword = bcrypt.hash(password, SALT_ROUNDS);
  return encryptedPassword;
}
