const express = require('express')
const UserController = require('./controllers/UserController')

const routes = express.Router()

routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.create)
routes.delete('/users/:id', UserController.delete)
routes.put('/users/:id', UserController.update)

module.exports = routes