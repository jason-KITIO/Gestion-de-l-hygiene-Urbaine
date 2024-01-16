//const addEntreprise = require("../controlleurs/addEntreprise")
const { addZone_habitant,
    showZone_habitantAll,
    showZone_habitantOne,
    updateZone_habitant,
    deleteZone_habitant }
    = require('../controlleurs/Zone_habitant')
// const showEntreprise = require('../controlleurs/showEntreprise')

const express = require('express')
const app = express()

app.use(express.json())
const route = express.Router()
route.post('/Zone_habitant', addZone_habitant)
route.get('/Zone_habitant', showZone_habitantAll)
route.get('/one/Zone_habitant', showZone_habitantOne)
route.put('/Zone_habitant', updateZone_habitant)
route.delete('/Zone_habitant', deleteZone_habitant)

module.exports = route
// app.post(`/post`, addEntreprise)

// app.listen(3000, () =>
//     console.log('REST API server ready at: http://localhost:3000'),
// )
