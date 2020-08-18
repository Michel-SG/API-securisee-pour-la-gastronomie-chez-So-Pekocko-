const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const path = require('path');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

//Connexion à MongoDB
mongoose.connect('mongodb+srv://sadeu:Sri19922@cluster0.xcdgv.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

//Débloquer certains systèmes de sécurité CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//Formater les données arrivant via le verbe POST de manière facilement exploitable
app.use(bodyParser.json());

//les routes pour la gestion de toute les ressources de l'API
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;