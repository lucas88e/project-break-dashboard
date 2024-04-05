const nombreLink = document.getElementById("nombreEnlace")
const enlace = document.getElementById("enlace")
const btnEnlace = document.getElementById("btnEnlace")
const containerEnlace = document.getElementById("containerEnlace")
const body = document.querySelector('body');


import { randomImg } from "../reloj/function.js";

randomImg()
function mostrarEnlace(enlace){
    
    containerEnlace.innerHTML += `<li><a id="links" href="${enlace.link}" target="blank">${enlace.nombres}</a><button class="btnRemove"> X </button>`
    const btnRemove = document.querySelectorAll(".btnRemove")
    btnRemove.forEach(button =>{
    button.addEventListener("click",()=>{ console.log("click") 
    localStorage.removeItem("enlaces");

containerEnlace.innerHTML=""})}
    )}

function generarLink() {
    btnEnlace.addEventListener("click", () => {
        let nombres = nombreLink.value

        let link = enlace.value
        
        let enlacesGuardado =JSON.parse(localStorage.getItem("enlaces"))||[]
        enlacesGuardado.push({nombres, link})
        localStorage.setItem("enlaces", JSON.stringify(enlacesGuardado))
        nombreLink.value="";
        enlace.value="";
        
        mostrarEnlace({ nombres, link });
          
    console.log(enlacesGuardado)

       
    } )
}

generarLink()

window.addEventListener("load",()=>{
    let enlacesGuardado=JSON.parse(localStorage.getItem("enlaces"));
    enlacesGuardado.forEach(enlace => mostrarEnlace(enlace))
        
    });






