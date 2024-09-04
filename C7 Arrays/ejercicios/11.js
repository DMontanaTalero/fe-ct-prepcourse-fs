function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

for (let i = 0; i < array.length; i++) {
  array[i] = array[i] * 2;
  
}
return array;

}

var arr = [1,2,3,4,5,6,7];
duplicarElementos(arr)
console.log(arr)

module.exports = duplicarElementos;
