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
    Pays: {
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

    Role: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
        default: 'Admin'
    }
}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Accounts', AccountSchema)