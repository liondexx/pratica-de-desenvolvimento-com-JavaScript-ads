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
// Descritivo: Receba um número de 1 a 7 e exiba o dia da semana correspondente (use switch).

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número de 1 a 7: ", (numero) => {
  numero = parseInt(numero);
  switch (numero) {
    case 1:
      console.log("Domingo");
      break;
    case 2:
      console.log("Segunda-feira");
      break;
    case 3:
      console.log("Terça-feira");
      break;
    case 4:
      console.log("Quarta-feira");
      break;
    case 5:
      console.log("Quinta-feira");
      break;
    case 6:
      console.log("Sexta-feira");
      break;
    case 7:
      console.log("Sábado");
      break;
    default:
      console.log("Número inválido");
  }
  rl.close();
});
