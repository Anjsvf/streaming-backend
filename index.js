const express =  require('express')
const cors = require('cors')
const connectDB  = require('./config/db')



const app = express()
//config middleware
app.use(cors())
app.use(express.json())

require('dotenv').config()

connectDB();

//confi routes 
app.use('/api/auth' , require('./routes/auth') )
app.use('/api/videos/', require('./routes/videos'))
app.use('/api/comments', require('./routes/comments'))




const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
 console.log(`servidor rodando na porta ${PORT}`);
})