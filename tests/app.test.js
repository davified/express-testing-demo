const request = require("supertest");
const app = require("../app");

describe("app", () => {
  it("GET / should return status of 200 and content of hello world", async () => {
    const response = await request(app).get("/");

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ message: "hello world" });
  });
});
