import express from 'express'
import cors from 'cors'
import UserRoutes from './routes/UserRoutes'
import ProductRoutes from './routes/ProductRoutes'
import PurchasesRoutes from './routes/PurchasesRoutes'

const app = express()
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  app.use(cors())
  next()
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', UserRoutes)
app.use('/products', ProductRoutes)
app.use('/purchases', PurchasesRoutes)

const port = ((process.env as any).PORT !== undefined) ? (process.env as any).PORT : 3003

app.listen(port, () => {
  console.log(`it's alive on http://localhost:${String(port)}`)
})

