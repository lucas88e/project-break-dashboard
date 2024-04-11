
function randomImg() {
  const body = document.querySelector('body');
  let backgrounds = [];


  backgrounds[0] = `../assets/imgs/fondo-1.jpg`
    backgrounds[1] = `../assets/imgs/fondo-2.jpg`
  backgrounds[2] = `../assets/imgs/fondo-3.jpg`
  backgrounds[3] = `../assets/imgs/fondo-4.jpg`
  backgrounds[4] = `../assets/imgs/fondo-5.jpg`
  backgrounds[5] = `../assets/imgs/fondo-6.jpg`
  backgrounds[6] = `../assets/imgs/fondo-7.jpg`
  backgrounds[7] = `../assets/imgs/fondo-8.jpg`
  backgrounds[8] = `../assets/imgs/fondo-9.jpg`
  backgrounds[9] = `../assets/imgs/fondo-10.jpg`
  backgrounds[10] = `../assets/imgsGIT /fondo-11.jpg`
  let randomBackgrounds = Math.floor(Math.random() * backgrounds.length)

  body.style.backgroundImage = `url(${backgrounds[randomBackgrounds]})`
  body.style.backgroundSize = "cover"
  body.style.backgroundPosition = "center"
  

  setInterval(function () { randomImg() }, 15000)
}
export { randomImg }



// function randomImg(baseURL) {
//   const body = document.querySelector('body');
//   let backgrounds = [];
//   for (let i = 0; i < backgrounds.length; i++) {

//   backgrounds[i] = `${baseURL}/fondo-${i}.jpg`
  // backgrounds[1] = `${baseURL}/fondo-2.jpg`
  // backgrounds[2] = `${baseURL}/fondo-3.jpg`
  // backgrounds[3] = `${baseURL}/fondo-4.jpg`
  // backgrounds[4] = `${baseURL}/fondo-5.jpg`
  // backgrounds[5] = `${baseURL}/fondo-6.jpg`
  // backgrounds[6] = `${baseURL}/fondo-7.jpg`
  // backgrounds[7] = `${baseURL}/fondo-8.jpg`
  // backgrounds[8] = `${baseURL}/fondo-9.jpg`
  // backgrounds[9] = `${baseURL}/fondo-10.jpg`
  // backgrounds[10] = `${baseURL}/fondo-11.jpg`
//   let randomBackgrounds = Math.floor(Math.random() * backgrounds.length)

//   body.style.backgroundImage = `url(${backgrounds[randomBackgrounds]})`
//   body.style.backgroundSize = "cover"
//   body.style.backgroundPosition = "center"
  
//   console.log(backgrounds[i])
//   setInterval(function () { randomImg() }, 15000)}}