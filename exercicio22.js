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
// Descritivo: Crie uma função `areaRetangulo(base, altura)` que retorne a área.

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function areaRetangulo(base, altura) {
  return base * altura;
}

rl.question("Digite a base do retângulo: ", (base) => {
  rl.question("Digite a altura do retângulo: ", (altura) => {
    const b = parseFloat(base);
    const h = parseFloat(altura);
    const area = areaRetangulo(b, h);
    console.log(`Área do retângulo com base ${b} e altura ${h}: ${area}`);
    rl.close();
  });
});
