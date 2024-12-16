const prompt = require("prompt-sync")()

let lista = []

function addLista(){
    for(let i = 1; i <= 12; i++){
        let num = Number(prompt('Digite um numero para acrescentar na lista: '))
        lista.push(num)
    }

    console.log(lista)
    const result  = lista.filter(menorZero)

    console.log(result)
}

addLista()

function menorZero(value){
    if(value < 0 ){
        return value
    }
}