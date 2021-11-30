import express from 'express'
import ProductModel from '../models/ProductModel'

const router = express.Router()

router.get('/', (req, res) => {
  const execute = async (): Promise<void> => {
    try {
      const products = await ProductModel.find()
      res.json(products)
    } catch (err) {
      res.json({ message: err })
    }
  }

  void execute()
})

router.get('/:productId', (req, res) => {
  const execute = async (): Promise<void> => {
    try {
      const product = await ProductModel.findById(req.params.productId)
      res.json(product)
    } catch (err) {
      res.json({ message: err })
    }
  }

  void execute()
})

router.post('/', (req, res) => {
  const product = new ProductModel({
    image: req.body.image,
    title: req.body.title,
    price: req.body.price,
    size: req.body.size,
    quantity: req.body.quantity
  })

  try {
    const saveProduct = product.save()
    res.json(saveProduct)
  } catch (err) {
    res.json({ message: err })
  }
})

router.put('/:productId', (req, res) => {
  const execute = async (): Promise<void> => {
    try {
      const updateProduct = await ProductModel.updateOne(
        { _id: req.params.productId },
        {
          $set: {
            image: req.body.image,
            title: req.body.title,
            price: req.body.price,
            size: req.body.size,
            quantity: req.body.quantity
          }
        }
      )
      res.json(updateProduct)
    } catch (err) {
      res.json({ message: err })
    }
  }

  void execute()
})

router.delete('/:productId', (req, res) => {
  const execute = async (): Promise<void> => {
    try {
      const removeProduct = await ProductModel.remove({ _id: req.params.productId })
      res.json(removeProduct)
    } catch (err) {
      res.json({ message: err })
    }
  }

  void execute()
})

export default router
