import supertest from "supertest";
import app from "./../src/app";
import { userFactory } from "./factories";

describe("POST /signup", () => {
  it("given a valid user should return 201", async () => {
    const body = userFactory.createUser();
    const result = await supertest(app).post("/signup").send(body);
    const status = result.status;
    expect(status).toEqual(201);
  });
});
