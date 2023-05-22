const express = require('express');


const passport = require('passport');
const { getAlllocale, getlocalebyid, updatelocale, deletelocale, addlocal } = require('../../Controllers/Locale/LocaleController');

const router = express.Router()


router.post('/local', addlocal);
router.get('/local', getAlllocale);
router.get('/local/:id', getlocalebyid)
router.put('/local/:id', updatelocale)
router.delete('/local/:id', deletelocale)

module.exports = router
