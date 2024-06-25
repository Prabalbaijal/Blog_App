import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import Route from './routes/route.js'

dotenv.config({})

const app=express()
const PORT=process.env.PORT || 2000
const corsOptions={
    origin:'http://localhost:5173',
    credentials:true,
}

app.use(cors(corsOptions))
app.use(express.urlencoded({extended:true}))    
app.use(express.json())
app.use('/',Route)

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server Detected ${PORT}`)
})