console.log(typeof nombre); // "string"

// Number
let edad = 25;
let precio = 19.99;
console.log(typeof edad); // "number"

// Boolean
let esMayorDeEdad = true;
console.log(typeof esMayorDeEdad); // "boolean"

// Null
let direccion = null;
console.log(typeof direccion); // "object" (esto es un error histórico en JavaScript)

// Undefined
let telefono;
console.log(typeof telefono); // "undefined"

// Symbol
let id = Symbol("id");
console.log(typeof id); // "symbol"

// Object
let persona = { nombre: "Ana", edad: 30 };
console.log(typeof persona); // "object"


// ===== Ejercicio 1 =====
// Declara una variable ciudad y asígnale un valor de tipo string. Luego, imprime su tipo usando typeof.
let ciudad = "Madrid";
console.log(typeof ciudad); // Imprime: "string"

// ===== Ejercicio 2 =====
// Crea una variable precio con un valor numérico y otra descuento con un valor booleano (true o false). Imprime ambos tipos.
let precio = 99.99;
let descuento = true;
console.log(typeof precio);    // Imprime: "number"
console.log(typeof descuento); // Imprime: "boolean"

// ===== Ejercicio 3 =====
// Declara una variable auto sin asignarle valor. Verifica su tipo.
let auto;
console.log(typeof auto); // Imprime: "undefined"

// ===== Ejercicio 4 =====
// Usa Symbol para crear un identificador único y comprueba su tipo.
let id = Symbol("id");
console.log(typeof id); // Imprime: "symbol"


