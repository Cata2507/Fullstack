const str1 = "En un lugar de la mancha";
const str2 = "En otro lugar"
const ultimoString1= str1.length-1;
const ultimoString2= str2.length-1;

//EJERCICIO 1

if (str1.charAt(0) == str2.charAt(0)) {
    document.write("Los dos strings tiene la primera letra igual y ")
} else {
    document.write("Los dos strings tiene la primera letra diferente /n:")
    
}
//EJERCICIO 2
//Tambien podia haberlo hecho poniendo && estas letras que sumaría una condicion a la otra

if (str1.length-1 == str2.length-1) {
    document.write("Los dos strings tiene la ultima letra igual")
    
} else {
    document.write("Los dos string tienen la última letra diferente")
}


//EJERCICIO 3 escribe un programa que compruebe que el substring "abc" existe en un string dado, pero no puede encontrarse ni al comienzo, ni al final.

let ejercicio3 = " abc 1 abc a abc"
let existeABC = ejercicio3.indexOf("abc")

if (ejercicio3.indexOf("abc") !=0) &&  {
    console.log("Existe ABC dentro del string");
    
} else {
    console.log("No existe ABC dentro");
    
}
