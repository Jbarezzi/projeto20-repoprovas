import { User } from "@prisma/client";

export interface ISign extends Omit<User, "id" | "createdAt"> {}
