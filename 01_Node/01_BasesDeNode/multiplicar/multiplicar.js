// requireds
const fs = require('fs');

const listarTabla = (base, limite=10) => {
  for (let i = 0; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base*i}`);
  }
}

const crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject('El valor introducido no es un número');
    }
    let data = '';
    
    for (let i = 0; i <= limite; i++) {
      data += `${base} * ${i} = ${base*i}\n`;
    }
    
    fs.writeFile(`tabla-${base}.txt`, data, (err)=> {
      if (err) reject(err);
      else
        resolve(`tabla-${base}.txt`);
    });
  });
}

module.exports = {
  crearArchivo,
  listarTabla
}