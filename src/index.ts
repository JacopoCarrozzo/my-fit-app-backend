import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/database';
import authRouter from './features/auth/auth.router'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())

app.use('/api/auth', authRouter)

app.get('/', (req, res) => {
    res.json({ message: 'MyFit API is running!' })
  })

connectDB()

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`)
  })