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
// Descritivo: Escreva uma função que receba um número e retorne `true` se for primo, `false` caso contrário.

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ehPrimo(numero) {
  if (numero <= 1) return false;
  if (numero === 2) return true;
  if (numero % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(numero); i += 2) {
    if (numero % i === 0) return false;
  }
  return true;
}

rl.question("Digite um número para verificar se é primo: ", (num) => {
  const numero = parseInt(num);
  const resultado = ehPrimo(numero);
  console.log(`${numero} é primo? ${resultado}`);
  rl.close();
});
