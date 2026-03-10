// arreglo de objetos de sillas presidencial

let arreglo_presidencial = [
    {
        nombre : "stanford",
        tipo : "presidencial-negra",
        precio : "270$",
        img : "astess/imagenes de la intro/silla presidencial.png",
    },
    {
        nombre : "oxford",
        tipo : "presidencial-negra",
        precio : "250$",
        img : "astess/sillas presidencial/presidencial oxford.jpg",
    },
    {
        nombre : "indonesia",
        tipo : "presidencial-negra",
        precio : "230$",
        img : "astess/sillas presidencial/presidencial indonesia.jpg",
    },
]

// arreglo de objetos de las sillas ejecutivas

let arreglo_ejecutiva = [
    {
        nombre : "trendy",
        tipo : "ejecutiva-negra",
        precio : "120$",
        img : "astess/sillas ejecutivas/trendy ejecutiva.jpg", 
    },
    {
        nombre : "dinamic",
        tipo : "ejecutiva-negra",
        precio : "130$",
        img : "astess/sillas ejecutivas/dinamic ejecutiva.jpg", 
    },
    {
        nombre : "chicago",
        tipo : "ejecutiva-negra",
        precio : "140$",
        img : "astess/sillas ejecutivas/ejecutiva chicago.jpg", 
    },
    {
        nombre : "trendy",
        tipo : "trineo-negra",
        precio : "110$",
        img : "astess/sillas ejecutivas/trendy trineo.jpg", 
    },
    {
        nombre : "dinamic",
        tipo : "trineo-negra",
        precio : "120$",
        img : "astess/sillas ejecutivas/dinamic trineo.jpg", 
    },
]

// arreglo de objetos de la sillas visitantes

let arreglo_visitantes = [
    {
        nombre : "visitante",
        tipo : "visitante-negra",
        precio : "70$",
        img : "astess/sillas visitantes/silla visitante.jpg", 
    },
    {
        nombre : "visitante 2",
        tipo : "visitante-negra",
        precio : "70$",
        img : "astess/sillas visitantes/silla visitante 2.jpg", 
    },
    {
        nombre : "visitante",
        tipo : "visitante-negra",
        precio : "70$",
        img : "astess/sillas visitantes/silla visitante 3.jpg", 
    },
]

//arreglo de objetos de los escritorios

let arreglo_escritorios = [
    {
        nombre : "escritorio",
        tipo : "escritorio-lazio",
        precio : "170$",
        img : "astess/escritorios/escritorio 3.png", 
    },
    {
        nombre : "escritorio 2",
        tipo : "escritorio-negro",
        precio : "130$",
        img : "astess/escritorios/escritorio-removebg-preview.png", 
    },
    {
        nombre : "escritorio 3",
        tipo : "escritorio-marron",
        precio : "180$",
        img : "astess/escritorios/escritorio2-removebg-preview.png", 
    },
]

//arreglo de objetos de los estantes

let arreglo_estantes = [
    {
        nombre : "estante 1",
        tipo : "estante-negro",
        precio : "110$",
        img : "astess/estantes metalicos/estante negro 2.jpg", 
    },
    {
        nombre : "estante 2",
        tipo : "estante-blanco",
        precio : "110$",
        img : "astess/estantes metalicos/estante blanco 2.jpg", 
    },
    {
        nombre : "estante 3",
        tipo : "estante-dobles",
        precio : "150$",
        img : "astess/estantes metalicos/estante doble.jpg", 
    },
]

//arreglo de objetos de los archivos

let arreglo_archivo = [
    {
        nombre : "arturito",
        tipo : "arturito-lazio",
        precio : "150$",
        img : "astess/archivos/arturito-removebg-preview.png", 
    },
    {
        nombre : "arturito",
        tipo : "arturito-marron",
        precio : "150$",
        img : "astess/archivos/arturito2.jpg", 
    },
    {
        nombre : "4 gabetas",
        tipo : "archibo-marron",
        precio : "150$",
        img : "astess/archivos/archivo 4 gabetas.jpg", 
    },
    {
        nombre : "telefonera",
        tipo : "telefonera-lazio",
        precio : "150$",
        img : "astess/archivos/telefonerra lazzio.jpg", 
    },
    {
        nombre : "biblioteca",
        tipo : "biblioteca-lazio",
        precio : "150$",
        img : "astess/archivos/biblioteca2.jpg", 
    },
]

//arreglo de objetos de las piramidez

let arreglo_piramidez = [
    {
        nombre : "piramide",
        tipo : "lateral-blanco",
        precio : "150$",
        img : "astess/piramides/piramide_lateral__2_-removebg-preview.png", 
    },
    {
        nombre : "piramide",
        tipo : "central-blanco",
        precio : "150$",
        img : "astess/piramides/piramide-removebg-preview.png", 
    },
]

let img_close = "astess/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"

let arreglo = [arreglo_presidencial ,arreglo_ejecutiva , arreglo_visitantes ,arreglo_escritorios ,arreglo_estantes ,arreglo_piramidez ,arreglo_archivo]

let padre = document.getElementById("hijo1")


let enlace1 = document.getElementById("enlace1")
let enlace2 = document.getElementById("enlace2")
let enlace3 = document.getElementById("enlace3")
let enlace4 = document.getElementById("enlace4")
let enlace5 = document.getElementById("enlace5")
let enlace6 = document.getElementById("enlace6")
let enlace7 = document.getElementById("enlace7")


let arreglo_enlace = [enlace1,enlace2,enlace3,enlace4,enlace5,enlace6,enlace7]



//logica

function alejir(i){

    borrar_active()
    arreglo_enlace[i].classList.add("active")

    let data = arreglo[i]

    padre.textContent = ""

    data.forEach(dat => {
        let enlace = document.createElement("a")
        let imagen_close = document.createElement("img")
        let precio = document.createElement("p")
        precio.classList.add("precio")
        let contenido = document.createElement("div")
        contenido.classList.add("contenido")

        enlace.href = "https://wa.me/584120556265? text=hola%20quiero$20mas%20informacion"
        imagen_close.src = img_close
        precio.textContent = dat.precio
        enlace.appendChild(imagen_close)
        contenido.appendChild(precio)
        contenido.appendChild(enlace)

        let nombre = document.createElement("h1")
        let tipo = document.createElement("p")
        nombre.classList.add("nombre")
        tipo.classList.add("tipo")
        let informacion = document.createElement("div")
        informacion.classList.add("informacion")

        nombre.textContent = dat.nombre
        tipo.textContent = dat.tipo

        informacion.appendChild(nombre)
        informacion.appendChild(tipo)
        informacion.appendChild(contenido) 

        let img = document.createElement("img")
        let hijo1 = document.createElement("div")
        hijo1.classList.add("nietos")

        img.src = dat.img

        hijo1.appendChild(img)
        hijo1.appendChild(informacion)

        padre.appendChild(hijo1)

    })
}


function borrar_active(){
    arreglo_enlace.forEach(enlace => {
        enlace.classList.remove("active")
    })
}