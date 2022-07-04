const { Router } = require('express');
const { controllerUserDelete, controllerUserPOST, controllerUserPUT, controllerUserGET, controllerUserGetById } = require('../controllers/user');
const router = Router();
const { check } = require('express-validator');

router.get('/users', controllerUserGET);

router.get('/user/:id', controllerUserGetById);

// El primer argumento es la ruta
// El segundo argumento son los middlewares
// El tercer argumento es el controlador
router.post('/user', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty().trim().escape(),
    check('correo', 'El correo no es valido').isEmail().normalizeEmail(),
    check('contraseña', 'La contraseña es obligatoria y debe contener mas de 8 letras').isLength({ min: 8 }).trim().escape(),
    check('rol', 'El rol es invalido').isIn(['Admin', 'Usuario']).trim().escape()
], controllerUserPOST);

router.put('/user/:id', controllerUserPUT);

router.delete('/user/:id', controllerUserDelete);

module.exports = router;