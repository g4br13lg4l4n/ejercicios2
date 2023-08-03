/**
 * Qué es javascript, HTML, CSS.
*/


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(arr);
// variables
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types

// Expresiones y operadores
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators

// functions

// ejemplos
/**
 * 1. puede comprar o no
 */
/*
function miFuncionSumar(valor1, valor2) {
    return valor1 + valor2;
}

console.log("Mi resultado es: " + miFuncionSumar(10, 20))

console.log(`Mi resultado es: ${ miFuncionSumar(10, 20) + 10 }`)

*/
/*
function esMayorONo (edad) {
   return edad >= 18;
}

function dimeEdad (edad) {
    if (esMayorONo(edad)) {
        console.log(`Si es mayor de edad y tiene ${edad} años`);
    } else {
        console.log(`No es mayor de edad porque tiene ${edad} años`)
    }
}

console.log(dimeEdad(15));
*/

const valor = 10;
const miFunction = (edad) => {
    return edad + 10;
};

console.log(miFunction(10));




function pruebaSwich(miValor) {

    if (miValor == 18) {
        console.log('Esta persona tiene -> IF ' + miValor)
    } else if( miValor == 25) {
        console.log('Esta persona tiene --> IF' + miValor)
    } else if( miValor == 30) {
        console.log('Esta persona tiene ---> IF' + miValor)
    } else {
        console.log('Esta persona tiene ----> IF ' + miValor)
    }

    switch (miValor) {
        case 18:
        case 25:
        case 30:
        case 35:
            console.log('Esta persona tiene ---->' + miValor)
            break;
        default:
            console.log('Esta persona tiene un valor no verificado y es ' + miValor)
            break;
    }
}

pruebaSwich(18);