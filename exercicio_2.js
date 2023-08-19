/* O código a seguir representa uma função que calcula 
o fatorial de um número usando uma abordagem recursiva. 
No entanto, o código está mal escrito e não segue as boas práticas de Clean Code.

function fatorial(n) {
  if (n === 0) return 1;
  else return n * fatorial(n - 1);
}

// Teste a função
console.log(fatorial(5)); // Saída esperada: 120
console.log(fatorial(0)); // Saída esperada: 1
console.log(fatorial(10)); // Saída esperada: 3628800

*/

function fatorial(valor) {
    let fator = 0
    valor === 0 ? fator = 1 : fator = valor * fatorial(valor -1)
    return fator
}
  
// Teste a função
console.log(fatorial(5)); // Saída esperada: 120
console.log(fatorial(0)); // Saída esperada: 1
console.log(fatorial(3)); // Saída esperada: 6
console.log(fatorial(10)); // Saída esperada: 3628800