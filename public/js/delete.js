

function verif() {

    // Récupérer l'élément input
    let input = document.getElementById('Nom');

    console.log(input.value)
    // Récupérer la valeur de l'input

    let nom = input.value;

    // Créer un objet contenant les données à envoyer
     data = {
        nom: nom,
    };
    console.log(data.nom)

    // Convertir l'objet en chaîne JSON
    let body = JSON.stringify(data);
    console.log(data.nom)
    console.log(body)

    // Utiliser la méthode fetch pour envoyer la requête
    fetch('/equipe', {
        method: 'delete', // Spécifier la méthode HTTP
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

}
