let id = 1
function newId(){
    return id++
}
export const guitars = [
    { id: newId(), make: 'Fender', model: 'Strat' },
    { id: newId(), make: 'PRS', model: 'Starla' },
    { id: newId(), make: 'BMW', model: 'Les Paul' },
    { id: newId(), make: 'Gibson', model: 'SG Standard' },
    { id: newId(), make: 'Ibanez', model: 'RG550' },
    { id: newId(), make: 'Jackson', model: 'Soloist' },
    { id: newId(), make: 'ESP', model: 'Eclipse' },
    { id: newId(), make: 'Yamaha', model: 'Pacifica' },
    { id: newId(), make: 'Gretsch', model: 'White Falcon' }
  ]
  
export function addGuitar(make,model){
    const guitar = {
        id: newId(), make: make, model: model
    }

    guitars.push(guitar)

    return Promise.resolve(guitar)
}

export function getAll(){
    return Promise.resolve(guitars)
}
export function getById(id){
    const guitar = guitars.find(g => g.id === id)

    return Promise.resolve(guitar)
}

export function getByMake(make){
    const found = guitars.filter(g => g.make.toLocaleLowerCase() === make.toLocaleLowerCase())

    return Promise.resolve(found)
}

export function saveGuitar(guitar){

    return Promise.resolve(true)
}
export function removeGuitar(id){
    const index = guitars.findIndex(g => g.id === id)
    if (index !== -1) guitars.splice(index, 1)
  }
  