function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   var indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];

}

var arr = [1,2,3,4,5,6,7];
console.log(obtenerElementoAleatorio(arr));

module.exports = obtenerElementoAleatorio;
