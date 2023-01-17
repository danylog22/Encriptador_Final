

function capturaTexto() {
    var textoAcopiar = document.getElementById("res").value;
    document.getElementById("input-text").value = textoAcopiar;
    
}

function encriptar() {
    var textoIngresado = document.getElementById("input-text").value.toLowerCase();
    var resultado = textoIngresado.replaceAll("e","enter");
    resultado = resultado.replaceAll("i","imes");
    resultado = resultado.replaceAll("a","ai");
    resultado = resultado.replaceAll("o","ober");
    resultado = resultado.replaceAll("u","ufat");
    document.getElementById("res").value = resultado;
    document.getElementById("input-text").value = "";
    document.getElementById("img-m").style.display = "none";
    document.getElementById("h2-img").style.display = "none";
    document.getElementById("p-img").style.display = "none";
    document.getElementById("res").style.display = "block"; 
    document.getElementById("copy").style.display = "block";     
} 

function desencriptar() {
    var textoIngresado = document.getElementById("input-text").value.toLowerCase();
    var resultado = textoIngresado.replaceAll("enter","e");
    resultado = resultado.replaceAll("imes","i");
    resultado = resultado.replaceAll("ai","a");
    resultado = resultado.replaceAll("ober","o");
    resultado = resultado.replaceAll("ufat","u");
    document.getElementById("input-text").value = "";
    document.getElementById("res").value = resultado;
    document.getElementById("img-m").style.display = "none";
    document.getElementById("h2-img").style.display = "none";
    document.getElementById("p-img").style.display = "none";
    document.getElementById("res").style.display = "block"; 
    document.getElementById("copy").style.display = "block";

}

function copiarTexto() {
    capturaTexto();
    var copyTextarea = document.createElement("textarea");
    copyTextarea.style.position = "fixed";
    copyTextarea.style.opacity = "0";
    copyTextarea.textContent = document.getElementById("res").value; 
    document.body.appendChild(copyTextarea);
    copyTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(copyTextarea);
    document.getElementById("res").value = "";
    document.getElementById("res").style.display = "none"; 
    document.getElementById("copy").style.display = "none";
    document.getElementById("img-m").style.display = "block";
    document.getElementById("h2-img").style.display = "block";
    document.getElementById("p-img").style.display = "block";
    
}
