export class deque<T>{
    inicio: number;
    fim: number;
    arr:(T | null)[];
    tamanho: number;

    constructor(capacidade:number){
        this.inicio = 0;
    }

}