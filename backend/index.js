import express from 'express'
import cors from 'cors'
import { guitars,getAll,addGuitar,removeGuitar } from './model.js'
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/guitars', (req, res) => {
  res.json(guitars)
})

app.get('/guitars/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  const guitar = guitars.find(g => g.id === id)

  if (!guitar) {
    return res.status(404).json({ error: 'Guitar not found' })
  }

  res.json(guitar)
})

app.get('/guitars/delete', (req, res) => {
  removeGuitar(guitars)

  res.json(guitars)
})

app.post('/guitars', (req, res) => {
  const { make, model } = req.body

  if (!make || !model) {
    return res.status(400).json({ error: 'Make and model are required' })
  }

  const newGuitar = {
    id: guitars.length ? guitars[guitars.length - 1].id + 1 : 1,
    make,
    model
  }

  guitars.push(newGuitar)
  res.status(201).json(newGuitar)
})

app.listen(port, () => {
  console.log(`🔌 Backend listening at http://localhost:${port}`)
})
