const express = require('express');
const app = express();
const server = require('http').createServer(app)
const fs = require('fs');

app.use(express.static('data'));
// const fs = require('fs');

// const data = {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "geometry": {
//         "type": "Point",
//         "coordinates": [102.0, 0.5]
//       },
//       "properties": {
//         "prop0": "value0"
//       }
//     }
//   ]
// };

// const dataString = JSON.stringify(data);

// fs.writeFile('data/data.geojson', dataString, () => {
//   console.log('The file has been saved!');
// });

// // Read users.json file
// fs.readFile("data/points.geojson", function(dataTest) {
      
   
//     // Converting to JSON
//     const users = JSON.parse(dataTest);
      
//     console.log(users); // Print users 
// });
port = 5000
server.listen(port, () => {
    console.log(`Ecoute sur le port ${port}...`)
})