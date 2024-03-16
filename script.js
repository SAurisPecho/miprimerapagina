//alert("Hola este es mi Javascript");

//let nombre = "Sarai"
//console.log(nombre)

//CONDICIONAL

//let nombreSeccion1 = "Acerca de mí"

//let seccion1 = document.querySelector("h2")
//seccion1.innerHTML = nombreSeccion1;

//let tituloSeccion1 = seccion1.innerText;
//console.log(tituloSeccion1);

//if(tituloSeccion1 == "Acerca de mí"){
//    seccion1.innerText = "Acerca de mí";
//} else {
//    console.log("No se cumple");
//}

//FUNCION

//let nombre = "Ava"
//let ciudad = "Lima"
//let gusto = "jugar"

//let parte = document.querySelector(".parrafo2");

//function cambiodetexto(nombre, ciudad, gusto) {
//    let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Pisco. Me gusta ${gusto} y salir a pasear por la playa. Me encantaría aprender a /programar para poder ayudar a las personas a mostrar lo que hacen.`;
    
//    return contenido;
//}

//parte.innerText = cambiodetexto(nombre, ciudad, gusto);

//MENU RESPONSIVE

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function (){
    navBar = document.querySelector(".navBar");
    navBar.classList.toggle("active");
}

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario (){
    let warnings ="";
    let valido ="true";
    parrafo.innerHTML ="";

    if(nombre.value.length < 4) {
        warnings += `El nombre debe contener más de 4 carcateres`;
        valido = False;
    }

    if (!valido) {
        parrafo.innerHTML= warnings;
    } else {
        parrafo.innerHTML= "Enviado";
    }
    return valido;
}

form.addEventListener("submit", (e) => {
    if (validarFormulario()) {
        formulario.submit();
    } else {
        e.preventDefault();
    }
});