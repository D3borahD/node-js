const mongoose = require('mongoose');

// La méthode «Schéma» de mongoose permet de créer une collection lié à la BDD NOSQL (MongoDB)
const thingSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
    price: { type: Number, required: true },
});
// La méthode «Model» permet d’utiliser ce schéma en tant que modèle objet (structure de données)
module.exports = mongoose.model('Thing', thingSchema);