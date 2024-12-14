import express from 'express'
import data from './data.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import seedRouter from './routes/seedRoutes.js'
import productRouter from './routes/productRoutes.js'

dotenv.config()
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => console.log(err.message))

const app = express()
app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter)

// app.get('/api/products', (req, res) => {
//   res.send(data.products)
// })

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Serve @ http:/localhost:${PORT}`)
})
