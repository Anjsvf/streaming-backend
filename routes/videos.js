const express = require('express')
const { getVideos, getVideoById, uploadVideo } = require('../controllers/videoController')
 const auth =  require('../middleware/auth')

const router = express.Router()
// rota para listar videos
router.get('/' , getVideos)

//pegar o video pelo id
router.get('/:id', getVideoById)
router.post('/', auth , uploadVideo)

module.exports = router