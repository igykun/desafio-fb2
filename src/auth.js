// import { initializeApp } from 'firebase/app';
import firebaseApp from '@/firebaseConfig'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';

// const firebaseConfig={
//     apiKey: "AIzaSyBtRX2yVyj9yx_t4ukpDW3z_pgnW8qq_kQ",
//   authDomain: "fir-auth-d83ed.firebaseapp.com",
//   projectId: "fir-auth-d83ed",
//   storageBucket: "fir-auth-d83ed.firebasestorage.app",
//   messagingSenderId: "779974783700",
//   appId: "1:779974783700:web:90ba4e14f9c2a619b88141"
// }

// const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const logout = async () =>{
    try {
        await signOut(auth);
        console.log('La sesion ha terminado...');
    } catch (error) {
        console.log('Error al cerrar sesión ', error.message);
    }
};

export { auth, logout, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged }
