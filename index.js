
const express = require('express')
const { initDB } = require('./config')
const {getMovies,getmoviesById,PostMovies,UpdateMovies,DeleteMovies} = require('./controllers/controllers.js')

const dotenv = require('dotenv')
dotenv.config()
const app = express()
initDB()

app.use(express.json())
app.get('/Movies',getMovies)
app.get('/Movies/:getmoviesById',getmoviesById)
app.post('/Movies',PostMovies)
app.put('/Movies/:getmoviesById',UpdateMovies)
app.delete('/Movies/:getmoviesById',DeleteMovies)

app.listen(8000,()=>{
    console.log("server started");
    })


