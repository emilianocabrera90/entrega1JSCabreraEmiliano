
function obtenerEdad() {
    let edad;
    do {
        let input = prompt("¿Cuántos años tienes?");
        if (input === null) {
            alert("Gracias por visitarnos, vuelva pronto!")
            return null; 
        }
        edad = parseInt(input); 
        if (isNaN(edad) || edad < 0) {
            alert("Por favor, ingresa un valor numérico válido.");
        } 
        else if (edad < 18) {
            alert("Lo siento, eres menor de edad. No puedes ingresar al bar.");
        }
    } 
    while (isNaN(edad) || edad < 18); 
    return edad;
}


function verificarAcceso(edad) {
    const edadMinima = 18; 
    
    if (edad >= edadMinima) {
        alert("Puedes ingresar al bar");
        return "Puedes ingresar al bar";
    } 
    else {
        return "Lo siento, eres menor de edad. No puedes ingresar al bar.";
    }
}


function mostrarResultado(mensaje) {
    console.log(mensaje);
}

function simularAccesoAlBar() {
    let edad = obtenerEdad(); 
    
    
    if (edad === null) {
        return;
    }
    
    let mensaje = verificarAcceso(edad); 
    mostrarResultado(mensaje); 
    
    
    simularAccesoAlBar();
}


simularAccesoAlBar();




