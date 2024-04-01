const container = document.querySelector(".container")
const frases = document.querySelector(".frases")
const body = document.querySelector('body');

// body.style.backgroundImage = "url('andrea-de-santis-LZRNPg493Cs-unsplash.jpg')"


function startReloj() {
    let date = new Date();
    [
        horas = date.getHours().toString().padStart(2, "0"),
        minutos = date.getMinutes().toString().padStart(2, "0"),
        segundos = date.getSeconds().toString().padStart(2, "0")
    ]
    [
        año = date.getFullYear(),
        mes = date.getMonth().toString().padStart(2, "0"),
        dia = date.getDate(),
        daay= date.getDay()
    ]
    let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const semana = diasSemana[daay]
   

    container.innerHTML = `<section class="center"><div id="hora">${horas} : ${minutos} : ${segundos}</div><div id="fecha">${dia} / ${mes} / ${año} ${semana} </div></section>`;
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

function randomImg(){
    body.style.backgroundImage = "url('andrea-de-santis-LZRNPg493Cs-unsplash.jpg')"
    body.style.backgroundSize = "cover"
}
setInterval(function(){randomImg()},1500)