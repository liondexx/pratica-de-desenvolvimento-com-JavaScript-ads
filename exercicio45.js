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
// Descritivo: Use .forEach() com Arrow Function para imprimir cada item de um array.

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite os itens separados por vírgula: ', (entrada) => {
  const itens = entrada.split(',').map((item) => item.trim());
  console.log('Itens:');
  itens.forEach((item) => console.log(item));
  rl.close();
});
