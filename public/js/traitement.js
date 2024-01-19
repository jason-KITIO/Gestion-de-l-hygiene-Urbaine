

function verif1() {

    // // Récupérer l'élément input
    // let input = document.getElementById('Nom');
    // let nombre1 = document.getElementById('nombre');

    // console.log(input.value)
    // console.log(nombre1.value)
    // // Récupérer la valeur de l'input

    // let nom = input.value;
    // let nombre = nombre1.value

    // // Créer un objet contenant les données à envoyer
    //  data = {
    //     nom: nom,
    //     nombre: nombre
    // };
    // console.log(data.nom)
    // console.log(data.nombre)

    // // Convertir l'objet en chaîne JSON
    // let body = JSON.stringify(data);
    // console.log(data.nom)
    // console.log(data.nombre)
    // console.log(body)

    // // Utiliser la méthode fetch pour envoyer la requête
    // fetch('/equipe', {
    //     method: 'POST', // Spécifier la méthode HTTP
    //     body: body, // Spécifier le corps de la requête
    //     headers: {
    //         'Content-Type': 'application/json' // Spécifier le type de contenu
    //     }
    // })
    //     .then(response => response.json()) // Traiter la réponse en JSON
    //     .then(body => {
    //         // Faire quelque chose avec les données reçues
    //         console.log(body);
    //     })
    //     .catch(error => {
    //         // Gérer les erreurs éventuelles
    //         console.error(error);
    //     });

    // console.log(data.nom)
    // console.log(data.nombre)

}
function verif(){

    // Récupérer l'élément input
    let input1 = document.getElementById('quartier');
    let input2 = document.getElementById('ville');
    let input3 = document.getElementById('longitude');
    let input4 = document.getElementById('latitude');
    let input5 = document.getElementById('Risque');

    console.log(input1.value)
    console.log(input2.value)
    console.log(input3.value)
    console.log(input4.value)
    console.log(input5.value)
    // Récupérer la valeur de l'input

    let quartier = input1.value;
    let ville = input2.value;
    let longitude = input3.value;
    let latitude = input4.value;
    let Risque = input5.value;

    // Créer un objet contenant les données à envoyer
     data = {
        quartier: quartier,
        ville: ville,
        longitude: longitude,
        latitude: latitude,
        Risque: Risque,
    };
    console.log(data.quartier)
    console.log(data.ville)
    console.log(data.longitude)
    console.log(data.latitude)
    console.log(data.Risque)

    // Convertir l'objet en chaîne JSON
    let body = JSON.stringify(data);

    console.log(data.quartier)
    console.log(data.ville)
    console.log(data.longitude)
    console.log(data.latitude)
    console.log(data.Risque)

    console.log(body)

    // Utiliser la méthode fetch pour envoyer la requête
    fetch('/zone_nettoyage', {
        method: 'POST', // Spécifier la méthode HTTP
        body: body, // Spécifier le corps de la requête
        headers: {
            'Content-Type': 'application/json' // Spécifier le type de contenu
        }
    })
        .then(response => response.json()) // Traiter la réponse en JSON
        .then(body => {
            // Faire quelque chose avec les données reçues
            console.log(body);
        })
        .catch(error => {
            // Gérer les erreurs éventuelles
            console.error(error);
        });

        console.log(data.quartier)
        console.log(data.ville)
        console.log(data.longitude)
        console.log(data.latitude)
        console.log(data.Risque)


}