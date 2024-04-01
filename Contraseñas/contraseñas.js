
const container = document.getElementById("container")
const btnContraseña = document.getElementById("btnContraseña")
const inputNumb = document.getElementById("inputNumb")

function generarContraseña(length) {
    let password = ""
    for (let i = 0; i < length; i++) {
        const simbolos = "!@#$%^&*()-_=+]"
        const simbolRandom = Math.floor(Math.random() * simbolos.length)
        const simboloRandom = simbolos.charAt(simbolRandom)
        const numberRandon = Math.floor(Math.random() * (9 - 0) + 0)
        const mayusculas ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const mayusRandom = Math.floor(Math.random() * mayusculas.length)
        const mayusculasRandom = mayusculas.charAt(mayusRandom)
        const minusculas= "abcdefghijklmnopqrstuvwxyz"
        const minusRandom = Math.floor(Math.random() * minusculas.length)
        const minusculaRandom = minusculas.charAt(minusRandom)
        console.log(minusculaRandom)
        let conjunto = Math.floor(Math.random() * 4)
        switch (conjunto) {
            case 0:
                password += mayusculasRandom;
                break
            case 1:
                password += minusculaRandom
                break;
            case 2:
                password += numberRandon
                break;
            case 3:
                password += simboloRandom
                break


        }
    }
    return password
}



function random() {

    let length = parseInt(inputNumb.value)
    let password = generarContraseña(length)

    container.innerHTML = password

}
btnContraseña.addEventListener("click", () => {
    random()
})
random()