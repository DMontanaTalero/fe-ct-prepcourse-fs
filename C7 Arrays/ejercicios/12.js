function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map((elemento) => {
    if (typeof elemento === "string") {
      return elemento.toUpperCase();
    }
    return elemento;
  });
}

var arr = ['hola', 'adiós', 'javascript', 'no'];
console.log(convertirStringAMayusculas(arr))

module.exports = convertirStringAMayusculas;

//map() recorre cada elemento del arreglo y aplica una función a cada uno de ellos.
//Si el elemento es un string (typeof elemento === 'string'), lo convierte a mayúsculas usando toUpperCase().
