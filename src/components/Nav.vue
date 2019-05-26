<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">

    <div class="navbar-brand">

      <router-link class="navbar-item" to="/">
        <img alt="Vue logo" src="../assets/logo_2.png">
      </router-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
      @click=" active  = !active "
        data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

    </div>

    <div id="navbarBasicExample" class="navbar-menu " :class="  { 'is-active': active  }  " >

      <div class="navbar-start" v-if=" session.id == null">

        <router-link class="navbar-item" to='/'>
          Inicio
        </router-link>
        <router-link class="navbar-item" to='login'>
          Doctor
        </router-link>
        <router-link class="navbar-item" to='buscar-paciente'>
          Paciente
        </router-link>
        <router-link class="navbar-item" to='contacto'>
          Contacto
        </router-link>


      </div>

      <div class="navbar-end" v-if=" session.id != null">

        <router-link class="navbar-item  " to="/dashboard">
          <button class=" button is-info">
            Panel de control &nbsp;
            <fa-icon icon='home'></fa-icon>
          </button>
        </router-link>

        <router-link class="navbar-item  " to="/logout">
          <button class=" button is-danger ">
            Salir &nbsp;
            <fa-icon icon='sign-out-alt'></fa-icon>
          </button>
        </router-link>

      </div>
    </div>
  </nav>


   
    


</template>

<script>
  import * as types from '../store/types';
  import {
    mapGetters,
    mapActions
  } from 'vuex';

  export default {
    data() {
      return ({
active:false,

      })
    },
    computed: {
      ...mapGetters({
        'session': types.SESSION,
      }),
    },
  }

</script>

<style>

</style>
