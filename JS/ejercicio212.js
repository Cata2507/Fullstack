let numbers = [0, 1, 2, 3, 4, 5];

//Recorrer los valores con un For

for (let i = 0; i < numbers.length; i++) {
    console.log (numbers[i]);
    
}
// Recorrer los valores con for.. of
for (let number of numbers) {
    console.log(number);
    
}

//Ejercicio 3
let colores3 =["amarillo", "azul", "rojo"];
for (let color of colores3 ) {
    colores3.push(color);
}

//Ejercicio 4 escribe un programa que dado dos arrays devuelva el nummero de elementos que son iguales
let elementos1 = ["mar", "cielo", "sol"];
let elementos2 = ["oceano", "cielo", "rio"];

for (let element1 of elementos1) {
    for( let elementos2 of elementos2) {
        if (element1==elementos2) {
            contador++; //contador = contador + 1
        }
    }
    
}
console.log ()


//Ejercicio 5
let tierra = ["mar", "rio", "sol", "oceano", "nuves"];
let tierra2 = tierra.slice(1,4);
console.log(tierra2);

