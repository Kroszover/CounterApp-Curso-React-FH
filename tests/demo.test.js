describe('Pruebas en <DemoComponent />', () => {
    test("Esta prueba no falla", () => {
      //1.- inicialización
      const message1 = "Hola Mundo";
      //2.- estímulo
      const message2 = message1.trim();
      //3.- observar el comportamiento-------------------> 3.1.- esperar
      expect(message1).toBe(message2);
    });
});

