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
// Descritivo: Crie uma função que converta graus Celsius para Fahrenheit.

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function celsiusParaFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

rl.question("Digite a temperatura em Celsius: ", (temp) => {
  const celsius = parseFloat(temp);
  const fahrenheit = celsiusParaFahrenheit(celsius);
  console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
  rl.close();
});
