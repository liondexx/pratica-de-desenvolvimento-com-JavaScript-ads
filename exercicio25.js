// Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
// Disciplina: Programação Front-End
// Professor: José Carlos Flores
// Turma: ADS3B
// Componentes:
// 25362525-2 - Lucas kauê Oliveira da costa,
// 25355772-2 - Anthony Luiz da Silva,
// 25363474-2 - Beatriz Feldmman Souza Pires,
// 25291240-2 - Lion Patrocinio Cunha Costa,
// 26008618-2 - Erick Lass da Cruz,
// Data: 09 de Abril de 2026
// Descritivo: Faça uma função que receba um array e retorne a soma de seus elementos.

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function somaArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}

rl.question(
  "Digite os números separados por vírgula (ex: 1,2,3,4,5): ",
  (entrada) => {
    const numeros = entrada.split(",").map((num) => parseFloat(num.trim()));
    const soma = somaArray(numeros);
    console.log(`Array: [${numeros}]`);
    console.log(`Soma dos elementos: ${soma}`);
    rl.close();
  },
);
