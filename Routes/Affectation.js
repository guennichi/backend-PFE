const express = require('express');
const router = express.Router()
const { affecteRespo, dessaffecteRespo } = require('../Controllers/AffectationController');
const passport = require('passport');



router.put('/affectation/:idlocal/:idRespo', affecteRespo)
router.put('/dessaffectation/:idlocal/:idRespo', dessaffecteRespo)


module.exports = router


