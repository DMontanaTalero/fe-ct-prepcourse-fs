function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  if (Math.abs(num) > 99 && Math.abs(num) < 1000) {
    return true;
  } else {
    return false;
  }
}

console.log(tieneTresDigitos(1));
console.log(tieneTresDigitos(12));
console.log(tieneTresDigitos(123));

module.exports = tieneTresDigitos;
