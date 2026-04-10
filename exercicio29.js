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
// Descritivo: Implemente uma função recursiva para calcular o fatorial.

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fatorialRecursivo(n) {
  if (n < 0) {
    return "Fatorial não é definido para números negativos";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fatorialRecursivo(n - 1);
}

rl.question("Digite um número para calcular o fatorial: ", (num) => {
  const numero = parseInt(num);
  const resultado = fatorialRecursivo(numero);
  console.log(`${numero}! = ${resultado}`);
  rl.close();
});
