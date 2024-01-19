

function verif() {

    // Récupérer l'élément input
    let input = document.getElementById('Nom');
    let nombre1 = document.getElementById('nombre');

    console.log(input.value)
    console.log(nombre1.value)
    // Récupérer la valeur de l'input

    let nom = input.value;
    let nombre = nombre1.value

    // Créer un objet contenant les données à envoyer
     data = {
        nom: nom,
        nombre: nombre
    };
    console.log(data.nom)
    console.log(data.nombre)

    // Convertir l'objet en chaîne JSON
    let body = JSON.stringify(data);
    console.log(data.nom)
    console.log(data.nombre)
    console.log(body)

    // Utiliser la méthode fetch pour envoyer la requête
    fetch('/equipe', {
        method: 'put', // Spécifier la méthode HTTP
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

    console.log(data.nom)
    console.log(data.nombre)

}
