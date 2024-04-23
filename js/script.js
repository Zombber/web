
var estado = false;

function cambiarColor() {
    // Obtiene una referencia al body y al header
    var body = document.body;
    var header = document.querySelector("header");
    var a = document.querySelectorAll("a");
    

    // Cambia el color de fondo del body y del header
    if (estado===false) {
        // Si el cuerpo tiene la clase "modo-oscuro", cambia al modo claro
        header.classList.remove("modoblancoheader")
        header.classList.add("modooscuroheader")
        //a.classList.remove("iconoheader")
        //a.classList.add("iconoheaderblanco")
        body.style.background = "linear-gradient(135deg, #3b3c3d 0%, #000000 100%)";
        
        estado=true;
    } else {
        // Si el cuerpo no tiene la clase "modo-oscuro", cambia al modo oscuro
        header.classList.remove("modooscuroheader")
        header.classList.add("modoblancoheader")
        //a.classList.remove("iconoheaderblanco")
        //a.classList.add("iconoheader")
        body.style.background = "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)";
        estado = false;
    }
}

var estado2 = false;

function cambiarColoriconos() {
    // Obtiene una referencia al body y al header
    var a = document.querySelectorAll("a");
    

    // Cambia el color de fondo del body y del header
    if (estado2===false) {
        // Si el cuerpo tiene la clase "modo-oscuro", cambia al modo claro

        a.classList.remove("iconoheader")
        a.classList.add("iconoheaderblanco")
        body.style.background = "linear-gradient(135deg, #3b3c3d 0%, #000000 100%)";
        
        estado2=true;
    } else {
        // Si el cuerpo no tiene la clase "modo-oscuro", cambia al modo oscuro

        a.classList.remove("iconoheaderblanco")
        a.classList.add("iconoheader")
        estado2 = false;
    }
}

/*
var modooscuro = false;

function cambiarColor() {
    // Obtiene una referencia al body
    var body = document.body;
    var header =  document.querySelector("header");

    

    // Obtiene el color de fondo actual del body
    var backgroundColor = window.getComputedStyle(body).backgroundColor;
    var backgroundimage = window.getComputedStyle(body).backgroundImage;

    // Cambia el color del fondo del body

    if (modooscuro===false) {
        // Si el color de fondo es blanco, cambia a negro
        body.style.background = "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)";
        header.style.background = "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)";
        modooscuro = true
    } else {

        modooscuro = false
        body.style.background = "linear-gradient(135deg, #3b3c3d 0%, #000000 100%)";
        body.style.background = "linear-gradient(135deg, #3b3c3d 0%, #000000 100%)";
    }


    if (header.classList.contains("modoblancoheader")) {
        // Si el color de fondo es blanco, cambia a negro
        header.classList.remove("modoblancoheader")
        header.classList.add("modooscuroheader")
    } else {

    }


}
*/