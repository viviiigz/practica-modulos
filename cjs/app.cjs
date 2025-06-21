//importamos lass funciones ''sumar'' y ''restar'
//usamos destructuracion para obtener las funciones de su nombre

const {suma,resta,saludo, noMeRindo} = require('./funcionesNombradas.cjs');

console.log("---OPERACION CON MÓDULOS COMMONJS---");

let resultadoSuma = suma(15,4);
console.log(`Suma de 15 + 4 = ${resultadoSuma}`)

let resultadoResta = resta(15,4);
console.log(`Resta de 15 - 4 = ${resultadoResta}`)

let mensajeSaludo = saludo("Viviii");
console.log(mensajeSaludo);

let mensaj = noMeRindo("Estoy estresada voy a tirar la compu a la basura");
console.log(mensaj);

const funciones = require("./funcionesPorDefecto.cjs")

console.log(funciones.mensaje());

// console.log(funciones.sumar(3,5));
