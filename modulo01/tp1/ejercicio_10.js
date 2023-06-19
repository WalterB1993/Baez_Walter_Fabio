/*
Ejercicio 10:
Crear el archivo “ejercicio_10.js”. Declarar un array llamado “meses” y que tenga guardado los
meses del año. Luego el usuario debe poder ingresar en el navegador un número de 1 al 12 y este
le devolverá el nombre del mes. Por ejemplo escribe 5 debe devolver el mes mayo.
*/

let meses = ["Ene", "Feb", "Mar", "Abril", "Mayo", "Jun", "Jul", "Agost","Sept", "Oct", "Nov", "Dic"];
    
    let mes = prompt("Ingresar un número del 1 al 12");
    
    while (parseInt (mes) >= 1 && parseInt (mes) <= 12) {
        document.write("El mes que ha elegido el usuario es " + meses[mes - 1]);
        break;
    }
