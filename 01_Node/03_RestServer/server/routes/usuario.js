const express = require('express');
const Usuario = require('../models/usuario');
const app = express();

app.get('/usuario', (req, res) => {
  res.send('get Usuarios');
});

app.post('/usuario', (req, res) => {
  let body = req.body;
  let usuario = new Usuario({
    name: body.name,
    email: body.email,
    password: body.password,
    role: body.role
  });

  usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        error: err.errors
      });
    }

    res.json({
      ok: true,
      usuario: usuarioDB
    })
  });
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

module.exports = app;