const Video = require('../models/Video');

// Função para listar todos os vídeos
const getVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate('uploadedBy', 'username');
    res.json(videos);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Função para obter um vídeo pelo ID
const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate('uploadedBy', 'username');
    if (!video) {
      return res.status(404).json({ msg: 'Video not found' });
    }
    res.json(video);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Video not found' });
    }
    res.status(500).send('Server Error');
  }
};

// Função para upload de vídeo
const uploadVideo = async (req, res) => {
  const { title, description, videoPath } = req.body;

  try {
    // Cria um novo vídeo
    const newVideo = new Video({
      title,
      description,
      videoPath,
      uploadedBy: req.user.id, 
    });

    // Salva o vídeo no banco de dados
    await newVideo.save();

    res.json(newVideo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getVideos,
  getVideoById,
  uploadVideo,
};
