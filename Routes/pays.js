const express = require('express');


const passport = require('passport');
const { getAllpays, getpaysbyid, updatepays, deletePays, addpays } = require('../Controllers/PaysController');

const router = express.Router()


router.post('/pays', addpays);
router.get('/pays', getAllpays);
router.get('/pays/:id', getpaysbyid)
router.put('/pays/:id', updatepays)
router.delete('/pays/:id', deletePays)

module.exports = router
