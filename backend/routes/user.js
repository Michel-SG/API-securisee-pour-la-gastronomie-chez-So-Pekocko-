const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const ExpressBrute = require('express-brute');//l'implémentation de ce package permet d'éviter les attaques par force brute
const store = new ExpressBrute.MemoryStore();
const bruteforce = new ExpressBrute(store);

//Implémentation des routeurs pour l'authentification de l'utilisateur
router.post('/signup', userCtrl.signup);
router.post('/login', bruteforce.prevent, userCtrl.login);

module.exports = router;