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
// Descritivo: Calcule o fatorial de um número informado (ex: 5! = 5*4*3*2*1).

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número para calcular o fatorial: ", (numero) => {
  numero = parseInt(numero);
  let fatorial = 1;

  if (numero < 0) {
    console.log("Fatorial não é definido para números negativos");
  } else if (numero === 0 || numero === 1) {
    console.log(`${numero}! = 1`);
  } else {
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    console.log(`${numero}! = ${fatorial}`);
  }
  rl.close();
});
