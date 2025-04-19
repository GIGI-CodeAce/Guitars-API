import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { Guitar } from './model.js'

dotenv.config()

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ MongoDB connection error:', err))

// Get all
app.get('/guitars', async (req, res) => {
  const guitars = await Guitar.find()
  res.json(guitars)
})

// Get one
app.get('/guitars/:id', async (req, res) => {
  try {
    const guitar = await Guitar.findById(req.params.id)
    if (!guitar) return res.status(404).json({ error: 'Guitar not found' })
      res.json(guitar)
  } catch {
    res.status(400).json({ error: 'Invalid ID format' })
  }
})

// Create
app.post('/guitars', async (req, res) => {
  const { make, model } = req.body
  if (!make || !model) return res.status(400).json({ error: 'Make and model are required' })

  const newGuitar = new Guitar({ make, model })
  await newGuitar.save()
  res.status(201).json(newGuitar)
})

// Update
app.put('/guitars/:id', async (req, res) => {
  const { make, model } = req.body
  if (!make || !model) return res.status(400).json({ error: 'Make and model are required' })

  try {
    const guitar = await Guitar.findByIdAndUpdate(
      req.params.id,
      { make, model },
      { new: true }
    )
    if (!guitar) return res.status(404).json({ error: 'Guitar not found' })
    res.json(guitar)
  } catch {
    res.status(400).json({ error: 'Invalid ID format' })
  }
})

// Delete
app.delete('/guitars/:id', async (req, res) => {
  try {
    const result = await Guitar.findByIdAndDelete(req.params.id)
    if (!result) return res.status(404).json({ error: 'Guitar not found' })
    res.status(204).end()
  } catch {
    res.status(400).json({ error: 'Invalid ID format' })
  }
})

app.listen(port, () => {
  console.log(`🔌 Backend listening at http://localhost:${port}`)
})
