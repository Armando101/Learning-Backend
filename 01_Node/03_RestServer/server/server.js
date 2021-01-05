const { PORT } = require('./config/config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(require('./routes/usuario'));


mongoose.connect('mongodb://localhost:27017/cafe', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, (err) => {
  if (err) {
   throw err;
}
console.log('Base de Datos online');
});

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
})