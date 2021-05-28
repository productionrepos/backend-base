const { sequelize } = require('../database/config');
const Sequelize = require('Sequelize');

const UsuarioModel = sequelize.define('usuarios', {
    nombre: Sequelize.STRING(50),
    edad: Sequelize.NUMBER(50),
    direccion: Sequelize.STRING(50),
    password: Sequelize.STRING(100),
}, { timestamps: false, });
// UserModel.sync({ force: true });

module.exports = { UsuarioModel }