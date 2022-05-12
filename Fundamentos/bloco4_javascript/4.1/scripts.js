//const myName = "Ana Beatriz"
//const birthCity = "Rio de Janeiro"
//let birthYear = 1996

//console.log(myName)
//console.log(birthCity)
//console.log(birthYear)

//const base = 5
//let height = 8
//const area = base*height
//const perimeter = (2*5)+(8*2)

//console.log(area)
//console.log(perimeter)

//const notaDesafio = 70

//if (notaDesafio >= 80){
    //console.log("Parabens, voce foi aprovado")
//}else if (notaDesafio>=60 && notaDesafio< 80 ){
    //console.log("Voce está na lista de espera")
//}else {
   // console.log("Voce foi reprovado")
//}

const currentHour = 18
let mensagem = " "

if (currentHour>= 22){
    mensagem = "Não deveriamos comer nada, é hora de dormir"
    console.log(mensagem)
}
else if(currentHour>=18 && currentHour<22){
    mensagem = "Rango da noite,vamos jantar :D"
    console.log(mensagem)
}
else if (currentHour>=14 && currentHour<18){
    mensagem = "Vamos fazer um bolo pro café da tarde"
    console.log(mensagem)
}
else if (currentHour>=11 && currentHour <14){
    mensagem = "Hora do almoco "
}
else if (currentHour>=4 && currentHour<11){
    mensagem = "Hmmm, cheiro de café recém passado"
    console.log(mensagem)
}
else {
   mensagem= "dormindo  zzzzzzZZZZ"
   console.log(mensagem)
}