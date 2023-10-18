test("Esta prueba no falla", () => {
  if (0 === 1) {
    throw new Error("Esta prueba falla");
  }
});
