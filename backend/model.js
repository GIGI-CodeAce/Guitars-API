
  // model.js
import mongoose from 'mongoose'

const guitarSchema = new mongoose.Schema({
  make: String,
  model: String
})

export const Guitar = mongoose.model('Guitar', guitarSchema)
