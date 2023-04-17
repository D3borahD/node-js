const express = require('express');
const mongoose = require("mongoose");
const Thing = require('./model/thing');
//const stuffRoutes = require('./route/stuff');

const app = express();
const stuffRoutes = require("./route/stuff.js");


mongoose.connect('mongodb://localhost:27017/test',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// fonction appelé middleware
/*app.use((req, res, next) => {
    console.log('Requête reçue !');
    // permet de passer à l'exécution du middleware suivant'
    next()
});

app.use((req, res, next) => {
    res.status((201));
    next()
});


app.use((req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
    next()
});

app.use((req, res, next) => {
    console.log('Reponse envoyé avec succès !');
});*/

//Express prend alors toutes les requetes avec le content-type à la valeur application/json
app.use(express.json());



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use("/api/stuff", stuffRoutes);



/*app.get('/api/stuff', (req, res, next) => {
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({error}))
});

app.get('/api/stuff/:id', (req, res, next) => {
    Thing.findOne({_id: req.params.id})
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({error}))
});

app.put('/api/stuff/:id', (req, res, next) => {
    Thing.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
        .then(() => res.status(200).json({ message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({error}))
});
app.delete('/api/stuff/:id', (req, res, next) => {
    Thing.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
        .catch(error => res.status(400).json({error}))
});

// placer les routes POST avant use ou get
// ou utiliser get plutôt que use
app.post('/api/stuff', (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
        ...req.body
    });
    thing.save()
        .then(()=> res.status(201).json({message: 'objet enregistré'}))
        .catch(error => res.status(400).json({error}))
})*/

module.exports = app;


