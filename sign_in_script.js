import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCpRgKMZvqAnsREbccnU8P8YZSWgsAtCnI",
    authDomain: "codem-84f90.firebaseapp.com",
    projectId: "codem-84f90",
    storageBucket: "codem-84f90.appspot.com",
    messagingSenderId: "1013379050544",
    appId: "1:1013379050544:web:06ace84b6eea9f265e51f5"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const navbarUsername = document.getElementById('navbar-username');
  
  const container = document.getElementById('container');
  const registerBtn = document.getElementById('register');
  const loginBtn = document.getElementById('login');
  const signinForm = document.getElementById('signin-form');
  const signupForm = document.getElementById('signup-form');
  
  registerBtn.addEventListener('click', () => {
      container.classList.add("active");
  });
  
  signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      var email = document.getElementById('signup').value;
      var password = document.getElementById('pass-signup').value;
  
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              const user = userCredential.user;
              alert("User created successfully!");
              window.location.href = "index.html"; // Redirect to main page
              if (navbarUsername) {
                navbarUsername.innerText = "Welcome, " + user.email; // Update navbar with username
            }
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert(errorMessage);
          });
  });
  
  loginBtn.addEventListener('click', () => {
      container.classList.remove("active");
  });
  
  signinForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      var email = document.getElementById('signin').value;
      var password = document.getElementById('pass-signin').value;
  
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              const user = userCredential.user;
            //   alert("User signed in successfully!");
              window.location.href = "index.html"; // Redirect to main page
              const navbarUsername = document.getElementById('navbar-username');
              if (navbarUsername) {
                  navbarUsername.innerText = "Welcome, " + user.email; // Update navbar with username
              }
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert(errorMessage);
          });
  });