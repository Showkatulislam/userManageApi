const express = require('express');
const { randomUser, userAll, saveUser, updateUser, updateUsers, DeleteUser } = require('../userControllers/userControllers');

const Routes=express.Router()


Routes.get('/random',randomUser)

Routes.get("/all",userAll)

Routes.post('/save',saveUser)

Routes.patch('/update/:id',updateUser)

Routes.patch('/bulk-update/',updateUsers)

Routes.delete('/delete/:id',DeleteUser)

module.exports=Routes