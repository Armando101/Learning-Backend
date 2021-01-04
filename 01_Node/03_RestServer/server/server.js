const { PORT } = require('./config/config');
const express = require('express');
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

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
})