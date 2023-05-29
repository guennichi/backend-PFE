const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PaysSchema = new Schema({
    nom: {
        type: String,
    },
    langue: {
        type: String,
    },
    continent: {
        type: String,
    },
    couleur_drapeau: {
        type: String,
    },
    Religion: {
        type: String,
    },
    populisation: {
        type: Number,
    },
    taux_de_migration: {
        type: Number,
    },
    Locales: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Locale'
    }],



}, { timestamps: true, versionKey: false })


const PaysModel = mongoose.model('Pays', PaysSchema);
module.exports = PaysModel;