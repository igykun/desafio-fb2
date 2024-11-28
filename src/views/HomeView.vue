<script>
export default {
  name: 'HomeView',
  data() {
    return {
      
    }
  }
}
</script>

<template>
  <main class="hero-container">
    <div class="content">
      <h1>Bienvenido a la Academia de Héroes</h1>
      <p class="description">Aquí comienza tu entrenamiento para convertirte en un héroe</p>
      <button class="hero-btn">¡Comencemos!</button>
    </div>
  </main>
</template>

<style scoped>
/* Fondo inspirado en My Hero Academia */
.hero-container {
  background: linear-gradient(to right, #00b140, #004c1f); /* Verde MHA */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.2);
}

.content {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
}

h1 {
  font-size: 3rem;
  font-family: 'Impact', sans-serif;
  color: #f4a261;
  margin-bottom: 10px;
}

.description {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.hero-btn {
  padding: 10px 20px;
  background-color: #f4a261; /* Color naranja característico */
  color: #004c1f;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero-btn:hover {
  background-color: #ff6600;
  transform: scale(1.1);
}
</style>
