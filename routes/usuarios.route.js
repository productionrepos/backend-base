const { Router } = require('express');


const { crearUsuario, getUsuarios, getUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/usuarios.controller');


const router = Router();

router.post('/usuario', crearUsuario)
router.get('/usuario', getUsuarios)
router.get('/usuario/:id', getUsuario)
router.put('/usuario/:id', actualizarUsuario)
router.delete('/usuario/:id', eliminarUsuario)


module.exports = router;