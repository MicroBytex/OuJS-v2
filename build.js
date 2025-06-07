const fs = require('fs');
const path = require('path');

// Crear el directorio dist si no existe
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copiar index.js a dist
fs.copyFileSync('index.js', path.join('dist', 'index.js'));
fs.copyFileSync('package.json', path.join('dist', 'package.json'));

console.log('Build completado');
