<template>
  <div class="columns is-centered  ">
    <div class="column is-4 box ">

      <h3>Regirtrate</h3>
      <p>
        ¿Ya tienes una cuenta ? <router-link to="/Login">Inicia sesion</router-link>
      </p>
      <form action="">
        <div class="field">
          <label class="label">Nombre(s)</label>
          <div class="control">
            <input class="input" type="text" placeholder="Nombre">
          </div>
        </div>
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
    </div>

  </div>
</template>

<script>
  export default {

  }

</script>

<style>

</style>
