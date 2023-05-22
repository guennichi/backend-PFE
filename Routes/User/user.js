const express = require('express');


const passport = require('passport');
const { getAllusers, getuserbyid, updateuser, deleteUser } = require('../../Controllers/User/UserController');

const router = express.Router()


router.get('/user', getAllusers);
router.get('/user/:id', getuserbyid)
router.put('/user/:id', updateuser)
router.delete('/user/:id', deleteUser)

module.exports = router
