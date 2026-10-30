
// Operadores aritméticos
let a = 10;
let b = 5;
console.log(a + b); // 15 (suma)
console.log(a % b); // 0 (módulo)
console.log(a ** b); // 100000 (exponenciación)

// Operadores de comparación
console.log(a == 10); // true (igualdad)
console.log(a === "10"); // false (igualdad estricta)
console.log(a > b); // true (mayor que)

// Operadores lógicos
let esMayor = a > b;
let esPar = a % 2 === 0;
console.log(esMayor && esPar); // true (AND)
console.log(!esMayor); // false (NOT)

// Operadores de asignación
let c = 20;
c += 10; // c = c + 10
console.log(c); // 30

// ===== Ejercicio 1 =====
// Usa operadores aritméticos para calcular el área de un rectángulo (base * altura).
let base = 10;
let altura = 5;
let area = base * altura;
console.log(area); // 50


// ===== Ejercicio 2 =====
// Compara dos números usando operadores de comparación e imprime el resultado.
let num1 = 10;
let num2 = 20;
console.log(num1 < num2); // true


// ===== Ejercicio 3 =====
// Combina dos expresiones booleanas usando && y ||. Explica el resultado.
let esMayor = true;
let esPar = false;
console.log(esMayor && esPar); // false
console.log(esMayor || esPar); // true


// ===== Ejercicio 4 =====
// Usa operadores de asignación para incrementar el valor de una variable en 5.
let valor = 10;
valor += 5;
console.log(valor); // 15


// ===== Ejercicio 5 =====
// Escribe una expresión que verifique si un número es positivo y par
let numero = 8;
console.log(numero > 0 && numero % 2 === 0); // true

