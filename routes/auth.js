const express = require('express')

const {register, login} = require('../controllers/authController')
const auth = require('../middleware/auth')

const router = express.Router()
// rota para o registro  do usuário
router.post('/register', register)

//rota do login do usuário

router.post('/login', login)

module.exports = router