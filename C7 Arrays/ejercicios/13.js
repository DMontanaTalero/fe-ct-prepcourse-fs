function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  return array.filter(
    (elemento) => typeof elemento === "number" && elemento % 2 === 0
  );
}

var arr = [1,2,3,4,5,6,7];


console.log(filtrarNumerosPares(arr))

module.exports = filtrarNumerosPares;


//filter() crea un nuevo arreglo con todos los elementos que pasen una prueba especificada en la función.