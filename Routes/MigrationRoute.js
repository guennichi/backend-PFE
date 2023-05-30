const express = require('express');
const router = express.Router()
const { getdata, addData } = require('../Controllers/Migration');
const uploadFile = require('../middlewares/multer');
const passport = require('passport');



router.get('/migration', getdata)
router.post('/migration', [uploadFile.single('fichier')], addData)


module.exports = router;
