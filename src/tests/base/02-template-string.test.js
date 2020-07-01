import "@testing-library/jest-dom";

import { getSaludo } from "../../base/02-template-string";

describe("Tests on 02-template-string", () => {
  test("getSaludo return hola Julian", () => {
    const nombre = "Julian";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola " + nombre);
  });
  test("getSaludo return hola Jhon by default", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Jhon");
  });
});
