const express = require('express');
const router = express.Router(); //création d'un routreur


const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

//Implémentation des routeurs
router.post('/', auth, multer, stuffCtrl.createSauce);  // route de création de l'objet sauce
router.put('/:id', auth, multer, stuffCtrl.modifySauce); // route de modification de l'objet et des informations sur l'objet
router.delete('/:id', auth, stuffCtrl.deleteSauce);  // route pour supprimer la sauce choisie
router.get('/:id', auth, stuffCtrl.getOneSauce);  // route pour afficher une sauce unique
router.get('/', auth, stuffCtrl.getAllSauces);  // route pour afficher toutes les sauces de la base MongoDB
router.post('/:id/like', auth, stuffCtrl.likeOrDislike); // route pour la mise à jour des likes et dislikes


module.exports = router;