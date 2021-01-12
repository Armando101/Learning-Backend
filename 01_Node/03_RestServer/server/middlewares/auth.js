const jwt = require('jsonwebtoken');
const { SEED } = require('../config/config');
// ================
// Verificar token
// ================

let verificaToken = (req, res, next) => {

  let token = req.get('token');
  jwt.verify(token, SEED, (err, decode) => {
    if(err) {
      return res.status(401).json({
        ok: false,
        err
      });
    }

    req.user = decode.user;
    next();
  });
  // Si no invocamos al next no va a realizar la función que pasamos como parámetro en la ruta

}

module.exports = {
  verificaToken
}