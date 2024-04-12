
function randomImg(baseURL) {
  const body = document.querySelector('body');
  let backgrounds = [];
    for (let i = 1; i <= 11; i++) {
  
    backgrounds[i] = `${baseURL}/fondo-${i}.jpg`
  }

    function changeBacgrounds(){
  let randomBackgrounds = Math.floor(Math.random() * (11-1)+1)
console.log(randomBackgrounds)
  body.style.backgroundImage = `url(${backgrounds[randomBackgrounds]})`
  body.style.backgroundSize = "cover"
  body.style.backgroundPosition = "center"
    }
  
changeBacgrounds()

  setInterval(function () { changeBacgrounds() }, 15000)
}
export { randomImg }



