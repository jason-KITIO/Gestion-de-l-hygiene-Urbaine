

function verif() {

    // Récupérer l'élément input
    let input1 = document.getElementById('nom');
    let input2 = document.getElementById('prenom');
    let input3 = document.getElementById('telephone');
    let input4 = document.getElementById('email');
    let input5 = document.getElementById('password');

    console.log(input1.value)
    console.log(input2.value)
    console.log(input3.value)
    console.log(input4.value)
    console.log(input5.value)
    // Récupérer la valeur de l'input

    let nom = input1.value
    let prenom = input2.value
    let tel = input3.value
    let email = input4.value
    let password = input5.value

    // Créer un objet contenant les données à envoyer
    data = {
        nom : nom,
        prenom : prenom,
        tel : tel,
        email : email,
        password : password
    };
    console.log(data.nom)
    console.log(data.prenom)
    console.log(data.tel)
    console.log(data.email)
    console.log(data.password)

    // Convertir l'objet en chaîne JSON
    let body = JSON.stringify(data);
    console.log(data.nom)
    console.log(data.prenom)
    console.log(data.tel)
    console.log(data.email)
    console.log(data.password)
    console.log(body)

    // Utiliser la méthode fetch pour envoyer la requête
    fetch('/Habitant', {
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
        console.log(data.prenom)
        console.log(data.tel)
        console.log(data.email)
        console.log(data.password)

}
