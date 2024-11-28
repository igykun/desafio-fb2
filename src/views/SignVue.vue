<template>
    <div class="signup-container">
      <h2>Registro</h2>
      <input v-model="email" type="email" placeholder="Correo electrónico" class="input-field">
      <input v-model="password" type="password" placeholder="Contraseña" class="input-field">
      <button @click="register" class="register-btn">Registrarse</button>
    </div>
  </template>
  
  <script>
  import { createUserWithEmailAndPassword, auth } from '@/auth';
  
  export default {
    name: 'SignView',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async register() {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
          const user = userCredential.user;
          console.log('Usuario registrado', user);
          this.$router.push('/login');
        } catch (error) {
          console.log('Error', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Fondo y contenedor principal */
  .signup-container {
    background: linear-gradient(to right, #00b140, #004c1f); /* Verde MHA */
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    font-family: 'Roboto', sans-serif;
  }
  
  h2 {
    font-size: 2.5rem;
    font-family: 'Impact', sans-serif;
    color: #f4a261; /* Color naranja característico de MHA */
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
    border-color: #ff6600; /* Color que resalta al enfocarse */
  }
  
  /* Estilo para el botón */
  .register-btn {
    padding: 12px 25px;
    background-color: #f4a261; /* Color naranja característico */
    color: #004c1f; /* Verde de MHA */
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .register-btn:hover {
    background-color: #ff6600;
    transform: scale(1.05);
  }
  
  .register-btn:active {
    background-color: #e35d00;
  }
  
  /* Agregar sombra al formulario */
  .signup-container {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
    padding: 30px;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.7);
  }
  </style>
  