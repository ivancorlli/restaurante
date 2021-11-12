const express = require('express');
const api = express.Router();

// Middlewares
const auth = require('../middlewares/auth')

// Controllers
const userControllers = require('../controllers/userControllers')

api.post('/login', userControllers.loginUsuario )
api.post('/register', userControllers.createUser );
api.get('/users/:id?', auth ,userControllers.getUsers)
api.get('/confirm', userControllers.confirmUser)
api.post('/reset', userControllers.resetPassword)
api.patch('/reset/:id', userControllers.newPassword)


module.exports = api