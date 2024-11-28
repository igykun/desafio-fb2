// import { initializeApp } from 'firebase/app';
import firebaseApp from '@/firebaseConfig'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';

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
