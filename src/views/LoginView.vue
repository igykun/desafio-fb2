<template>
    <div class="login-container">
      <h2>Iniciar sesión</h2>
      <input v-model="email" type="email" placeholder="Ingresa tu correo" required class="input-field">
      <input v-model="password" type="password" placeholder="Ingresa tu contraseña" required class="input-field">
      <button @click="signIn" class="login-btn">Aceptar</button>
    </div>
  </template>
  
  <script>
  import { signInWithEmailAndPassword, auth } from '@/auth';
  
  export default {
    name: 'LoginView',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async signIn() {
        try {
          const { email, password } = this;
          const { user } = await signInWithEmailAndPassword(auth, email, password);
          console.log('Usuario autenticado', user);
          this.$router.push('/');
        } catch (error) {
          console.error('Error al intentar iniciar sesión', error.message);
          if (error.code === 'auth/invalid-credential') {
            this.$router.push('/signup');
          }
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Fondo y contenedor principal */
  .login-container {
    background: linear-gradient(to right, #00b140, #004c1f); /* Verde de My Hero Academia */
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    font-family: 'Roboto', sans-serif;
  }
  
  /* Estilo para el título */
  h2 {
    font-size: 2.5rem;
    font-family: 'Impact', sans-serif;
    color: #f4a261; /* Naranja MHA */
    margin-bottom: 20px;
    text-align: center;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  }
  
  /* Estilo para los inputs */
  .input-field {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 1rem;
    padding: 10px;
    margin: 15px 0;
    border: 2px solid #f4a261;
    border-radius: 5px;
    width: 250px;
    transition: border-color 0.3s;
  }
  
  .input-field::placeholder {
    color: #b3b3b3;
  }
  
  .input-field:focus {
    border-color: #ff6600; /* Resalta al enfocarse */
  }
  
  /* Estilo para el botón */
  .login-btn {
    padding: 12px 25px;
    background-color: #f4a261; /* Naranja MHA */
    color: #004c1f; /* Verde */
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .login-btn:hover {
    background-color: #ff6600;
    transform: scale(1.05);
  }
  
  .login-btn:active {
    background-color: #e35d00;
  }
  
  /* Agregar sombra al formulario */
  .login-container {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
    padding: 30px;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.7);
  }
  </style>
  