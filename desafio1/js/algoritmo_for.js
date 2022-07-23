//CREAR ALGORITMO UTILIZANDO UN CICLO
//Pedir un número mediante prompt y sumarle otro número en cada repetición, realizando una salida por cada resultado.
/*
for(let i = (parseInt(prompt("ingresá un número"))); i < 11; i++){
    alert(i)
}
*/


//NO FUNCIONANDO :(
    
//CREAR ALGORITMO UTILIZANDO UN CICLO
//Pedir un número por prompt, repetir la salida del mensaje "Hola" la cantidad de veces ingresada

/*
let num = parseInt(prompt("Ingresá un número"));
let i = 0;

if(num && num != ""){

    for(i; i<num; i++){

        alert("Hola")

    }
} else{
    alert("No es un número válido")
}
*/




/*
let num = parseInt(prompt("Ingresá un número"));
let i = 0;

if(num && num != ""){

    for(i; i<num; i++){

        alert("Hola")

    }
}
*/
/*
let i = 0;
do {
    let num = prompt("Ingresá un número");
    for(i; i<num; i++){
        alert("Hola")
    }

    console.log(typeof(num))
} while (num=="");//lo ingresado NO sea un número
*/
do {
    let entrada = prompt("ingresá algo")
    alert("hola")
} while (entrada !== null);