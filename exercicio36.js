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
Descritivo: 36. Use `.reduce()` para somar todos os elementos de um array.
****************************************************************************/

const precos = [10, 20, 30, 40];
const somaTotal = precos.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(somaTotal); 
// Resultado: 100