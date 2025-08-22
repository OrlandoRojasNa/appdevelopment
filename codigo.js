var Elementos = [];


function cambiar(){
    var titulo = document.getElementById("titulo");
    var nuevotitulo = document.getElementById("nuevotitulo").value;
    titulo.innerHTML = nuevotitulo;
}

function agregarElemento() {
   var nuevoElemento = document.getElementById("nuevotitulo").value;
    if (nuevoElemento) {
        Elementos.push(nuevoElemento);
 
        mostrarElementos();
      
        document.getElementById("nuevotitulo").value = ""; 
    } else {
      
        alert("Por favor, ingrese un elemento.");
    }
}


function mostrarElementos() {
    var lista = document.getElementById("agregarElemento");
    lista.innerHTML = ""; 
    Elementos.forEach(function(elemento) {
        var li = document.createElement("li");
        li.textContent = elemento;
        lista.appendChild(li);
    });
}