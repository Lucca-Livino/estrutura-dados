//  Para executar o código utilize  npx ts-node src/main.ts "Número que deseja testar", quando testar ira executar todas as funções,
//  caso queira executar uma específica você pode comentar as outras

const args = process.argv.slice(2);
const quantidade = parseInt(args[0]);


if (isNaN(quantidade) || quantidade <= 0) {
    console.log("Por favor, insira um número válido maior que zero.");
    process.exit(1); 
}

console.log(`\n----------------------- NÚMEROS ALEATÓRIOS -----------------------------\n`);

function gerarNumero(quantidade: number, min: number, max: number) {
    let numeros: number[] = [];

    for (let i = 0; i < quantidade; i++) {
        let intervalo = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.push(intervalo);
    }

    console.log(`Números gerados: ${numeros.join(", ")}`);
}


gerarNumero(quantidade, 0, 100);

console.log(`\n----------------------- MAIOR, MENOR e MÉDIA -----------------------------\n`);

function numeroAleatorio(quantidade: number) {
    let numeros: number[] = [];

    for (let i = 0; i < quantidade; i++) {
        let intervalo = Math.floor(Math.random() * 101);
        numeros.push(intervalo);
    }

    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);
    let media = numeros.reduce((acc, num) => acc + num, 0) / numeros.length;

    console.log(`Números gerados: ${numeros.join(", ")}`);
    console.log(`O maior número encontrado é: ${maior}`);
    console.log(`O menor número encontrado é: ${menor}`);
    console.log(`A média dos números é: ${media.toFixed(2)}`);
}


numeroAleatorio(quantidade);

console.log(`\n------------------------- PICO --------------------------------------\n`);

function pico(quantidade: number) {
    let numeros: number[] = [];
    let picos: number[] = [];

    for (let i = 0; i < quantidade; i++) {
        let intervalo = Math.floor(Math.random() * 101);
        numeros.push(intervalo);
    }

    for (let i = 0; i < numeros.length; i++) {
        if (
            (i === 0 && numeros[i] > numeros[i + 1]) || // Primeiro elemento
            (i === numeros.length - 1 && numeros[i] > numeros[i - 1]) || // Último elemento
            (i > 0 && i < numeros.length - 1 && numeros[i] > numeros[i - 1] && numeros[i] > numeros[i + 1]) // Meio da lista
        ) {
            picos.push(numeros[i]);
        }
    }

    console.log(`Números gerados: ${numeros.join(", ")}`);
    console.log(`Picos: ${picos.join(", ")}`);
}


pico(quantidade);
