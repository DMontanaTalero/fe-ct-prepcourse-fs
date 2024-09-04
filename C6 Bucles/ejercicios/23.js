function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  if (numero % numero === 0 && numero % 1 === 0) {
    return true;
  } else {
    return false;
  }

}

console.log(esNumeroPrimo(11))
console.log(esNumeroPrimo(13))
console.log(esNumeroPrimo(15))

module.exports = esNumeroPrimo;
