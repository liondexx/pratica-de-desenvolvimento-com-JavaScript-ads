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
// Descritivo: Crie um programa que aplique um desconto de 10% se a compra for acima de R$ 100,00.

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o valor da compra: R$ ", (valor) => {
  valor = parseFloat(valor);
  let valorFinal;

  if (valor > 100) {
    valorFinal = valor * 0.9;
    console.log(`Valor original: R$ ${valor.toFixed(2)}`);
    console.log(`Desconto de 10%: R$ ${(valor * 0.1).toFixed(2)}`);
    console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
  } else {
    console.log(`Valor da compra: R$ ${valor.toFixed(2)}`);
    console.log("Sem desconto (compra menor que R$ 100)");
  }
  rl.close();
});
