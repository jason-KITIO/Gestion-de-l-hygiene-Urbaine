

function verif() {

    // Récupérer l'élément input
    let input = document.getElementById('email');

    console.log(input.value)
    // Récupérer la valeur de l'input

    let email = input.value;

    // Créer un objet contenant les données à envoyer
     data = {
        email: email,
    };
    console.log(data.email)

    // Convertir l'objet en chaîne JSON
    let body = JSON.stringify(data);
    console.log(data.email)
    console.log(body)

    // Utiliser la méthode fetch pour envoyer la requête
    fetch('/Habitant', {
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

    console.log(data)

}
