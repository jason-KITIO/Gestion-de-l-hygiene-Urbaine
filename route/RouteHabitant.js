//const addEntreprise = require("../controlleurs/addEntreprise")
const { addHabitant,
    showHabitantAll,
    showHabitantOne,
    updateHabitant,
    deleteHabitant }
    = require('../controlleurs/habitant')
// const showEntreprise = require('../controlleurs/showEntreprise')

const express = require('express')
const app = express()

app.use(express.json())
const route = express.Router()
route.post('/Habitant', addHabitant)
route.get('/Habitant', showHabitantAll)
route.get('/one/Habitant', showHabitantOne)
route.put('/Habitant', updateHabitant)
route.delete('/Habitant', deleteHabitant)

module.exports = route
// app.post(`/post`, addEntreprise)

// app.listen(3000, () =>
//     console.log('REST API server ready at: http://localhost:3000'),
// )
