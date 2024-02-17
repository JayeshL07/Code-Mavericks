import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
//import { totalScore } from './test_script.js';
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
  const db = getFirestore(app);
  const navbarUsername = document.getElementById('navbar-username');
  
  const container = document.getElementById('container');
  const registerBtn = document.getElementById('register');
  const loginBtn = document.getElementById('login');
  const signinForm = document.getElementById('signin-form');
  const signupForm = document.getElementById('signup-form');
  
  let email ;
  let password;
  let name;
  let score;
  
  registerBtn.addEventListener('click', () => {
      container.classList.add("active");
  });
  
  signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
       email = document.getElementById('signup').value;
       password = document.getElementById('pass-signup').value;
       name = document.getElementById('name-signup').value;
       score = {}; 
      createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
              const user = userCredential.user;
              alert("User created successfully!");              
              if (navbarUsername) { 
                navbarUsername.innerText = "Welcome, " + email; // Update navbar with username
            }
                try {
                const docRef = await setDoc(doc(db,'Profiles',email), {
                    email: email,
                    password: password,
                    name: name,
                    score: score,
                });
                console.log("data available");
                window.location.href = "index.html"; // Redirect to main page
                } catch (e) {
                console.error("Error adding document: ", e);
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
      email = document.getElementById('signin').value;
      password = document.getElementById('pass-signin').value;
  
      signInWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
              const user = userCredential.user;
            //   alert("User signed in successfully!");
              const navbarUsername = document.getElementById('navbar-username');
              if (navbarUsername) {
                  navbarUsername.innerText = "Welcome, " + email; // Update navbar with username
              }
            const docRef = doc(db,"Profiles",email);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const datas = docSnap.data();
                email = datas.email;                                  
                password = datas.password;
                   name = datas.name;
                   score = datas.score;
            console.log("Document data:", docSnap.data());
            console.log(Object.keys(datas.score));
            console.log(Object.values(datas.score));
            window.location.href = "index.html"; // Redirect to main page
            } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            }
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert(errorMessage);
          });
  });
  export{db,email,password,name,score,app};
 /* export async function submit(){
    const docRef = doc(db, "Profiles", email);
    const docSnap = await getDoc(docRef);
    const today = new Date().toLocaleDateString();

    if (docSnap.exists()) {
        const data = docSnap.data();
        // Add or update the key-value pair in the map field
        data.score[today] = totalScore;

        // Update the document in Firestore
        await updateDoc(docRef, {
            score: data.score
        });

        console.log("Element added to map field successfully!");
    } else {
        console.log("Document does not exist!");
    }
  }*/

  