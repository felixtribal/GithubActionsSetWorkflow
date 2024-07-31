import { Addition } from "./../src/server";
describe("Server.ts tests", () => {
  test("Maths test", () => {
    expect(Addition(1, 1)).toEqual(2);
  });
});
