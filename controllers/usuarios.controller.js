const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const UsuarioModel = require('../models/usuarios.model');
const {saveUser, updateUser } = require('../services/usuarios.service')


const getUsuarios = async (req = request, res = response) => {
    try {
        const usuarios = await UsuarioModel.UsuarioModel.findAll(
            { 
                attributes: 
                    ['nombre','edad', 'direccion']
            });
        res.json({ usuarios });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
    }
}

const getUsuario = async (req = request, res = response) => {
    let id = req.params.id
    console.log(id)
    try {
        await UsuarioModel
            .UsuarioModel.findOne({
                options: {
                    attributes: ['nombre', 'edad', 'direccion']
                },
                where: { id: id }
            }).then(function (user, err) {
                return res.json({ user });
            });
    } catch (error) {
        return res.status(500).json({ error });
    }
}

const crearUsuario = async (req = request, res = response) => {   
     try {
         console.log(req.body)
         const salt = bcryptjs.genSaltSync();
         req.body.password = bcryptjs.hashSync(req.body.password, salt);
         await saveUser(req.body)
        return res.json({'status': 'ok'});
    } catch (error) {
        res.status(500).json({ error });
    }
}

const eliminarUsuario = (req = request, res = response) => {
    let id = req.params.id;
    UsuarioModel.UsuarioModel.destroy({ where: { 'id': id } })
        .then((user) => {
            res.json({ msg: 'Usuario eliminado correctamente', user });
        }).catch((error) => {
            res.status(404).json({ error });
        });
}

const actualizarUsuario = async (req = request, res = response) => {
    let id = req.params.id;
    let newName = req.body.nombre;
    try {
        const result = await updateUser(id, newName)
        console.log(result)
        res.json({ msg: 'usuario actualizado correctamente', result });
    } catch (error) {
        console.log(error)
        res.status(404).json({ error });
    }
}


module.exports = {
    crearUsuario,
    getUsuarios,
    getUsuario,
    actualizarUsuario,
    eliminarUsuario
}