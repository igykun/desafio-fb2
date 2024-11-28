<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="navbar__page nav-link" to="/signup">Registro</router-link>
          </li>
          <li class="nav-item">
            <router-link class="navbar__page nav-link" to="/login">Iniciar sesión</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="navbar__page nav-link" to="/">Inicio</router-link>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { RouterLink, RouterView } from 'vue-router';
export default {
}
</script>
<style>
  
</style>