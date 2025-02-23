let amigoSecreto = [];

function agregarAmigo() {
  let nuevoAmigo = document.getElementById("amigo").value;

  if (nuevoAmigo == "") {
    alert("Por favor ingrese un nombre");
  } else {
    amigoSecreto.push(nuevoAmigo);
  }
  actualizarLista();

  console.log(amigoSecreto);
  cajaVacia()
}
function actualizarLista(params) {
  const listarAmigo = document.getElementById("listaAmigos");
  listarAmigo.innerHTML = "";

  amigoSecreto.forEach((listaAmigoSecreto) => {
    const li = document.createElement("li");
    li.textContent = listaAmigoSecreto;
    listarAmigo.appendChild(li);
  });
 
}

function sortearAmigo() {
  if (amigoSecreto.length === 0) {
    alert("No es posible sortear una lista vacia");
    return;
  }
  const amigoAleatorio = Math.floor(Math.random() * amigoSecreto.length);
  const resultadoSorteo = amigoSecreto[amigoAleatorio];
  const listaUl = document.getElementById("resultado");
  listaUl.innerHTML = `<li> el amigo sorteado es : ${resultadoSorteo}</li>`;
  detenerSorteo()
  
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("btnAdicionar")
    .addEventListener("click", agregarAmigo);
  document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});

//LIMPIAMOS INPUT
function cajaVacia() {
  document.querySelector("#amigo").value = "";

  
}

function detenerSorteo() {
  if (amigoSecreto.length >=0) {
    amigoSecreto.splice(0)
    
  }
  
  
}