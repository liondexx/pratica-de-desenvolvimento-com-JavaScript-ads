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
// Descritivo:
// Descritivo: Crie um programa que verifique se um número é par ou ímpar
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um valor: ", (resposta) => {
  if (resposta % 2 === 0) {
    console.log("o numero digitado e par");
  } else {
    console.log("o numero digitado e impar");
  }
  // console.log(`Você digitou: ${resposta}`);
  rl.close();
});
