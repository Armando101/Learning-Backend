const { PORT } = require('./config/config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/usuario', (req, res) => {
  res.send('get Usuarios');
});

app.post('/usuario', (req, res) => {
  let body = req.body;

  if (body.name) {
    res.json({
      persona: body
    });
  } else {
    res.status(400).json({
      ok: false,
      message: 'Name is necessary'
    });
  }
});

app.put('/usuario/:id', (req, res) => {
  let id = req.params.id;
  res.json({
    id
  });
});

app.delete('/usuario', (req, res) => {
  res.send('delete Usuarios');
});


mongoose.connect('mongodb://localhost:27017/cafe', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, (err) => {
  if (err) {
    console.log(err.message);
}
console.log('Base de Datos online');
});

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
})