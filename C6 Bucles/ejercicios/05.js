function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:

  if (valor === true) {
    return "Soy verdadero";
  }else {
    return "Soy falso";
  }
}

console.log(esVerdadero(true));
console.log(esVerdadero(false));
console.log(esVerdadero(1));
console.log(esVerdadero("asfa"));

module.exports = esVerdadero;
