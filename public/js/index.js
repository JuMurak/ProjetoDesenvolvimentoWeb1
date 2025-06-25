const firebaseConfig = {
  apiKey: "AIzaSyCn3yRYlAThOjhYWltvxOnjPLI4x9TiOwo",
  authDomain: "mysticshop-b418b.firebaseapp.com",
  databaseURL: "https://mysticshop-b418b-default-rtdb.firebaseio.com",
  projectId: "mysticshop-b418b",
  storageBucket: "mysticshop-b418b.firebasestorage.app",
  messagingSenderId: "307821669084",
  appId: "1:307821669084:web:5ec9fc53072c0be3a4a219"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
