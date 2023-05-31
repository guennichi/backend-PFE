const express = require('express');


const passport = require('passport');
const { getAllusers, getuserbyid, updateuser, changeStatus, adduser } = require('../Controllers/UserController');

const router = express.Router()

router.post('/user', adduser);

router.get('/user', getAllusers);
router.get('/user/:id', getuserbyid)
router.put('/user/:id', updateuser)
router.put('/userStatus/:id', changeStatus)

module.exports = router
