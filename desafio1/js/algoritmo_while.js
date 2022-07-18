//CREAR ALGORITMO UTILIZANDO UN CICLO
//Pedir un texto mediante promt
//concatenar un valor en cada repetición, realizando una salida por cada resultado
//Hasta que se ingrese "ESC"

let entrada = prompt("Escribí ESC")
let i = 0

while(entrada != "ESC"){
    prompt("No escribiste ESC. Escribilo o nunca te voy a dejar de molestar")
    console.log("Este es el intento n°" + (i++))
}