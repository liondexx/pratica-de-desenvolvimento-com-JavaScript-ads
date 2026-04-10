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
// Descritivo: Escreva uma função que receba dois números e retorne o maior deles.
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o primeiro numero: ", (num1) => {
  rl.question("Digite o segundo numero: ", (num2) => {
    if (num1 > num2) {
      console.log(`O maior numero e ${num1}`);
    } else if (num2 > num1) {
      console.log(`O maior numero e ${num2}`);
    } else {
      console.log("Os numeros sao iguais");
    }
    rl.close();
  });
});
