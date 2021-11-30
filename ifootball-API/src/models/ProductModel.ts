import mongoose from '../database'

const ProductSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
})

export default mongoose.model('products', ProductSchema)
