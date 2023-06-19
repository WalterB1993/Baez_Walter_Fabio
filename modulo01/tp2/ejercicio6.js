/*
Escribir un script que muestre la posición de la primera vocal de un texto introducido por
teclado. Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1.
*/

var vocales = ["a", "e", "i", "o", "u"];

texto = prompt("Introduce un texto");

var textomin = texto.toLowerCase();

var posicion = 0;

var parar = false;

for (var i = 0; i < textomin.length; i++) {
    
    for (var j = 0; j < vocales.length; j++) {
        
        if (vocales[j] == textomin.charAt(i)) {
            posicion = i;
            parar = true;
            break;
        }
    }

    if (parar) {
        break;
    }
}

document.write("La primer vocal está en la posición " + posicion);
