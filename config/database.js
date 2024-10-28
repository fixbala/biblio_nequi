// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'  // Ruta del archivo de base de datos
});

module.exports = sequelize;
  