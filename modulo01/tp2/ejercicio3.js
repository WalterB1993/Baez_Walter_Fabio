/*Utilizando la estructura FOR, 
crear un script que pueda calcular el factorial de un número entero.*/

const fact = prompt("ingrese un número para calcular factorial"); 
let num = 1;
for(let i = fact; i>0; i--){
    num *= i;
}
document.write(num);