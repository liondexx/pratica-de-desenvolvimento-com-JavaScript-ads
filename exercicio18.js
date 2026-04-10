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
// Descritivo: Gere os primeiros 10 números da sequência de Fibonacci.

const fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

console.log("Primeiros 10 números da sequência de Fibonacci:");
console.log(fibonacci[0]);
console.log(fibonacci[1]);

for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  console.log(fibonacci[i]);
}
