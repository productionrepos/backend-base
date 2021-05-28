const { sequelize } = require('../database/config');
const {UsuarioModel} = require('../models/usuarios.model');
const { Op } = require("sequelize");


const saveUser = async (data) => {
    
    const saveRegister = new UsuarioModel({
      nombre: data.nombre,
      edad: data.edad,
      direccion: data.direccion,
      password: data.password
    });
    try {
        await saveRegister.save()
    } catch (error) {
        throw new Error(error)
    }

}

const updateUser = async (id) =>{
    try {
       const update =  await UsuarioModel.update({
            'nombre' : 'otro nombre'
        }, { where: { id: id } })
        return {
            status: 'ok',
            error: false,
            data : update
        }
    } catch (error) {
        return {
            error: true,
            message: error
        }
    }
        
}





module.exports = { 
    saveUser,
    updateUser
};