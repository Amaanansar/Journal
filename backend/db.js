const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://afzal_journal:journal@cluster0.ro5wr4h.mongodb.net/notePad?retryWrites=true&w=majority'
const connectToMongo = () => {
    mongoose.connect(mongoURI , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Mongo Connected")
        }
    )
}
module.exports = connectToMongo;