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
Descritivo: 35. Use `.find()` para encontrar o primeiro número maior que 10 em um array.
****************************************************************************/

const listaNumeros = [4, 8, 12, 15, 9];
const maiorQueDez = listaNumeros.find(num => num > 10);

console.log(maiorQueDez); 
// Resultado: 12