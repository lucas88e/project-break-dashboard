const nombreLink = document.getElementById("nombreEnlace")
const enlace = document.getElementById("enlace")
const btnEnlace = document.getElementById("btnEnlace")
const containerEnlace = document.getElementById("containerEnlace")
const body = document.querySelector('body');


import { randomImg } from "../reloj/function.js";

randomImg()
function mostrarEnlace(enlace) {
    let nombres = nombreLink.value.trim


    containerEnlace.innerHTML += `<li><a id="links" href="${enlace.link}" target="blank">${enlace.nombres}</a><button class="btnRemove"> X </button>`
    const btnRemove = document.querySelectorAll(".btnRemove")
    btnRemove.forEach(button => {
        button.addEventListener("click", () => {
            const index = [...button.parentNode.children].indexOf(button.parentNode);
            const enlaces = JSON.parse(localStorage.getItem("enlaces")) || []
            enlaces.splice(index, 1)
            localStorage.setItem("enlaces", JSON.stringify(enlaces))
            button.parentNode.remove()
        }

        )
    }
    )
}

function generarLink() {
    btnEnlace.addEventListener("click", () => {
        let nombres = nombreLink.value

        let link = enlace.value
        if (nombres === "" || link === "") { alert("Debe introducir un nombre") }
        else {
            let enlacesGuardado = JSON.parse(localStorage.getItem("enlaces")) || []
            enlacesGuardado.push({ nombres, link })
            localStorage.setItem("enlaces", JSON.stringify(enlacesGuardado))
            nombreLink.value = "";
            enlace.value = "";

            mostrarEnlace({ nombres, link });
        }



    })
}

generarLink()


window.addEventListener("load", () => {
    let enlacesGuardado = localStorage.getItem("enlaces");
    if (enlacesGuardado) {
        enlacesGuardado = JSON.parse(enlacesGuardado);
        enlacesGuardado.forEach(enlace => mostrarEnlace(enlace))
    }

});





