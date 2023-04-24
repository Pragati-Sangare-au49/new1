
const mongoose = require("mongoose")

async function initDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL, {dbName: 'bookmyshow'})
        console.log("DB connected")}
        catch(err){
            console.log("Error connecting in DB")
            process.exit()
        }
}
module.exports = {
    initDB
}
