
const express = require('express');


const passport = require('passport');
const { getAllresponsable, getresponsablebyid, updateresponsable, deleteResponsable, addresponsable } = require('../Controllers/ResponsableController');

const router = express.Router()

router.post('/responsable', addresponsable);
router.get('/responsable', getAllresponsable);
router.get('/responsable/:id', getresponsablebyid)
router.put('/responsable/:id', updateresponsable)
router.delete('/responsable/:id', deleteResponsable)



module.exports = router