<template>
  <div class="columns is-mobile is-centered ">
    <div class="column is-4  box ">
      <h3>Inicia sesion </h3>
      <form action="">
        <div class="field">
          <label class="label">Correo</label>
          <div class="control">
            <input class="input" type="text" placeholder="Correo">
          </div>
        </div>
        <div class="field">
          <label class="label">Contraseña</label>
          <div class="control">
            <input class="input" type="password" placeholder="contraseña">
          </div>
        </div>
        <div class="buttons has-addons is-right">
          <button class="button is-info "> Enviar </button>
        </div>
      </form>
      <p>
        Aún no tienes una cuenta <router-link to="/Signin">Registrarse</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style>

</style>
