//CREAR ALGORITMO UTILIZANDO UN CICLO
//Pedir un número mediante prompt y sumarle otro número en cada repetición, realizando una salida por cada resultado.
/*
for(let i = (parseInt(prompt("ingresá un número"))); i < 11; i++){
    alert(i)
}
*/

//CREAR ALGORITMO UTILIZANDO UN CICLO
//Pedir un número por prompt, repetir la salida del mensaje "Hola" la cantidad de veces ingresada

let num = parseInt(prompt("Ingresá un número"));
let i = 0;
if(!isNaN(num) && num != ""){
    for(i; i==num; i++){
        alert("Hola")
    }
}
