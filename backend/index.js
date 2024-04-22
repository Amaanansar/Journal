import connectToMongo from './db.js';
import express, { json } from 'express';
import cors from 'cors';
connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(json())

// Available Routers
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})