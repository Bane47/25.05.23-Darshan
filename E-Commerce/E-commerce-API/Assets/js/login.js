(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over each form and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // Additional custom validations
        if (form.id === 'loginForm') {
          // Validate login form
          var username = document.getElementById('username').value;
          var password = document.getElementById('password').value;

          if (username.trim() === '') {
            displayErrorMessage('username', 'Please enter a username.');
            event.preventDefault();
            event.stopPropagation();
          } else {
            removeErrorMessage('username');
          }

          if (password.trim() === '') {
            displayErrorMessage('password', 'Please enter a password.');
            event.preventDefault();
            event.stopPropagation();
          } else if (password.length < 8) {
            displayErrorMessage('password', 'Password must be at least 8 characters long.');
            event.preventDefault();
            event.stopPropagation();
          } else {
            removeErrorMessage('password');
          }
        } else if (form.id === 'registerForm') {
          // Validate register form
          var name = document.getElementById('name').value;
          var username = document.getElementById('uname').value;
          var email = document.getElementById('email').value;
          var password = document.getElementById('pwd').value;
          var confirmPassword = document.getElementById('repwd').value;

          if (name.trim() === '') {
            displayErrorMessage('name', 'Please enter your name.');
            event.preventDefault();
            event.stopPropagation();
          } else {
            removeErrorMessage('name');
          }

          if (username.trim() === '') {
            displayErrorMessage('uname', 'Please choose a username.');
            event.preventDefault();
            event.stopPropagation();
          } else {
            removeErrorMessage('uname');
          }

          if (email.trim() === '') {
            displayErrorMessage('email', 'Please enter a valid email.');
            event.preventDefault();
            event.stopPropagation();
          } else {
            removeErrorMessage('email');
          }

          if (password.trim() === '') {
            displayErrorMessage('pwd', 'Please enter a password.');
            event.preventDefault();
            event.stopPropagation();
          } else if (password.length < 8) {
            displayErrorMessage('pwd', 'Password must be at least 8 characters long.');
            event.preventDefault();
            event.stopPropagation();
          } else {
            removeErrorMessage('pwd');
          }

          if (confirmPassword.trim() === '') {
            displayErrorMessage('repwd', 'Please confirm the password.');
            event.preventDefault();
            event.stopPropagation();
          } else if (confirmPassword !== password) {
            displayErrorMessage('repwd', 'Passwords do not match.');
            event.preventDefault();
            event.stopPropagation();
          } else {
            removeErrorMessage('repwd');
          }
        }
      }

      form.classList.add('was-validated');
    }, false);
  });

  // Function to display error message
  function displayErrorMessage(inputId, message) {
    var input = document.getElementById(inputId);
    var feedback = input.parentNode.querySelector('.invalid-feedback');
    feedback.innerText = message;
    input.classList.add('is-invalid');
  }

  // Function to remove error message
  function removeErrorMessage(inputId) {
    var input = document.getElementById(inputId);
    var feedback = input.parentNode.querySelector('.invalid-feedback');
    feedback.innerText = '';
    input.classList.remove('is-invalid');
  }
})();


function details(){
        // creating a http request using XMLHttpRequest

    const xhttp = new XMLHttpRequest();
    var url = "http://localhost:3000/Logins";

    xhttp.open("GET",url);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(xhttp.readyState===4 && xhttp.status===200){
            const details = JSON.parse(xhttp.responseText);

            console.log(this.responseText);
        }
    }

   console.log(details);

    
}
details()

function signin(){
    const name = document.getElementById("name").value;
    const username = document.getElementById("uname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;
    const repassword = document.getElementById("repwd").value;

    console.log(username)
 
const xhttp = new XMLHttpRequest();

xhttp.open("POST","http://localhost:3000/Logins");
xhttp.setRequestHeader("Content-type","application/json;charset=utf-8")

xhttp.send(
    JSON.stringify({
    name: name,
    username: username,
    email:email,
    password:password,
    logged:0
})
)

details()


}





  
  function login() {
    const userName = document.getElementById('username').value;
    const userpass = document.getElementById('password').value;
    const xmlParser = new XMLHttpRequest();
    xmlParser.open("GET", "http://localhost:3000/Logins");
    xmlParser.send();
    var login = false
    xmlParser.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                if (userName == object['uname'] && userpass == object['password']) {
                    const userXmlObj = new XMLHttpRequest();
                    userXmlObj.open("PUT", `http://localhost:3000/Logins/${object['id']}`);
                    userXmlObj.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                    userXmlObj.send(
                        JSON.stringify(
                            {
                                name :  object['name'],               
                                uname: object['uname'],
                                email: object['email'],
                                password: object['password'],
                                logged: 1
                            }
                        )
                    );
                    login = true
                    window.location.href="./Home.html";
                    break;
                }

            }
            if (!login) {
                alert("Login Failed");
            }
        }

    }
}


function logout(){
  const xmlParser = new XMLHttpRequest();
  xmlParser.open("GET", "http://localhost:3000/Logins");
  xmlParser.send();
  var login = true;
  xmlParser.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          const objects = JSON.parse(this.responseText);
          for (let object of objects) {
           if(object.logged==1){
                  const userXmlObj = new XMLHttpRequest();
                  userXmlObj.open("PUT", `http://localhost:3000/Logins/${object['id']}`);
                  userXmlObj.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                  userXmlObj.send(
                      JSON.stringify(
                          {
                              name :  object['name'],               
                              uname: object['uname'],
                              email: object['email'],
                              password: object['password'],
                              logged: 0
                          }
                      )
                  );
                  login = false
                  
                  break;
              }
            }

          }
          if (!login) {
              alert("Logged off");
              window.location.href="./login.html";
          }
      }

  }

