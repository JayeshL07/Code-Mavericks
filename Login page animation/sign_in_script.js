import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');

registerBtn.addEventListener('click', () => {
    console.log("a");
    container.classList.add("active");
});

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("b");  // Fix: Correct reference to signup button
    var email = document.getElementById('signup').value;
    var password = document.getElementById('pass-signup').value;
    
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("user id created");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
});

loginBtn.addEventListener('click', () => {
    console.log("c");
    container.classList.remove("active");
});

signinForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Fix: Correct reference to signin button
    console.log("d");
    var email = document.getElementById('signin').value;
    var password = document.getElementById('pass-signin').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("user sign in");
            
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
