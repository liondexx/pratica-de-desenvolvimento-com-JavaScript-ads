/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B
Componentes:
 26008618-2 - Erick Lass da Cruz
 25362525-2 - Lucas kauê Oliveira da Costa
 25355772-2 - Anthony Luiz da Silva
 25363474-2 - Beatriz Feldmman Souza Pires 
 25291240-2 - Lion Patrocinio Cunha Costa
Data: 05 de Março de 2026
Descritivo: 32. Dado um array de nomes, transforme-o em uma string separada por vírgulas.
****************************************************************************/

const nomes = ["Ana", "Pedro", "Roberto", "Lauana"];
const stringNomes = nomes.join(', ');

console.log(stringNomes); 
// Resultado: "Ana, Pedro, Roberto, Lauana"