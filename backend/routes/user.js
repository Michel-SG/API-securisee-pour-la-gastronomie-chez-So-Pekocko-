const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

//Implémentation des routeurs pour l'authentification de l'utilisateur
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;