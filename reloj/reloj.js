const containerReloj = document.querySelector(".containerReloj")
const frases = document.querySelector(".frases")
const body = document.querySelector('body');

// body.style.backgroundImage = "url('andrea-de-santis-LZRNPg493Cs-unsplash.jpg')"


function startReloj() {
    let date = new Date();

    let horas = date.getHours().toString().padStart(2, "0")
    let minutos = date.getMinutes().toString().padStart(2, "0")
    let segundos = date.getSeconds().toString().padStart(2, "0")


    let año = date.getFullYear()
    let mes = (date.getMonth() + 1).toString().padStart(2, "0")
    let dia = date.getDate().toString().padStart(2, "0")
    let day = date.getDay()



    let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const semana = diasSemana[day]


    containerReloj.innerHTML = `<section class="center"><div id="hora">${horas} : ${minutos} : ${segundos}</div><div id="fecha">${dia} / ${mes} / ${año} <p id="semana">${semana}</p> </div></section>`;
    setTimeout(function () { startReloj() }, 1000)

    if (horas > 0 && horas < 7) { frases.innerHTML = "Es hora de descansar" }
    else if (horas >= 7 && horas < 12) { frases.innerHTML = "Es hora de despertar" }
    else if (horas >= 12 && horas < 14) { frases.innerHTML = "Es hora de comer" }
    else if (horas >= 14 && horas < 16) { frases.innerHTML = "Espero que hayas comido" }
    else if (horas >= 16 && horas < 18) { frases.innerHTML = "Es tarde el ultimo empujón" }
    else if (horas >= 18 && minutos > 1 && horas < 22) { frases.innerHTML = "Esto ya son horas extas" }
    else { frases.innerHTML = "Es hora de parar " }


}
startReloj()
import { randomImg } from "/reloj/function.js";

randomImg("../assets")

