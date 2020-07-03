const { getImagen } = require("../../base/11-async-await");

describe("Tes asyn-await fetch", () => {
  test("should return url img", async () => {
    const url = await getImagen();
    expect(url.includes("https://")).toBe(true);
  });
});
