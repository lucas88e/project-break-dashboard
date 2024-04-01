const city = "Tomares"
const apiKey = "3c867f662d9c4961911195952242203 "
const container = document.getElementById("container")
const containerDos = document.getElementById("containerDos")
const fecha = "2024-05-30"
fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("La solicitus no fue exitosa")

        }
        return response.json()
    })
    .then((data) => {
        console.log(data)
        const hoy =data.forecast.forecastday[0].date
        const nombre = (data.location.name)
        const pais = (data.location.country)
        const temperatura = (data.current.temp_c)
        const clima = (data.current.condition.text)
        const lluvia = (data.forecast.forecastday[0].day.daily_chance_of_rain)
        const viento = data.current.wind_kph
        const humedad = (data.current.humidity)
        const img = data.current.condition.icon
        container.innerHTML = `<div id="container"><img src=${img}><p>${hoy}<p>${nombre} / ${pais}</p> <p>${temperatura}ºC</p> <p>${clima}</p> <p> Precipitaciones:  ${lluvia}%</p>
    <p> Viento: ${viento} km/h</p><p> Humedad: ${humedad} %</p></div>`

    })

fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=4&aqi=si&alerts=si

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

            const imgs = (horas[i].condition.icon)
            containerDos.innerHTML += `<div id="containerDos"><p>${horas[i].time.split(" ")[1].split(":")[0]}: 00 h</p>${horas[i].temp_c} Grados <p>${horas[i].chance_of_rain} % probabilidad lluvia</p>
             <img src=${imgs}></div> `

        }

        // containerDos.innerHTML = `${fecha}`

    })