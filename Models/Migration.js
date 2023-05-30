const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MigrationSchema = new Schema({
    Nationality: {
        type: String,
    },
    NumberOfMigrants: {
        type: String,
    },
    Migrants: {
        type: String,
    },
    fichier: Buffer

}, {
    timestamps: true, versionKey: false
},);

const migrationModel = mongoose.model('migration', MigrationSchema);
module.exports = migrationModel;