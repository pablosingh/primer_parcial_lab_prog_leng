
const makeFiltro = [
  {
    name: "Igual",
    operator: "==",
    fn: (attribute, value) => auto => auto[attribute] == value
  },
  {
    name: "Distinto",
    operator: "!=",
    fn: (attribute, value) => auto => auto[attribute] != value
  },
  {
    name: "Mayor",
    operator: ">",
    fn: (attribute, value) => auto => auto[attribute] > value
  },
  {
    name: "Menor",
    operator: "<",
    fn: (attribute, value) => auto => auto[attribute] < value
  },
  {
    name: "Mayor Igual",
    operator: ">=",
    fn: (attribute, value) => auto => auto[attribute] >= value
  },
  {
    name: "Menor Igual",
    operator: "<=",
    fn: (attribute, value) => auto => auto[attribute] <= value
  },
  {
    name: "Includes",
    operator: "includes",
    fn: (attribute, value) => auto => auto[attribute].includes(value)
  },
]

module.exports = makeFiltro;