const express =  require('express')
const {getCommentsByVideoId, addComment} = require('../controllers/commentController')
const auth = require('../middleware/auth')

const router = express.Router()
//rota para listar os comentarios
router.get('/:videoId', getCommentsByVideoId)

router.post('/:videoId', auth , addComment)
module.exports = router