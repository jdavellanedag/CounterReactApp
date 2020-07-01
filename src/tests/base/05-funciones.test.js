import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Tests on 05-funciones", () => {
  test("getUser return object", () => {
    const user = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const userTest = getUser();
    expect(user).toStrictEqual(userTest);
  });
  test("getUsuarioActivo return object", () => {
    const nombre = "Julian";
    const user = getUsuarioActivo(nombre);
    expect(user).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
