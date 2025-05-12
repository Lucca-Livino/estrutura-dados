export class deque<T>{
    inicio: number;
    fim: number;
    arr:(T | undefined)[];
    tamanho: number;

    constructor(capacidade:number){
        this.inicio = 0;
        this.fim = 0
        this.arr = new Array(capacidade+1).fill(undefined);

    }

        private resize() {
        // Redimensiona o array para o dobro do tamanho
        // Adiciona undefined até o novo tamanho (Aproveitando o array que já existe)

        let oldlength = this.arr.length;
        let newLength = this.arr.length * 2;
        for(let i = oldlength; i < newLength; i++) {
            this.arr.push(undefined);
        }

        if(this.fim < this.inicio) {
            // Se o fim estiver antes do início, significa que a fila está "quebrada"
            // Tem que juntar denovo [2345...1] -> [.......12345...]
            for(let i = 0; i < this.fim; i++) {
                this.arr[oldlength + i] = this.arr[i];
                this.arr[i] = undefined;
            }
            this.fim = oldlength + this.fim;
        }
    }

    private incrementar(cont: number) {
        return (cont + 1) % this.arr.length;
    }


}