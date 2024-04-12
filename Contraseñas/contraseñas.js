
const containerContraseñas = document.getElementById("containerContraseñas")
const btnContraseña = document.getElementById("btnContraseña")
const inputNumb = document.getElementById("inputNumb")


function generarContraseña(length) {
    let password = ""
    for (let i = 0; i < length; i++) {
        const simbolos = "!@#$%^&*()-_=+]"
        const simbolRandom = Math.floor(Math.random() * simbolos.length) 
        const simboloRandom = simbolos.charAt(simbolRandom)
        const numberRandom = Math.floor(Math.random() * 9);
        const mayusculas ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const mayusRandom = Math.floor(Math.random() * mayusculas.length) 
        const mayusculasRandom = mayusculas.charAt(mayusRandom)
        const minusculas= "abcdefghijklmnopqrstuvwxyz"
        const minusRandom = Math.floor(Math.random() * minusculas.length)
        const minusculaRandom = minusculas.charAt(minusRandom)
        let conjunto = Math.floor(Math.random() * 4) //Elegir aleatoriamente uno de los 4 casos, mayusculas, numeros, simbolos y minusculas
        switch (conjunto) {
            case 0:
                password += mayusculasRandom;
                break
            case 1:
                password += minusculaRandom
                break;
            case 2:
                password += numberRandom
                break;
            case 3:
                password += simboloRandom
                break


        }
    }
    return password
}



function random() {
    const simbolos = "!@#$%^&*()-_=+]"
    const simbolRandom = Math.floor(Math.random() * simbolos.length) 
    const simboloRandom = simbolos.charAt(simbolRandom)
    const numberRandom = Math.floor(Math.random() * 9)
    const mayusculas ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const mayusRandom = Math.floor(Math.random() * mayusculas.length) 
    const mayusculasRandom = mayusculas.charAt(mayusRandom)
    const minusculas= "abcdefghijklmnopqrstuvwxyz"
    const minusRandom = Math.floor(Math.random() * minusculas.length)
    const minusculaRandom = minusculas.charAt(minusRandom)

    let length = parseInt(inputNumb.value) -4// Función para selecionar la longitud de caracteres introducida en el input menos 4 que tienen que ser obligatoriamente cada caracter
    let password = generarContraseña(length)

    containerContraseñas.innerHTML = `Aquí tiene su contraseña segura:<p> ${minusculaRandom}${simboloRandom}${mayusculasRandom}${numberRandom}${password}</p>`

}
btnContraseña.addEventListener("click", () => {
    random()
})
import { randomImg } from "../reloj/function.js";
randomImg("../assets")
