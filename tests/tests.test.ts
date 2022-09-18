import supertest from "supertest";
import app from "./../src/app";
import { testFactory, userFactory } from "./factories";

describe("POST /test", () => {
  it("given a valid body and token should return 201", async () => {
    const body = testFactory.__createTest();
    const token = userFactory.__createValidToken();
    const result = await supertest(app).post("/test").set(token).send(body);
    expect(result.statusCode).toEqual(201);
  });

  it("given a invalid body should return 422", async () => {
    const body = testFactory.__createInvalidTest();
    const token = userFactory.__createValidToken();
    const result = await supertest(app).post("/test").set(token).send(body);
    expect(result.statusCode).toEqual(422);
  });

  it("given a invalid token should return 401", async () => {
    const body = testFactory.__createTest();
    const token = userFactory.__createInvalidToken();
    const result = await supertest(app).post("/test").set(token).send(body);
    expect(result.statusCode).toEqual(401);
  });

  it("given a wrong discipline/teacher relation should return 404", async () => {
    const body = testFactory.__createTestWithoutDiscipline();
    const token = userFactory.__createValidToken();
    const result = await supertest(app).post("/test").set(token).send(body);
    expect(result.statusCode).toEqual(404);
  });
});
