// const city = prompt("Introduce el nombre de la ciudad de la que quieras saber los datos del clima")
const city = prompt("escribe tu ciudad para conocer el clima de hoy")
const apiKey = "3c867f662d9c4961911195952242203"
const containerTiempo = document.getElementById("containerTiempo")
const containerDos = document.getElementById("containerDos")
function climaGeneral() {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("La solicitus no fue exitosa")

            }
            return response.json()
        })
        .then((data) => {
            const hoy = data.forecast.forecastday[0].date
            const nombre = (data.location.name)
            const pais = (data.location.country)
            const temperatura = (data.current.temp_c)
            const clima = (data.current.condition.text)
            const lluvia = (data.forecast.forecastday[0].day.daily_chance_of_rain)
            const viento = data.current.wind_kph
            const humedad = (data.current.humidity)
            const img = data.current.condition.icon
            containerTiempo.innerHTML = `<h1>El Tiempo en ${nombre} / ${pais}</h1><div id="containerTiempos"><img class="imgTiempo" src=${img}><p>${hoy} <p>${temperatura}🌡️ºC</p> <p>${clima}</p> <p> Precipitaciones:  ${lluvia}%</p>
    <p> Viento: ${viento} km/h</p><p> Humedad: ${humedad} %</p></div>`

        })
        .catch(error => console.error("Error al obtener datos del clima:", error))
}


climaGeneral()
function climaHoras() {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=0&aqi=si&alerts=si

`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("La solicitus no fue exitosa")

            }
            return response.json()
        })
        .then((data) => {
            // const fecha = data.forecast.forecastday[0].date
            const horas = data.forecast.forecastday[0].hour

            for (let i = 0; i < horas.length; i++) {

                const imgs = horas[i].condition.icon
                containerDos.innerHTML += `<div id="containerDos"><p id="horas">${horas[i].time.split(" ")[1].split(":")[0]}: 00 h</p><span class="grados">${horas[i].temp_c} 🌡️ ºC </span><p>${horas[i].chance_of_rain} % probabilidad lluvia</p>
             <img src=${imgs}></div> `

            }

        })
        .catch(error => console.error("Error al obtener datos del clima:", error) + alert("ACTUALIZA E INTRODUZCA UNA CIUDAD VALIDA"))
   
}334
climaHoras()
import { randomImg } from "../reloj/function.js";
randomImg("../assets")
