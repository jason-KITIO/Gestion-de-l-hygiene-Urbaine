//const addEntreprise = require("../controlleurs/addEntreprise")
const { addNettoyeur,
    showNettoyeurAll,
    showNettoyeurOne,
    updateNettoyeur,
    deleteNettoyeur }
    = require('../controlleurs/nettoyeur')
// const showEntreprise = require('../controlleurs/showEntreprise')

const express = require('express')
const app = express()

app.use(express.json())
const route = express.Router()
route.post('/nettoyeur', addNettoyeur)
route.get('/nettoyeur', showNettoyeurAll)
route.get('/one/nettoyeur', showNettoyeurOne)
route.put('/nettoyeur', updateNettoyeur)
route.delete('/nettoyeur', deleteNettoyeur)

module.exports = route
// app.post(`/post`, addEntreprise)

// app.listen(3000, () =>
//     console.log('REST API server ready at: http://localhost:3000'),
// )
