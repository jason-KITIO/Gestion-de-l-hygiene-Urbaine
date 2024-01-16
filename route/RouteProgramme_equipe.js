//const addEntreprise = require("../controlleurs/addEntreprise")
const { addProgramme_equipe,
    showProgramme_equipeAll,
    showProgramme_equipeOne,
    updateProgramme_equipe,
    deleteProgramme_equipe }
    = require('../controlleurs/programme_equipe')
// const showEntreprise = require('../controlleurs/showEntreprise')

const express = require('express')
const app = express()

app.use(express.json())
const route = express.Router()
route.post('/programme_equipe', addProgramme_equipe)
route.get('/programme_equipe', showProgramme_equipeAll)
route.get('/one/programme_equipe', showProgramme_equipeOne)
route.put('/programme_equipe', updateProgramme_equipe)
route.delete('/programme_equipe', deleteProgramme_equipe)

module.exports = route
// app.post(`/post`, addEntreprise)

// app.listen(3000, () =>
//     console.log('REST API server ready at: http://localhost:3000'),
// )
