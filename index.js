import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import filmRoutes from './routes/film.js'
import theatersRouter from './routes/theaters.js'
import usersRouter from './routes/users.js' 
import showsRouter from './routes/shows.js'
import authRouter from './routes/auth.js'

const app = express()
dotenv.config()

mongoose.set('strictQuery', true)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/api/film', filmRoutes)
app.use('/api/theater', theatersRouter)
app.use('/api/users', usersRouter)
app.use('/api/shows', showsRouter)
app.use('/api/auth', authRouter)

mongoose.connect(process.env.CONNECTION_URL)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server running on port ${process.env.PORT}`);
    })
})
.catch(error => {
    console.error(error);
})