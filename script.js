function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo__mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
    .replace(/e/gi, "enter") // Reemplaza primero secuencias más largas
    .replace(/i/gi, "imes")  // Luego las siguientes secuencias más largas
    .replace(/o/gi, "ober")  // Luego secuencias de longitud media
    .replace(/u/gi, "ufat")  // Finalmente las secuencias más cortas
    .replace(/a/gi, "ai");

    if (texto.length !=0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent ="Texto encriptado con éxito";
        parrafo.textContent = "";
        muneco.src = "./img/encriptado.png";
    } else{
        muneco.src = "./img/muneco.svg";
        tituloMensaje.textContent ="Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        alert('Debes ingresar algún texto');
    } 
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo__mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
    .replace(/enter/gi, "e") 
    .replace(/imes/gi, "i")  
    .replace(/ober/gi, "o")  
    .replace(/ufat/gi, "u")  
    .replace(/ai/gi, "a");

    if (texto.length !=0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent ="Texto desencriptado con éxito";
        parrafo.textContent = "";
        muneco.src = "./img/desencriptado.png";
    }else {
        muneco.src = "./img/muneco.svg";
        tituloMensaje.textContent ="Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        alert('Debes ingresar algún texto');

    }

}


    
