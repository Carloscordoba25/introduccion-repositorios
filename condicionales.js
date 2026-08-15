// //Ejercicios de Condicionales

// // 1. Solicita tres números y determina cuál es el mayor.
// let InputNum1 = prompt ("grese un primer numero");
// let InputNum2 = prompt ("grese un segundo numero");
// let InputNum3 = prompt ("grese un tercer numero");

// let num1 = Number(InputNum1);
// let num2 = Number(InputNum2);
// let num3 = Number(InputNum3);   

// let numeroMayor = 0;

// if (num1 > num2 && num1 > num3){
//     numeroMayor = num1;
// } else if (num2 > num1 && num2 > num3){
//     numeroMayor = num2;
//     }else {numeroMayor = num3;}

//     console.log(`El numero mayor es: ${numeroMayor}`);

// // 2. Pide un número y muestra si es positivo, negativo o cero
// let InputNumero = prompt ("ingrese un numero");

// let numero = Number(InputNumero);
// if(numero < 0){
//     console.log("El numero es negativo");
// } else if (numero > 0){
//     console.log("El numero es positivo");
// } else {
//     console.log("El numero es cero");
// }

// // condicional ternario
// let InputNumero = prompt("Ingrese un número");
// let numero = Number(InputNumero);

// let resultado = (numero < 0) ? "El número es negativo" :
//                 (numero > 0) ? "El número es positivo" :
//                                "El número es cero";

// console.log(resultado);

// // 3. Pide una nota (0–100) y muestra:

// // Excelente (≥90)

// // Bueno (70–89)

// // Insuficiente (<70)

// let inputNota = prompt ("Ingrese su nota");

// let nota = Number(inputNota);

// if ( nota >= 90){
//     console.log("su nota es excelente");
// }else if (nota >= 70){
//     console.log("su nota es buena");
// }else if (nota >= 0){
//     console.log("su nota es insuficiente");
// }else{
//     console.log("la nota ingresada es invalida");
// }

// let inputNota = prompt("Ingrese su nota");
// let nota = Number(inputNota);

// let resultado = (nota >= 90) ? "Su nota es excelente" :
//                 (nota >= 70) ? "Su nota es buena" :
//                 (nota >= 0)  ? "Su nota es insuficiente" :
//                                "La nota ingresada es inválida";

// console.log(resultado);

// //Ejercicios de Ciclos

// // 1. Usa un for para imprimir la tabla del 5 (del 5×1 al 5×10)

console.log("¡Vamos a multiplicar!, la operación será del 1 al 10");

let inputNumero = prompt("Ingrese el número");
let numeroMultiplicar = Number(inputNumero);

for (let i = 1; i <= 10; i++) {
    console.log(numeroMultiplicar + " x " + i + " = " + (numeroMultiplicar * i));
}

