//haciendo el efecto de menu 

let container = document.getElementById("contenedor")
let padremenu = document.getElementById("padremenu")

padremenu.addEventListener("click" , () => {
    container.classList.toggle("ancho")
    padremenu.classList.toggle("hola")

})



