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
Descritivo: 39. Ordene um array de números em ordem crescente.
****************************************************************************/

const desordenados = [45, 12, 8, 30, 1];
const ordenados = desordenados.sort((a, b) => a - b); 

console.log(ordenados); 
// Resultado: [1, 8, 12, 30, 45]