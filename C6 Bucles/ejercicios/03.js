function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:

  if (x > y) {
    return x;
  } else if(y > x){
    return y;
  }else{
    return x;
  }
}

console.log(obtenerMayor(1,2))
console.log(obtenerMayor(10,-20))
console.log(obtenerMayor(1,1))

module.exports = obtenerMayor;
