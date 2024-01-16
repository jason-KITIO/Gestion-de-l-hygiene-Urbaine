// import { addEntreprise} from './route/RouteAddEntreprise'
// const routeAddEntreprise   = require('./route/RouteAddEntreprise')

const RouteEquipe = require('./route/RouteEquipe')
const RouteNettoyeur = require('./route/RouteNettoyeur')
const RouteHabitant = require('./route/RouteHabitant')
const RouteProgramme_de_nettoyage = require('./route/RouteProgramme_de_nettoyage')
const RouteZone_habitant = require('./route/RouteZone_habitant')
const RouteProgramme_equipe = require('./route/RouteProgramme_equipe')
const RouteZone_nettoyage = require('./route/RouteZone_nettoyage')
const express = require('express')
const app = express()

// const data = require('./data')

// const routes = require('./route/RouteAddEntreprise')(app)

// app.post('/', routeAddEntreprise)
// app.get('/', routeAddEntreprise)
// app.get('/one', routeAddEntreprise)
// app.put('/', routeAddEntreprise)
// app.delete('/', routeAddEntreprise)

app.post('/equipe', RouteEquipe)
app.get('/equipe', RouteEquipe)
app.get('/one/equipe', RouteEquipe)
app.put('/equipe', RouteEquipe)
app.delete('/equipe', RouteEquipe)

app.post('/nettoyeur', RouteNettoyeur)
app.get('/nettoyeur', RouteNettoyeur)
app.get('/one/nettoyeur', RouteNettoyeur)
app.put('/nettoyeur', RouteNettoyeur)
app.delete('/nettoyeur', RouteNettoyeur)

app.post('/Habitant', RouteHabitant)
app.get('/Habitant', RouteHabitant)
app.get('/one/Habitant', RouteHabitant)
app.put('/Habitant', RouteHabitant)
app.delete('/Habitant', RouteHabitant)


app.post('/programme_de_nettoyage', RouteProgramme_de_nettoyage)
app.get('/programme_de_nettoyage', RouteProgramme_de_nettoyage)
app.get('/one/programme_de_nettoyage', RouteProgramme_de_nettoyage)
app.put('/programme_de_nettoyage', RouteProgramme_de_nettoyage)
app.delete('/programme_de_nettoyage', RouteProgramme_de_nettoyage)

app.post('/Zone_habitant', RouteZone_habitant)
app.get('/Zone_habitant', RouteZone_habitant)
app.get('/one/Zone_habitant', RouteZone_habitant)
app.put('/Zone_habitant', RouteZone_habitant)
app.delete('/Zone_habitant', RouteZone_habitant)

app.post('/zone_nettoyage', RouteZone_nettoyage)
app.get('/zone_nettoyage', RouteZone_nettoyage)
app.get('/one/zone_nettoyage', RouteZone_nettoyage)
app.put('/zone_nettoyage', RouteZone_nettoyage)
app.delete('/zone_nettoyage', RouteZone_nettoyage)

app.listen(3000, () =>
    console.log('REST API server ready at: http://localhost:3000'),
)

/**const http = require('http');
const fs = require('fs');
const path = require('path');

// import { addEntreprise} from './route/RouteAddEntreprise'
// const routeAddEntreprise   = require('./route/RouteAddEntreprise')

const RouteEquipe = require('./route/RouteEquipe')
const RouteNettoyeur = require('./route/RouteNettoyeur')
const RouteHabitant = require('./route/RouteHabitant')
const RouteProgramme_de_nettoyage = require('./route/RouteProgramme_de_nettoyage')
const RouteZone_habitant = require('./route/RouteZone_habitant')
const RouteProgramme_equipe = require('./route/RouteProgramme_equipe')
const RouteZone_nettoyage = require('./route/RouteZone_nettoyage')
const express = require('express')
const app = express()

// const data = require('./data')

// const routes = require('./route/RouteAddEntreprise')(app)

// app.post('/', routeAddEntreprise)
// app.get('/', routeAddEntreprise)
// app.get('/one', routeAddEntreprise)
// app.put('/', routeAddEntreprise)
// app.delete('/', routeAddEntreprise)

app.post('/equipe', RouteEquipe)
app.get('/equipe', RouteEquipe)
app.get('/one/equipe', RouteEquipe)
app.put('/equipe', RouteEquipe)
app.delete('/equipe', RouteEquipe)

app.post('/nettoyeur', RouteNettoyeur)
app.get('/nettoyeur', RouteNettoyeur)
app.get('/one/nettoyeur', RouteNettoyeur)
app.put('/nettoyeur', RouteNettoyeur)
app.delete('/nettoyeur', RouteNettoyeur)

app.post('/Habitant', RouteHabitant)
app.get('/Habitant', RouteHabitant)
app.get('/one/Habitant', RouteHabitant)
app.put('/Habitant', RouteHabitant)
app.delete('/Habitant', RouteHabitant)


app.post('/programme_de_nettoyage', RouteProgramme_de_nettoyage)
app.get('/programme_de_nettoyage', RouteProgramme_de_nettoyage)
app.get('/one/programme_de_nettoyage', RouteProgramme_de_nettoyage)
app.put('/programme_de_nettoyage', RouteProgramme_de_nettoyage)
app.delete('/programme_de_nettoyage', RouteProgramme_de_nettoyage)

app.post('/Zone_habitant', RouteZone_habitant)
app.get('/Zone_habitant', RouteZone_habitant)
app.get('/one/Zone_habitant', RouteZone_habitant)
app.put('/Zone_habitant', RouteZone_habitant)
app.delete('/Zone_habitant', RouteZone_habitant)

app.post('/zone_nettoyage', RouteZone_nettoyage)
app.get('/zone_nettoyage', RouteZone_nettoyage)
app.get('/one/zone_nettoyage', RouteZone_nettoyage)
app.put('/zone_nettoyage', RouteZone_nettoyage)
app.delete('/zone_nettoyage', RouteZone_nettoyage)

// Créer le serveur web
const server = http.createServer((req, res) => {
    // Définir le chemin du fichier HTML
    const filePath = path.join('index.html');
  
    // Lire le fichier HTML
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // Gérer les erreurs de lecture
        res.statusCode = 500;
        res.end('Erreur interne du serveur');
      } else {
        // Envoyer le fichier HTML au client
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  });

  server.listen(8000, () => {
    console.log('Le serveur écoute sur le port 8000');
  });
  
app.listen(3000, () =>
    console.log('REST API server ready at: http://localhost:3000'),
) */