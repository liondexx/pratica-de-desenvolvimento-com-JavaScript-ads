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
// Descritivo: Crie uma função `soma(a, b)` que retorne a soma de dois números.

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function soma(a, b) {
  return a + b;
}

rl.question("Digite o primeiro número: ", (num1) => {
  rl.question("Digite o segundo número: ", (num2) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    console.log(`${a} + ${b} = ${soma(a, b)}`);
    rl.close();
  });
});
