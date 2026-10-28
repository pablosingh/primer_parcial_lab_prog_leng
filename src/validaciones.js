

const validacionesOBJ = {
  marca: auto => auto.marca.length >= 2,
  anio: auto => auto.anio > 1990 && auto.anio < 2026,
  precio: auto => auto.precio > 0,
  extras: auto => auto.extras.length >= 1
}

const validaciones = Object.entries(validacionesOBJ);

module.exports = validaciones;