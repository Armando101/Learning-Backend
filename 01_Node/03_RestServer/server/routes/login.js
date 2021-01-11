const { SEED, EXPIRATION_TOKEN } = require('../config/config');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const app = express();

app.post('/login', (req, res) => {

  let body = req.body;
  Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    }

    if (!usuarioDB) {
       return res.status(400).json({
        ok: false,
        err: {
          message: 'Invalid user or password'
        }
      });
    }

    if(!bcrypt.compareSync(body.password, usuarioDB.password)) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'Invalid user or password'
        }
      });
    }

    let token = jwt.sign({
      user: usuarioDB
    }, SEED, {expiresIn: EXPIRATION_TOKEN});

    res.json({
      ok: true,
      user: usuarioDB,
      token
    });

  });


});


module.exports = app;