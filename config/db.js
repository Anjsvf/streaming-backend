require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = async() =>{
    try{
      await mongoose.connect(process.env.MONGO_URL,{
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      })
      console.log('conectado ao mongoDB')
    }catch (error) {
        console.error('não foi possivél conectar ao mongoDB', error)
       process.exit(1)
    }
}
module.exports = connectDB