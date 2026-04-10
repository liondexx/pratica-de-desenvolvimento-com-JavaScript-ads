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
// Descritivo: Verifique se um caractere informado é uma vogal ou consoante.
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um caractere: ", (caractere) => {
  const vogais = ["a", "e", "i", "o", "u"];
  if (vogais.includes(caractere.toLowerCase())) {
    console.log(`${caractere} é uma vogal`);
  } else {
    console.log(`${caractere} é uma consoante`);
  }
  rl.close();
});
