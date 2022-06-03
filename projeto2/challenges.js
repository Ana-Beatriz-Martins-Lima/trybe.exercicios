// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(texto) {
  return texto.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
let wins = 3;
let tiers = 1;

function footballPoints(vi, em) {
  return (vi * wins) + (tiers * em);
}

// Desafio 6
function highestCount(numeros) {
}


// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let distancia1 = Math.abs(mouse - cat1)
  let distancia2 = Math.abs(mouse - cat2)
if (distancia1 > distancia2){
  return 'cat2'
}else if (distancia2 > distancia1){
  return 'cat1'
}else if (distancia1 === distancia2){
  return 'os gatos trombam e o rato foge'
}
}

// Desafio 8

function fizzBuzz(numero) {
  let array = []
  for (let i = 0; i < numero.length; i += 1) {
    if (numero[i] % 3 === 0 && numero[i] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (numero[i] % 5 === 0) {
      array.push('buzz');
    } else if (numero[i] % 3 === 0) {
      array.push('fizz');
    }else{
    array.push('bug!');
  } 
 }
 return array
}

// Desafio 9
function encode(string) {
  let encodeMen = ''
  let mensagem = ''

  for (let letra of string) {
    if ( letra === 'a'){
      encodeMen = 1
      mensagem += encodeMen
    }else if (letra === 'e'){
      encodeMen = 2
      mensagem += encodeMen
    }else if (letra === 'i'){
      encodeMen = 3
      mensagem += encodeMen
    }else if (letra === 'o'){
      encodeMen = 4
      mensagem += encodeMen
    }else if (letra === 'u'){
      encodeMen = 5
      mensagem += encodeMen
    }else {
      mensagem += letra
    }
  }
  return mensagem
}

function decode(string) {
  let decodeMen = ''
  let mensagem = ''

  for (let letra of string) {
    if ( letra == '1'){
      decodeMen = 'a'
      mensagem += decodeMen
    }else if (letra == '2'){
      decodeMen = 'e'
      mensagem += decodeMen
    }else if (letra == '3'){
      decodeMen = 'i'
      mensagem += decodeMen
    }else if (letra == '4'){
      decodeMen = 'o'
      mensagem += decodeMen
    }else if (letra == '5'){
      decodeMen = 'u'
      mensagem += decodeMen
    }else {
      mensagem += letra
    }
  }
  return mensagem
}

// Desafio 10
function techList(array,nome) {
  array = array.sort()
  if(array.length > 0 ){
    for (let key in array ){
      array[key] = {
        tech: array[key],
        name: nome
      }
    }
  }else{
    return "Vazio!"
  }
  return array
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
