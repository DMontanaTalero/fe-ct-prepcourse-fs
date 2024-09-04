function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:

  return array.push(elemento);

}

var arr = [1,2,2,2,2,2];
console.log(agregarItemAlFinalDelArray(arr, 4))
console.log(arr)

module.exports = agregarItemAlFinalDelArray;
