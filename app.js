// Replace with your Firebase config

const firebaseConfig = {
    apiKey: "AIzaSyDd9pitfYvIZVLzYzUn1GfHII3T-AgAOyk",
    authDomain: "restaurant-management-sy-903a4.firebaseapp.com",
    projectId: "restaurant-management-sy-903a4",
    storageBucket: "restaurant-management-sy-903a4.appspot.com",
    messagingSenderId: "735599866701",
    appId: "1:735599866701:web:ca0269e259cb1ad254fd04"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// References to UI elements
const signUpForm = document.getElementById('sign-up-form');
const signInForm = document.getElementById('sign-in-form');
const userAuth = document.getElementById('user-auth');
const userEmail = document.getElementById('user-email');

// Event listeners for authentication forms
signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    signUp(email, password);
});

signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    signIn(email, password);
});

// Firebase authentication functions
function signUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User signed up:', user);
            showUserAuth(user.email);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error (${errorCode}): ${errorMessage}`);
        });
}

function signIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User signed in:', user);
            showUserAuth(user.email);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error (${errorCode}): ${errorMessage}`);
        });
}

function signOut() {
    firebase.auth().signOut()
        .then(() => {
            console.log('User signed out');
            showAuthForms();
        })
        .catch((error) => {
            console.error('Sign Out Error', error);
        });
}

// UI update functions
function showUserAuth(email) {
    userAuth.style.display = 'block';
    userEmail.textContent = `Welcome, ${email}`;
    signUpForm.style.display = 'none';
    signInForm.style.display = 'none';
}

function showAuthForms() {
    userAuth.style.display = 'none';
    signUpForm.style.display = 'block';
    signInForm.style.display = 'block';
}

// Check if the user is already signed in
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        showUserAuth(user.email);
    } else {
        showAuthForms();
    }
});
