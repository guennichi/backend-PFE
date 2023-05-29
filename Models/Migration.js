const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MigrationSchema = new Schema({
    Annee: {
        type: Number,
    },
    Genre: {
        type: String,
    },
    Age: {
        type: Number,
    },
    Nombre: {
        type: String,
    },

}, {
    timestamps: true
},);

const migrationModel = mongoose.model('migration', MigrationSchema);
module.exports = migrationModel;