//const addEntreprise = require("../controlleurs/addEntreprise")
const { addEntreprise,
    showEntrepriseAll,
    showEntrepriseOne,
    updateEntreprise,
    deleteEntreprise }
    = require('../controlleurs/autre/Entreprise')
// const showEntreprise = require('../controlleurs/showEntreprise')

const express = require('express')
const app = express()

app.use(express.json())
const route = express.Router()
route.post('/', addEntreprise)
route.get('/', showEntrepriseAll)
route.get('/one', showEntrepriseOne)
route.put('/', updateEntreprise)
route.delete('/', deleteEntreprise)

module.exports = route
// app.post(`/post`, addEntreprise)

// app.listen(3000, () =>
//     console.log('REST API server ready at: http://localhost:3000'),
// )
