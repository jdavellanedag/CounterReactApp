const { retornaArreglo } = require("../../base/07-deses-arr");

describe("Destructuration test", () => {
  test("should return string & number", () => {
    const [letras, numeros] = retornaArreglo();
    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");
    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  });
});
