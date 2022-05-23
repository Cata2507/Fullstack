try {
    adddlert('a');
    let variable = 0;
    console.log(variable);
    throw "La funcion probada no es correcta, o no existe";
    }
    catch (err) {
    // Catch definimos que hacer con esa excepción
    alert(err);
    }
    // lanzar excepción personalizada
   
// Try and catch para ver si hay excepciones