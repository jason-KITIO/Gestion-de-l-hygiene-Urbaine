//const addEntreprise = require("../controlleurs/addEntreprise")
const { addProgramme_de_nettoyage,
    showProgramme_de_nettoyageAll,
    showProgramme_de_nettoyageOne,
    updateProgramme_de_nettoyage,
    deleteProgramme_de_nettoyage }
    = require('../controlleurs/programme_de_nettoyage')
// const showEntreprise = require('../controlleurs/showEntreprise')

const express = require('express')
const app = express()

app.use(express.json())
const route = express.Router()
route.post('/programme_de_nettoyage', addProgramme_de_nettoyage)
route.get('/programme_de_nettoyage', showProgramme_de_nettoyageAll)
route.get('/one/programme_de_nettoyage', showProgramme_de_nettoyageOne)
route.put('/programme_de_nettoyage', updateProgramme_de_nettoyage)
route.delete('/programme_de_nettoyage', deleteProgramme_de_nettoyage)

module.exports = route
// app.post(`/post`, addEntreprise)

// app.listen(3000, () =>
//     console.log('REST API server ready at: http://localhost:3000'),
// )
