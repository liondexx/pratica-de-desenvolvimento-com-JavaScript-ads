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
// Descritivo: Verifique se um ano é bissexto (divisível por 4, mas não por 100, exceto se for divisível por 400).

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um ano: ", (ano) => {
  ano = parseInt(ano);
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(`${ano} é um ano bissexto`);
  } else {
    console.log(`${ano} não é um ano bissexto`);
  }
  rl.close();
});
