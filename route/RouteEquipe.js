//const addEntreprise = require("../controlleurs/addEntreprise")
const { addEquipe,
    showEquipeAll,
    showEquipeOne,
    updateEquipe,
    deleteEquipe }
    = require('../controlleurs/equipe')
// const showEntreprise = require('../controlleurs/showEntreprise')

const express = require('express')
const app = express()

app.use(express.json())
const route = express.Router()
route.post('/equipe', addEquipe)
route.get('/equipe', showEquipeAll)
route.get('/one/equipe', showEquipeOne)
route.put('/equipe', updateEquipe)
route.delete('/equipe', deleteEquipe)

module.exports = route
// app.post(`/post`, addEntreprise)

// app.listen(3000, () =>
//     console.log('REST API server ready at: http://localhost:3000'),
// )
