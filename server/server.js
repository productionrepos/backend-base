const express = require('express');
const colors = require('colors');
const cors = require('cors');
var bodyParser = require('body-parser')
const { sequelize } = require('../database/config');
var multer = require('multer');
var upload = multer();

console.log(new Date().toLocaleString())
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.pathsRoutes = {
            usuario: '/api/usuario'
        }
        //this.connectDB();
        this.middlewares();
        this.routes();
    }

    async connectDB() {
        sequelize
        .authenticate()
        .then(() => {
            console.log(colors.green(`Connection database: ${sequelize.getDatabaseName().toUpperCase()}`));
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(bodyParser.json())
    }

    routes() {
        this.app.use(this.pathsRoutes.usuario, require('../routes/usuarios.route'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(colors.green('Servidor corriendo en puerto', this.port));
        });
    }
}
module.exports = Server;