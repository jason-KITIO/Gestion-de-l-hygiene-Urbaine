
function verif() {

    // Récupérer l'élément input
    let input1 = document.getElementById('nom');
    let input2 = document.getElementById('telephone');
    let input3 = document.getElementById('Disponibiliter');
    let input4 = document.getElementById('Sexe');

    console.log(input1.value)
    console.log(input2.value)
    console.log(input3.value)
    console.log(input4.value)
    // Récupérer la valeur de l'input

    let nom = input1.value
    let telephone = input2.value
    let Disponibiliter = input3.value
    let Sexe = input4.value

    // Créer un objet contenant les données à envoyer
    data = {
        nom : nom,
        telephone : telephone,
        Disponibiliter : Disponibiliter,
        Sexe : Sexe
    };
    console.log(data.nom)
    console.log(data.telephone)
    console.log(data.Disponibiliter)
    console.log(data.Sexe)

    // Convertir l'objet en chaîne JSON
    let body = JSON.stringify(data);
    console.log(data.nom)
    console.log(data.telephone)
    console.log(data.Disponibiliter)
    console.log(data.Sexe)
    console.log(body)

    // Utiliser la méthode fetch pour envoyer la requête
    fetch('/nettoyeur', {
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
        console.log(data.nom)
        console.log(data.telephone)
        console.log(data.Disponibiliter)
        console.log(data.Sexe)

}
