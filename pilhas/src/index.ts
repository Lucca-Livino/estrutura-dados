import {Pilha} from "./pilha"


const pilha = new Pilha<number>()

pilha.push(10)
pilha.push(20)
console.log(pilha.peek()) //20
pilha.pop()
console.log(pilha.peek()) //10
pilha.pop()
console.log(pilha.isEmpty())

