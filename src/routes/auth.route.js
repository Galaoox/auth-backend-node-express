const {login, register} = require('../controllers/auth.controller');

const router = require('express').Router();

// crear usuario
router.post('/login', login);
// iniciar sesion
router.post('/register', register);


module.exports = router;