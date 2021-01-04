const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/usuario', (req, res) => {
  res.send('get Usuarios');
});

app.post('/usuario', (req, res) => {
  let body = req.body;
  res.json({
    body
  })
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

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
})