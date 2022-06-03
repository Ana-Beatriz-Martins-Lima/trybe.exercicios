const cores = document.getElementsByClassName('color')
let pixels = document.getElementsByClassName('pixel')
const botao = document.getElementById('clear-board')

for (let ii = 0; ii < cores.length; ii += 1) {
    cores[ii].addEventListener("click",selecionar)
}
    
function remover(){
        cores[0].classList.remove('selected')
        cores[1].classList.remove('selected')
        cores[2].classList.remove('selected')
        cores[3].classList.remove('selected')}
        


function selecionar(event) {
    
    remover()

    const selecionada = event.target;
    selecionada.classList.add('selected')
 }      


 for (let ii = 0; ii < pixels.length; ii += 1) {
    for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener("click",pintar)}
    
}
 
function pintar(event){
    let cor = document.querySelector('.selected')
   const cssObj = window.getComputedStyle(cor).getPropertyValue('background-color')
     const selecionado = event.target;
     selecionado.style.backgroundColor = cssObj
}


botao.addEventListener('click', limpar);

function limpar(){
    for (let ii = 0; ii < pixels.length; ii += 1) {
        for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].style.backgroundColor = 'white'}
        
    }
    
   }
