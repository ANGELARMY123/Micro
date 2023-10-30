const mysql = require('mysql2');

const dbConfig = {
  host: '127.0.0.1', // Reemplaza con la dirección de tu servidor MySQL
  user: 'root', // Reemplaza con tu nombre de usuario de MySQL
  password: 'Golden7*1', // Reemplaza con tu contraseña de MySQL
  database: 'basemicro', // Reemplaza con el nombre de tu base de datos
};

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
  } else {
    console.log('Conexión exitosa a MySQL');
  }
});

module.exports = db;
