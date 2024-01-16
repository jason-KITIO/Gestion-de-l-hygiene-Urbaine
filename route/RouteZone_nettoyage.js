//const addEntreprise = require("../controlleurs/addEntreprise")
const { addzone_nettoyage,
    showzone_nettoyageAll,
    showzone_nettoyageOne,
    updatezone_nettoyage,
    deletezone_nettoyage }
    = require('../controlleurs/zone_nettoyage')
// const showEntreprise = require('../controlleurs/showEntreprise')

const express = require('express')
const app = express()

app.use(express.json())
const route = express.Router()
route.post('/zone_nettoyage', addzone_nettoyage)
route.get('/zone_nettoyage', showzone_nettoyageAll)
route.get('/one/zone_nettoyage', showzone_nettoyageOne)
route.put('/zone_nettoyage', updatezone_nettoyage)
route.delete('/zone_nettoyage', deletezone_nettoyage)

module.exports = route
// app.post(`/post`, addEntreprise)

// app.listen(3000, () =>
//     console.log('REST API server ready at: http://localhost:3000'),
// )
