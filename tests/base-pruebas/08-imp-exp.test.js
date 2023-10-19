import { getHeroeById } from "../../src/base-pruebas/base-pruebas/08-imp-exp.js";

describe("Pruebas en el archivo 08-imp-exp.test.js", () => {
  test("getHeoreById debe retornar unheroe por id", () => {
    const id = 1;
    const hero = getHeroeById(id);
    console.log(hero);
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });
  test("getHeoreById debe retornar undefined si heroe no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);
    console.log(hero);
    expect(hero).toBe(undefined) || expect(hero).toBeFalsy();
  });
});

/*Tarea:
Debe retornar un arreglo con los heroes de DC
Lenght === 3
toEqual al arreglo filtrado

Debe retornar un arreglo con los heroes de Marvel
Lenght ===2*/
import { getHeroesByOwner } from "../../src/base-pruebas/base-pruebas/08-imp-exp.js";

describe("Pruebas en el archivo 08-imp-exp.test.js", () => {
  test("getHeroesByOwner debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    console.log(heroes);
    expect(heroes).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
  });
  test("getHeroesByOwner debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    console.log(heroes);
    expect(heroes).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);
  });

  test("GetHeroesByOwner debe retornar un arreglo con los heroes de Marvel filtrados", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    console.log(heroes);
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
