import express from 'express'
import PurchasesModel from '../models/PurchasesModel'

const router = express.Router()

router.get('/', (req, res) => {
  const execute = async (): Promise<void> => {
    try {
      const purchases = await PurchasesModel.find()
      res.json(purchases)
    } catch (err) {
      res.json({ message: err })
    }
  }

  void execute()
})

router.get('/:purchasesId', (req, res) => {
  const execute = async (): Promise<void> => {
    try {
      const purchases = await PurchasesModel.findById(req.params.purchasesId)
      res.json(purchases)
    } catch (err) {
      res.json({ message: err })
    }
  }

  void execute()
})

router.post('/', (req, res) => {
  const purchases = new PurchasesModel({
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    userId: req.body.userId,
    selectedProductIds: req.body.selectedProductIds,
    selectedProductQtds: req.body.selectedProductQtds,
    quantity: req.body.quantity
  })

  try {
    const savePurchases = purchases.save()
    res.json(savePurchases)
  } catch (err) {
    res.json({ message: err })
  }
})

router.put('/:purchasesId', (req, res) => {
  const execute = async (): Promise<void> => {
    try {
      const updatePurchases = await PurchasesModel.updateOne(
        { _id: req.params.purchasesId },
        {
          $set: {
            endereco: req.body.endereco,
            telefone: req.body.telefone,
            userId: req.body.userId,
            selectedProductIds: req.body.selectedProductIds,
            selectedProductQtds: req.body.selectedProductQtds,
            quantity: req.body.quantity
          }
        }
      )
      res.json(updatePurchases)
    } catch (err) {
      res.json({ message: err })
    }
  }

  void execute()
})

router.delete('/:purchasesId', (req, res) => {
  const execute = async (): Promise<void> => {
    try {
      const removePurchases = await PurchasesModel.remove({ _id: req.params.purchasesId })
      res.json(removePurchases)
    } catch (err) {
      res.json({ message: err })
    }
  }

  void execute()
})

export default router
