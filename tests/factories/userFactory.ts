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
