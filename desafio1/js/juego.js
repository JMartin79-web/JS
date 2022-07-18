//Saludar con un prompt
//pedir una respuesta a un problema matemático. Si no es la correcta, pedir la respuesta otra vez

alert("Hola! Este es un juego matemático. Ingresá la respuesta correcta para avanzar.")

//PRIMER RPEGUNTA
let respuesta = parseInt(prompt("Cual es el resultado de 10x10"))
let i = 0
while(respuesta != 100){
    alert("Respuesta incorrecta. Intente nuevamente")
    respuesta = parseInt(prompt("Cual es el resultado de 10x10"))
    
    console.log("n°" + i++)
}
console.log("El numero de intentos del la primera pregunta fue de " + i)

//SEGUNDA RPEGUNTA
alert("¡Muy bien! Siguiente pregunta")
let i2 = 0
let respuesta2 = parseInt(prompt("Encontrá x: 2²(x+3)+ 9 - 5 = 32"))
while(respuesta2 !=4){
    alert("Respuesta incorrecta. Intente nuevamente")
    respuesta2 = parseInt(prompt("Encontrá x: 2²(x+3)+ 9 - 5 = 32"))
    console.log("segunda pregunta")
    console.log("n°" + i2++)
}
console.log("El numero de intentos del la segunda pregunta fue de " + i2)

//TERCERA PREGUNTA
alert("¡Muy bien! Siguiente pregunta")
let i3 = 0
let respuesta3 = parseInt(prompt("Encontrá x: (x + 3)/6 = 2/3"))
while(respuesta3 !=1){
    alert("Respuesta incorrecta. Intente nuevamente")
    respuesta3 = parseInt(prompt("Encontrá x: (x + 3)/6 = 2/3"))
    console.log("tercer pregunta")
    console.log("n°" + i3++)
}

alert("FIN DEL JUEGO.\n Pregunta 1: "+ i + " errores.\n Pregunta 2: " + i2 + " errores.\n Pregunta 3: "+ i3 + " errores.\n ¡Bien hecho!")