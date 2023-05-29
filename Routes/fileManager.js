const express = require('express');
const router = express.Router();
const multer = require('multer');
const { getdatafiles } = require('../Controllers/fileManager');


router.get('/getallfiles', getdatafiles);

module.exports = router;
