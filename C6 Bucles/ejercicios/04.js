function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:

  if (edad >= 18) {
    return "Allowed";
  }else{
    return "Not allowed";
  }
}

console.log(mayoriaDeEdad(15))
console.log(mayoriaDeEdad(18))
console.log(mayoriaDeEdad(23))

module.exports = mayoriaDeEdad;
