
const express = require('express');


const passport = require('passport');
const { getAllresponsable, getresponsablebyid, updateresponsable, deleteResponsable, addresponsable, changeStatus } = require('../Controllers/ResponsableController');

const router = express.Router()

router.post('/responsable', addresponsable);
router.get('/responsable', getAllresponsable);
router.get('/responsable/:id', getresponsablebyid)
router.put('/responsable/:id', updateresponsable)
router.delete('/responsable/:id', deleteResponsable)
router.put('/Status/:id', changeStatus)



module.exports = router