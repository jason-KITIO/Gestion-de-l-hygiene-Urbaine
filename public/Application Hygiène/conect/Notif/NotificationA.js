/*let contenir=document.getElementById("btn").onclick= function(){
    if(confirm("felicitation vous etes connectez avec succes voulez vous partir a la page suivante")){

        window.open("file:///C:/Users/Mr%20Richy/Desktop/Chalenge/Chalenge4.html");
    }
}*/
const btn = document.getElementById('btn');
const box = document.querySelector('.message_box');
btn.addEventListener('click', function () {

  let nom = document.getElementById('Nom').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  
  if (nom != "" && email != "" && password != ""){
    check()
  }
})


let begin = () => {
  box.style.transform = "translate(-100%, 0px)"
  box.classList.remove('hide');
  setTimeout(function () {
    box.style.transform = "translate(100%, 0px)"
    box.classList.remove('hide');
  }, 6000)
}


// Fonction de vérification du mot de passe
function check() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (password.length < 8 && !emailRegex.test(email)) {
    alert('Le mot de passe doit contenir au moins 8 caractères.');
  }
  if (!emailRegex.test(email)) {
    alert('Veuillez entrer une adresse email valide.');
  }
  
  if (password.length > 8 && emailRegex.test(email)) {
    begin()
    window.location.href = "/map.html";
  }
}



/*  btn.addEventListener('click', function(){
   

    var maDiv = document.getElementById("MaDiv");

    maDiv.style.display = "block";
  
    setTimeout(function() {
     

      maDiv.style.display = "none";
    },30000);
  }) */


