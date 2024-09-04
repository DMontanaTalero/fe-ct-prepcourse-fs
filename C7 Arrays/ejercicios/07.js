function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  return array.sort((a, b) => a - b);

}
var arr = [1,2,3,4,5,6,7];
arr.reverse();
console.log(arr)
ordenarArray(arr)
console.log(arr)
module.exports = ordenarArray;
