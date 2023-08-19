/*O código a seguir representa uma função que verifica 
se um número é primo. No entanto, o código está mal escrito 
e não segue as boas práticas de Clean Code.

function P(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  // Teste a função
  console.log(P(7)); // Saída esperada: true
  console.log(P(12)); // Saída esperada: false*/

  /* Segue abaixo o código refatorado*/

  function isPrimeNumber(number) {
    let isPrime = true
    
    if (number >= 2) {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
        }
      }
    }else{
      isPrime = false
    }
    
    return isPrime
  }
    
  // Teste a função
  console.log(isPrimeNumber(7)); // Saída esperada: true
  console.log(isPrimeNumber(12)); // Saída esperada: false