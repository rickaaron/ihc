<template>
  <div class=" column ">
    <div class="level is-mobile">
      <div class="level-left">
            <router-link to="/" ><img alt="Vue logo" src="../assets/logo.png"> </router-link>
      </div>
      <div class="level-rigth">
        <div class="field is-grouped" v-if=" session.id == null">
          <p class="control">
            <router-link to="/Login" class="button is-info ">Iniciar sesion </router-link>
          </p>
          <p class="control">
            <router-link to="/Signin" class="button is-info ">Registrarse</router-link>

          </p>
        </div>
        <div class="field is-grouped" v-if=" session.id != null">
          <p class="control">
            <router-link to="/dashboard" class="button is-info "> <fa-icon icon='home'></fa-icon>  </router-link>
          </p>
          <p class="control">
            <router-link to="/logout" class="button is-danger "> <fa-icon icon='sign-out-alt'></fa-icon> </router-link>

          </p>
        </div>

      </div>
    </div>
    <hr>
  </div>
</template>

<script>
  export default {
    data(){
      return( {
        session:{
          id: 1,
        }
      } )
    }
  }

</script>

<style>

</style>
