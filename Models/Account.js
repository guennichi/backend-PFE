const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AccountSchema = new Schema({
    Nom: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Prenom: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Date_Naissence: {
        type: Date,
        required: [true, 'Ce champs est obligatoire'],
    },
    Lieu: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Email: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Password: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    num_passport: {
        type: String,
    },
    date_affectation: {
        type: Date,
    },
    Pays: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pays'
    },
    Locale: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Locale'
    },
    Role: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    }
}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Accounts', AccountSchema)