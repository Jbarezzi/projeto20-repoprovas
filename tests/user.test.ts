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
    const body = userFactory.__createUser();
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

describe("POST /signin", () => {
  it("given a valid user should return 200 and authorization token", async () => {
    const user = userFactory.__createUser();
    const body = {
      email: user.email,
      password: user.password,
    };
    const result = await supertest(app).post("/signin").send(body);
    expect(result.status).toEqual(200);
    expect(result.body).toBeInstanceOf(Object);
  });

  it("given a not registered email should return 404", async () => {
    const user = userFactory.__createUserWithMismatchedPasswords();
    const body = {
      email: user.email,
      password: user.password,
    };
    const result = await supertest(app).post("/signin").send(body);
    expect(result.status).toEqual(404);
  });

  it("given a wrong password should return 403", async () => {
    const body = userFactory.__createUserWithWrongPassword();
    const result = await supertest(app).post("/signin").send(body);
    expect(result.status).toEqual(403);
  });
});
