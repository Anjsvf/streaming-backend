const  Comment =  require('../models/Comment')


const getCommentsByVideoId =  async (req ,  res ) =>{
    try{
  const comments = await Comment.find({video: req.params.videoId}).populate('user', 'username')
  res.json(comments)
    }catch (error){
  console.error(error.message)
  res.status(500).send('erro no servidor')
    }
}
// adicionar comentario  no video
const addComment = async (req,  res) =>{
    const {text} = req.body
    const videoId = req.params.videoId;
    try{
        const  newComment = new Comment({
            text,
            video: videoId,
            user: req.user.id,
        })
    await newComment.save()
    res.json(newComment)
    }catch (error) {
    console.error(error.message)
    res.status(500).send('error no servidor')
    }
}

module.exports ={
    getCommentsByVideoId,
    addComment,
}