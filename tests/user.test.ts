import supertest from "supertest";
import app from "./../src/app";
import { userFactory } from "./factories";

describe("POST /signup", () => {
  it("given a valid user should return 201", async () => {
    const body = userFactory.__createUser();
    const result = await supertest(app).post("/signup").send(body);
    const status = result.status;
    expect(status).toEqual(201);
  });

  it("given a valid user that already exists should return 409", async () => {
    const body = userFactory.__createExistentUser();
    const result = await supertest(app).post("/signup").send(body);
    const status = result.status;
    expect(status).toEqual(409);
  });

  it("given password and confirmPassword not matching should return 409", async () => {
    const body = userFactory.__createUserWithMismatchedPasswords();
    const result = await supertest(app).post("/signup").send(body);
    const status = result.status;
    expect(status).toEqual(409);
  });

  it("given a empty body should return 422", async () => {
    const body = {};
    const result = await supertest(app).post("/signup").send(body);
    const status = result.status;
    expect(status).toEqual(422);
  });

  it("given a invalid email should return 422", async () => {
    const body = userFactory.__createUserWithInvalidEmail();
    const result = await supertest(app).post("/signup").send(body);
    const status = result.status;
    expect(status).toEqual(422);
  });
});
