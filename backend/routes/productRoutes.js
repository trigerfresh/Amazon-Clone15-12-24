import express from 'express'
import Product from '../models/productModel.js'
import data from '../data.js'

const productRouter = express.Router()

productRouter.get('/', async (req, res) => {
  const product = await Product.find()
  res.send(product)
})

productRouter.get('/slug/:slug', async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug })

  if (product) {
    res.send(product)
  } else {
    res.status(404).send({ message: 'Product not found' })
  }
})

productRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.send(product)
  } else {
    res.status(404).send({ message: 'Product not found' })
  }
})

export default productRouter
