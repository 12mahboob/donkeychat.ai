// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9moSmavQ5DIidA3tXUG_gp4EmtRoHj80",
    authDomain: "nawweb-33c02.firebaseapp.com",
    databaseURL: "https://nawweb-33c02-default-rtdb.firebaseio.com",
    projectId: "nawweb-33c02",
    storageBucket: "nawweb-33c02.appspot.com",
    messagingSenderId: "287954517771",
    appId: "1:287954517771:web:376cb8d8c59f2bce3d2c0e",
    measurementId: "G-ECM7MKYRW3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert('Login successful!');
            window.location.href = 'index.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});

// Sign Up
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            user.updateProfile({
                displayName: name
            }).then(() => {
                alert('Sign-up successful!');
                window.location.href = '../Html/donkeychat.html';
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});
