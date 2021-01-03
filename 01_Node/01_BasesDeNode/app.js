const argv = require('yargs')
.command('listar', 'Imprime en consola la tabla de multiplicar', {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10
  }
})
.command('crear', 'Crea un archivo con la tabla de multiplicar', {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10
  }
})
.argv;
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
let command = argv._[0];

switch(command) {
  case 'listar':
    listarTabla(argv.base, argv.limite)
    break;
  
  case 'crear':
    crearArchivo(argv.base,  argv.limite)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(err => console.error(err));
    break;
  
  default:
    console.log('No reconocido');
    break;  
}


