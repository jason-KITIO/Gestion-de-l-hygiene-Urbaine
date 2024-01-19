 document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault();
            var email = document.getElementById("nom").value;
            var password = document.getElementById("pass").value;

            if (email === "abc" && password === "123") {
                window.location.href = "";
            } else {
                window.location.href = "connexion-echouee.html";
            }
        });
  