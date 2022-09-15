import { randEmail } from "@ngneat/falso";

export function createUser() {
  const user = {
    email: randEmail(),
    password: "1234",
    confirmPassword: "1234",
  };
  return user;
}
