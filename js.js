let dibujo = document.querySelector('.cuadricula');
let slider = document.querySelector('.gridSize');
let paleta = document.querySelector('.seleccionadorDeColor');
let arcoiris = document.querySelector('.arcoiris');
let numerogrid = document.querySelector('.gridnumero');
function colorRandom() {
    let stringRandom = Math.floor(Math.random() * 16777215).toString(16);
    let colorstring = '#' + stringRandom
    return colorstring
}
function checkeado() {
    checkbox = arcoiris.checked;
    return checkbox
}
function saberColor() {
    color = paleta.value;
    return color
}
let tamano = 0;
function encontrarTamano() {
    tamano = slider.value;
    return tamano
}
for (j = 1; j <= encontrarTamano() * encontrarTamano(); j++) {
    let row = document.createElement('div')
    row.className = "cuadroChico";
    dibujo.appendChild(row);
}
numerogrid.textContent="Tamaño del grid "+encontrarTamano()+"*"+encontrarTamano();
dibujo.style.gridTemplateColumns = `repeat(${encontrarTamano()}, 1fr)`
dibujo.style.gridTemplateRows = `repeat(${encontrarTamano()}, 1fr)`
//slider.onclick = function cambiarnumero() {
//    numerogrid.textContent="Tamaño del grid " +encontrarTamano()+ ' * '+ encontrarTamano();
//}
slider.onclick = function generarGrid() {
    borrar();
    for (j = 1; j <= encontrarTamano() * encontrarTamano(); j++) {
        let row = document.createElement('div')
        row.className = "cuadroChico";
        dibujo.appendChild(row);
    
    }
   // numerogrid.textContent="Tamaño del grid " +encontrarTamano()+ ' * '+ encontrarTamano();
    dibujo.style.gridTemplateColumns = `repeat(${encontrarTamano()}, 1fr)`
    dibujo.style.gridTemplateRows = `repeat(${encontrarTamano()}, 1fr)`
    numerogrid.textContent="Tamaño del grid "+ encontrarTamano()+"*"+encontrarTamano();
}
function colorear(div) {
    if (checkeado() == false) {
        div.style.backgroundColor = saberColor();
    }
    if (checkeado()) {
        div.style.backgroundColor = colorRandom();
    }
}
dibujo.onmouseenter = function pintar1() {
    cuadros = document.querySelectorAll(".cuadroChico")
    cuadros.forEach((div) => {
        div.addEventListener('mousedown', () => { div.style.backgroundColor = saberColor() })
    })
}
dibujo.onmousedown = function pintar() {
    cuadros = document.querySelectorAll('.cuadroChico')
    cuadros.forEach((div) => div.addEventListener('mouseenter', () => { colorear(div) }))
}
function remplazar(div) {
    let clon = div.cloneNode(true);
    div.parentNode.replaceChild(clon, div)
}
dibujo.onmouseup = function removerEventos() {
    cuadros = document.querySelectorAll('.cuadroChico')
    cuadros.forEach((div) => remplazar(div))
}
borrador = document.querySelector('.borrar');
function borrar() {
    cuadros = document.querySelectorAll('.cuadroChico')
    cuadros.forEach((div) => div.style.backgroundColor = "white")
}
borrador.onclick = function borrar1() {
    borrar()
}


