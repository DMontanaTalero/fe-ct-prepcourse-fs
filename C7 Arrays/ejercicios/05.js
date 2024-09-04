function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:

  return array.unshift(elemento);

}

var arr = [1,2,3,4,5,6,7];
console.log(agregarItemAlComienzoDelArray(arr, 0))
console.log(arr)

module.exports = agregarItemAlComienzoDelArray;
