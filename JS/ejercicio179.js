/*Ejercicio 1 escribir una programa con cuatro funciones de flecha: sumar, restar,
multiplicar y dividir (cada una de ellas debe aceptar dos parámetros y devolver el resultado) */

const sumar =(x,y) =>{
    return x+y;
}
console.log(sumar(1,2));

const resta =(x,y) =>{
    return x-y;
};
console.log(resta(10,5));

var multiplicar =(x,y) =>{
    return x/y;
}
console.log(multiplicar(10,2));

const dividir =(x,y) =>{
    return x,y
};
console.log(dividir(20,10));

/*Ejercicio 2 adaptar el programa del ejercicio anterior simplificando las funciones de flecha eliminando las llaves y el return */

const sumar = (x,y) => x+y; 
console.log(sumar(8,5));

const restar = (x,y) => x-y;
console.log(resta  (10-10));
