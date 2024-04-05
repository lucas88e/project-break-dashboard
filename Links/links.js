const nombreLink = document.getElementById("nombreEnlace")
const enlace = document.getElementById("enlace")
const btnEnlace = document.getElementById("btnEnlace")
const container = document.getElementById("container")
const body = document.querySelector('body');


import { randomImg } from "../reloj/function.js";

randomImg()

function generarLink() {
    btnEnlace.addEventListener("click", () => {
        let nombres = nombreLink.value.trim()

        let link = enlace.value.trim()
        
        let enlacesGuardado =JSON.parse(localStorage.getItem("enlaces"))||[]
        enlacesGuardado.push({nombres, link})
        localStorage.setItem("enlaces", JSON.stringify(enlacesGuardado))
        nombreLink.value="";
        enlace.value="";
        
        mostrarEnlace({ nombres, link });
          
    console.log(enlacesGuardado)

       
    } )
}
function mostrarEnlace(enlace){
    container.innerHTML += `<li><a href="${enlace.link}" target="blank">${enlace.nombres}</a><button class="btnRemove"> X </button>`
    const btnRemove = document.querySelectorAll(".btnRemove")
    btnRemove.forEach(button =>{
    button.addEventListener("click",()=>{ console.log("click") 
    localStorage.removeItem("enlaces");

container.innerHTML=""})}
    )}


generarLink()

window.addEventListener("load",()=>{
    let enlacesGuardado=JSON.parse(localStorage.getItem("enlaces"));
    enlacesGuardado.forEach(enlace => mostrarEnlace(enlace))
        
    });



    function remove() {
       
       
    };
remove()





