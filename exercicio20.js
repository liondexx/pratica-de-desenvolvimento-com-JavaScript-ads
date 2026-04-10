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
// Descritivo: Use um `do...while` para garantir que uma variável seja incrementada pelo menos uma vez antes da verificação.

let numero = 0;
console.log("Incrementando a variável usando do...while:");
do {
  console.log(`Número atual: ${numero}`);
  numero++;
} while (numero < 5);
console.log("Incrementação concluída!");
