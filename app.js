function agregarAmigo() {

    const nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo === "") {
      alert("Por favor, ingrese un nombre válido.");
      return;
    }
  
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombreAmigo;
    listaAmigos.appendChild(nuevoAmigo);
  
    document.getElementById('amigo').value = "";
  }
  
  function sortearAmigo() {
  
    const listaAmigos = document.getElementById('listaAmigos').children;
    if (listaAmigos.length === 0) {
      alert("Por favor, agregue al menos un amigo a la lista.");
      return;
    }
  
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio].textContent;
  
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
  }