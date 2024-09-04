function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  return array.filter(
    (elemento) => typeof elemento === "number" && elemento > 10
  );
}

var arr = [1, 2, 3, 4, 5, 6, 7,11,12];
contarElementosMayoresA10(arr);
console.log(arr.length);

module.exports = contarElementosMayoresA10;
