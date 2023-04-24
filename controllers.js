const movieModel = require('../models/moviemodel')

const getMovies = async (req, res) => {
    try{
        const movies = await movieModel.find()
        res.send(movies)
    }catch(err){
        console.log("Error fetching data")
        res.send("Error fetching data")
    }
}

const getmoviesById = async (req, res) => {
    const { movieID } = req.params
    //console.log(movieID)
    try {
        const movie = await movieModel.findById(movieID)
            res.send({status: 'success', movie: movie});
    } catch (err) {
        res.status(400).send({status: 'Error', msg: err.message});
    }
}

const PostMovies = async(request, res) => {
    const moviedata = request.body
    console.log(moviedata)
    try{
    const insertResult = await movieModel.create(moviedata);
    res.status(201).send({status: 'success', movie: insertResult})}
    catch(err){
        res.status(400).send({status: 'error' , msg: 'Internal Error'})
    }
}
const UpdateMovies = async(req,res)=>{
    const { movieID } = req.params
    const data = req.body
    console.log(movieID)
    try{
    const updatedata = await movieModel.findByIdAndUpdate(movieID,data,{new: true})
    res.send({status: "success", updatedata})
    }catch(err){
        res.send("cant update")
    }
}
const DeleteMovies = async(req,res)=>{
    const { movieID } = req.params
    await movieModel.deleteOne({ _id: new ObjectId(movieID)})
    res.send("deleted success")
}
module.exports = {
    getMovies,
    getmoviesById,
    PostMovies,
    UpdateMovies,
    DeleteMovies
}