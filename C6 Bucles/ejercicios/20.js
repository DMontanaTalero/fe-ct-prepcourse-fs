function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:

  var sum = 0;

  for (let i = 0; i <= n; i++) {
   sum = sum + i;

   if (sum > 100) {
      break;
    }
    
  }
  return sum;
}

console.log(sumarHastaNConBreak(2))
console.log(sumarHastaNConBreak(50))
console.log(sumarHastaNConBreak(500))

module.exports = sumarHastaNConBreak;
