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
// Descritivo: Verifique se três lados informados podem formar um triângulo e, se sim, classifique-o (Equilátero, Isósceles, Escaleno).

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o primeiro lado: ", (lado1) => {
  rl.question("Digite o segundo lado: ", (lado2) => {
    rl.question("Digite o terceiro lado: ", (lado3) => {
      lado1 = parseFloat(lado1);
      lado2 = parseFloat(lado2);
      lado3 = parseFloat(lado3);

      if (
        lado1 + lado2 > lado3 &&
        lado1 + lado3 > lado2 &&
        lado2 + lado3 > lado1
      ) {
        if (lado1 === lado2 && lado2 === lado3) {
          console.log("É um triângulo Equilátero");
        } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
          console.log("É um triângulo Isósceles");
        } else {
          console.log("É um triângulo Escaleno");
        }
      } else {
        console.log("Não é possível formar um triângulo com esses lados");
      }
      rl.close();
    });
  });
});
