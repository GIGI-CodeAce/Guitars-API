
  // model.js
import mongoose from 'mongoose'

const guitarSchema = new mongoose.Schema({
  make: String,
  model: String
})

export const Guitar = mongoose.model('Guitar', guitarSchema)

// let id = 1
// function newId(){
//     return id++
// }
// export const guitars = [
//     { id: newId(), make: 'Fender', model: 'Strat' },
//     { id: newId(), make: 'PRS', model: 'Starla' },
//     { id: newId(), make: 'BMW', model: 'Les Paul' },
//     { id: newId(), make: 'Gibson', model: 'SG Standard' },
//     { id: newId(), make: 'Ibanez', model: 'RG550' },
//     { id: newId(), make: 'Jackson', model: 'Soloist' },
//     { id: newId(), make: 'ESP', model: 'Eclipse' },
//     { id: newId(), make: 'Yamaha', model: 'Pacifica' },
//     { id: newId(), make: 'Gretsch', model: 'White Falcon' }
//   ]
  