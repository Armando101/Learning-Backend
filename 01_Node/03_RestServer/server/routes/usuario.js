const express = require('express');
const Usuario = require('../models/usuario');
const app = express();
const bcrypt = require('bcrypt');
const _ = require('underscore');

app.get('/usuario', (req, res) => {
  let desde = req.query.desde || 0;
  desde = Number(desde);

  let limite = req.query.limite || 5;
  limite = Number(limite);

  Usuario.find({}, 'name email role img state')
    .skip(desde)
    .limit(limite)
    .exec((err, usuariosDB) => {
      if (err) {
      return res.status(400).json({
        ok: false,
        error: err.errors
      });
    }

    Usuario.countDocuments({}, (err, count) => {
      res.json({
        ok: true,
        usuario: usuariosDB,
        count
      });
    });

  })
});

app.post('/usuario', (req, res) => {
  let body = req.body;
  let usuario = new Usuario({
    name: body.name,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
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
  let body = _.pick(req.body, ['name', 'email', 'img', 'role', 'state']);
  
  Usuario.findByIdAndUpdate(id, body, {new: true, runValidators: true}, (err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        error: err
      });
    }
    res.json({
      ok: true,
      usuario: usuarioDB
    })
  });
});

app.delete('/usuario/:id', (req, res) => {
  let id = req.params.id;
  Usuario.findByIdAndRemove(id, (err, userDeleted) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        error: err
      });
    }

    if (!userDeleted) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'User not found'
        } 
      })
    }

    res.json({
      ok: true,
      userDeleted
    });
  });
});

module.exports = app;