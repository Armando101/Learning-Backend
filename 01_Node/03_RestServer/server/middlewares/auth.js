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

// ================
// Verificar admin rol
// ================
let verificaAdminRole = (req, res, next) => {
  let user = req.user;
  if (user.role === 'ADMIN_ROLE') {
    next();
  } else {
    return res.status(401).json({
      ok: false,
      err: { message: 'Not Allowed'}
    });
  }
}


module.exports = {
  verificaToken,
  verificaAdminRole
}