function agregar() {
    let lista = document.getElementById('personasListadas');
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let nombreCompleto = nombre + ' ' + apellido;
    
    let parrafo = document.createElement('p');
    parrafo.textContent = nombreCompleto;
    lista.appendChild(parrafo);
}