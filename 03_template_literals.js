// ===== Ejemplo 1 =====

let nombre = "Laura";
let edad = 20;

// Con el operador +
console.log("Hola, me llamo " + nombre + " y tengo " + edad + " años.");

// Con template literals (recomendado)
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);

// Las dos líneas muestran: Hola, me llamo Laura y tengo 20 años.

// ===== Ejemplo 2 =====

let a = 5;
let b = 3;

console.log("Resultado: " + a + b);     // Resultado: 53  (unió los números como texto)
console.log("Resultado: " + (a + b));   // Resultado: 8
console.log(`Resultado: ${a + b}`);     // Resultado: 8

// ===== Ejemplo 3 =====

let producto = "Mouse";
let cantidad = 2;
let precio = 15000;

console.log(`Producto: ${producto}
Cantidad: ${cantidad}
Precio unitario: $${precio}
Total a pagar: $${cantidad * precio}`);

// Producto: Mouse
// Cantidad: 2
// Precio unitario: $15000
// Total a pagar: $30000

// ===== Ejemplo 4 =====

let ciudad = "Bogotá";
let temperatura = 14;
console.log(`La temperatura en ${ciudad} es de ${temperatura} °C`);
