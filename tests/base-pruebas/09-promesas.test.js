import { getHeroeByIdAsync } from "../../src/base-pruebas/base-pruebas/09-promesas";

describe("Pruebas con promesas", () => {
  test("getHeroeByIdAsync debe retornar un heroe async", () => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" });
      done();
    });
  });

  test("getHeroeByIdAsync debe retornar un error si el heroe por id no existe", () => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
