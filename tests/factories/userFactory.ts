import jwt from "jsonwebtoken";
import { randEmail, randUser } from "@ngneat/falso";

export function __createUser() {
  const user = {
    email: "test@test.com",
    password: "1234",
    confirmPassword: "1234",
  };
  return user;
}

export function __createUserWithMismatchedPasswords() {
  const user = {
    email: randEmail(),
    password: "1234",
    confirmPassword: "123",
  };
  return user;
}

export function __createUserWithInvalidEmail() {
  const user = {
    email: randUser().username,
    password: "1234",
    confirmPassword: "1234",
  };
  return user;
}

export function __createUserWithWrongPassword() {
  const user = {
    email: "test@test.com",
    password: "123",
  };
  return user;
}

export function __createValidToken() {
  const payload = { id: 1 };
  const JWT_SECRET = process.env.TOKEN_SECRET;
  const JWT_CONFIG = { expiresIn: process.env.TOKEN_EXPIRES_IN };
  const token = jwt.sign(payload, JWT_SECRET!, JWT_CONFIG);
  const tokenObj = {
    Authorization: `Bearer ${token}`,
  };
  return tokenObj;
}

export function __createInvalidToken() {
  const payload = { id: 1 };
  const JWT_SECRET = process.env.TOKEN_SECRET;
  const JWT_CONFIG = { expiresIn: process.env.TOKEN_EXPIRES_IN };
  const token = jwt.sign(payload, JWT_SECRET!, JWT_CONFIG);
  const tokenObj = {
    Authorization: `${token}`,
  };
  return tokenObj;
}
