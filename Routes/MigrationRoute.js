const express = require('express');
const { getdata, findbyAge, findbyAnnee, findbyGenre, findbyNombre, adddata } = require('../Controllers/Migration');
const passport = require('passport');
const router = express.Router()



router.get('/migration', getdata)
router.post('/migration', adddata)
router.post('/migration/Age', findbyAge)
router.post('/migration/Annee', findbyAnnee)
router.post('/migration/Genre', findbyGenre)
router.post('/migration/Nombre', findbyNombre)

module.exports = router;
