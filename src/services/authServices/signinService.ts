import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authRepository } from "../../repositories";
import { ISign } from "../../interfaces/authInterfaces";
import { errorFactory } from "../../utils";

export async function signin(user: ISign) {
  const userRegistered = await authRepository.findByEmail(user.email);
  verifyIfUserExists(userRegistered);
  const dbPassword = userRegistered?.password ?? "";
  const userId = Number(userRegistered?.id) ?? 0;
  await verifyIfPasswordIsCorrect(dbPassword, user.password);
  const token = createJwtToken(userId);
  return token;
}

function verifyIfUserExists(user: ISign | null) {
  if (user === null) throw errorFactory.notFound("User");
}

async function verifyIfPasswordIsCorrect(dbPassword: string, password: string) {
  const match = await bcrypt.compare(password, dbPassword);
  if (match === false) throw errorFactory.forbidden();
}

function createJwtToken(userId: Number) {
  const payload = { id: userId };
  const JWT_SECRET = process.env.TOKEN_SECRET;
  const JWT_CONFIG = { expiresIn: process.env.TOKEN_EXPIRES_IN };
  const token = jwt.sign(payload, JWT_SECRET, JWT_CONFIG);
  return token;
}
