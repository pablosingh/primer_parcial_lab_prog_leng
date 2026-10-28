const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();
app.use(express.json());

const makeFiltro = require('./filtros/filtros.js');
const validaciones = require('./validaciones.js');

const vehiculos = [];

app.post( '/vehiculos/filtros', (req, res) => {
  const { datos, condiciones } = req.body;
  
  const filtros = condiciones.map(condicion =>
    makeFiltro.find(f => f.operator === condicion.operator).fn(condicion.attribute, condicion.value)
  );

  const autosFiltrados = datos.filter( auto => filtros.every( filtro => filtro(auto)));
  console.log(autosFiltrados);
  res.status(200).json(autosFiltrados);
});

app.post( '/vehiculos', (req, res) => {
  let auto = req.body;
  const validado = validaciones.every( ([nombre, fn]) => fn(auto))
  if (validado){
    auto = {
      id: vehiculos.length +1 ,
      ...auto
    }
    vehiculos.push(auto);
    res.status(200).json(auto); 
  }else
    res.status(400).json({mensaje: "Auto no cumple"})
});

app.get( '/vehiculos/:id', (req, res) => {
  const id = Number(req.params.id);
  const auto = vehiculos.find( v => v.id == id);
  if (auto){
    res.status(200).json(auto);
  }else
    res.status(400).json({mensaje: "Auto no Encontrado"})
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
})