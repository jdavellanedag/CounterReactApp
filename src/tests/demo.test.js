describe("Tests", () => {
  test("string should be equals", () => {
    // 1. init
    const mensaje = "Hola mundo";
    const mensaje2 = `Hola mundo`;
    expect(mensaje).toBe(mensaje2);
  });
});
