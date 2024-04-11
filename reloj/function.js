
 function randomImg(){
    const body = document.querySelector('body');

        let backgrounds = [];
         backgrounds[0] =   "./assets/imgs/fondo-1.jpg"
         backgrounds[1] =   "./assets/imgs/fondo-2.jpg"
         backgrounds[2] =    "./assets/imgs/fondo-3.jpg"
         backgrounds[3] =   "./assets/imgs/fondo-4.jpg"
         backgrounds[4] =   "./assets/imgs/fondo-5.jpg"
         backgrounds[5] =   "./assets/imgs/fondo-6.jpg"
         backgrounds[6] =  "./assets/imgs/fondo-7.jpg"
         backgrounds[7] =   "./assets/imgs/fondo-8.jpg"
         backgrounds[8] =  "./assets/imgs/fondo-9.jpg"
         backgrounds[9] =  "./assets/imgs/fondo-10.jpg"
         backgrounds[10] =  "./assets/imgs/fondo-11.jpg"
    
        let randomBackgrounds = Math.floor(Math.random()* backgrounds.length)

        body.style.backgroundImage = `url(${backgrounds[randomBackgrounds]})`
        body.style.backgroundSize ="cover" 
        body.style.backgroundPosition ="center"

          setInterval(function () { randomImg() }, 150000)
       }
     export {randomImg}