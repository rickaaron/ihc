<template>
  <div>
    <nav-bar></nav-bar>

    <div class=" container   ">
      <router-view />

    </div>


    <br>
    <br>
    <br>
    <br>
    <br>
    <h4>Pruebas de links </h4>
    <div class="content">
      <ul>
        <li>
          <router-link to="/Login">Iniciar sesion</router-link>
        </li>
        <li>

          <router-link to="/Signin">Registrarse</router-link>
        </li>
        <li>

          <router-link to="/Dashboard/pacientes">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Paciente', params: { id: '123' }}"  >
            Paciente
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Cita', params: { id: '123' }}"  >
            Cita
          </router-link>
        </li>
      </ul>
    </div>
    <br>
  </div>
</template>
<script>
  import NavBar from '@/components/Nav.vue'
  export default {
    components: {
      NavBar
    }
  }

</script>

<style lang="scss">
  @import '~bulma/bulma';

</style>
