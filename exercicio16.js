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
// Descritivo: Crie um loop que pare (`break`) quando encontrar o número 7 em uma contagem de 1 a 10.

console.log("Contagem de 1 a 10, parando ao encontrar o número 7:");
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    console.log("Número 7 encontrado! Parando o loop.");
    break;
  }
  console.log(i);
}
