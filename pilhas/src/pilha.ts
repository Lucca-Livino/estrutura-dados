//T: elemento genérico para permitir que a pilha armazene elementos de qualquer tipo
export class Pilha<T> {
    //Criando um array de nome items
    private items: T[] = []

    //Criando a função push que passara o item "element" que é do tipo "T" e nào irá retornar nada (void)
    push(element: T): void {
        this.items.push(element)
    }
    //Adicionando um elemento no fim da pilha

    //Criando a função pop que retorna ou o  T ou undefined
    pop(): T | undefined {
        return this.items.pop()
    }
    //Remove o ultimo item da pilha

    //Criando a função peek quue retorna ou T ou undefined, utiliza-se o -1 porque começamos a contar os elemntos pelo array com o número 0
    peek(): T | undefined {
        return this.items[this.items.length - 1]
    }
    //Retorna o ultimo número adicionado sem remover

    //Criando a função isEmpty que usa o tipo boolean, se o length do array for igual a zero retorna true
    isEmpty(): boolean {
        return this.items.length === 0
    }
    //Retorna se o array está vazio
}