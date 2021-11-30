import express from 'express'
import UserModel from '../models/UserModel'

const router = express.Router()

router.get('/', (req, res) => {
  const execute = async (): Promise<void> => {
    try {
      const users = await UserModel.find()
      res.json(users)
    } catch (err) {
      res.json({ message: err })
    }
  }

  void execute()
})

router.get('/:userId', (req, res) => {
  const execute = async (): Promise<void> => {
    try {
      const user = await UserModel.findById(req.params.userId)
      res.json(user)
    } catch (err) {
      res.json({ message: err })
    }
  }

  void execute()
})

router.post('/', (req, res) => {
  const user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    cpf: req.body.cpf,
    password: req.body.password
  })

  try {
    const saveUser = user.save()
    res.json(saveUser)
  } catch (err) {
    res.json({ message: err })
  }
})

router.put('/:userId', (req, res) => {
  const execute = async (): Promise<void> => {
    try {
      const updateUser = await UserModel.updateOne(
        { _id: req.params.userId },
        {
          $set: {
            name: req.body.name,
            email: req.body.email,
            cpf: req.body.cpf,
            password: req.body.password
          }
        }
      )
      res.json(updateUser)
    } catch (err) {
      res.json({ message: err })
    }
  }

  void execute()
})

router.delete('/:userId', (req, res) => {
  const execute = async (): Promise<void> => {
    try {
      const removeUser = await UserModel.remove({ _id: req.params.userId })
      res.json(removeUser)
    } catch (err) {
      res.json({ message: err })
    }
  }

  void execute()
})

export default router
