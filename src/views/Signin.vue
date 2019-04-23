<template>
  <div class="columns is-centered  ">
    <div class="column is-4 box ">

      <h3>Regirtrate</h3>
      <p>
        ¿Ya tienes una cuenta ? <router-link to="/Login">Inicia sesion</router-link>
      </p>
      <form  @submit=" sing_in ">
        <div class="field">
          <label class="label">Nombre(s)</label>
          <div class="control">
            <input class="input" type="text" placeholder="Nombre" v-model=" form_data.name "  >
          </div>
        </div>
        <div class="field">
          <label class="label">Correo</label>
          <div class="control">
            <input class="input" type="email" placeholder="Correo"  v-model=" form_data.email "  >
          </div>
        </div>
        <div class="field">
          <label class="label">Contraseña</label>
          <div class="control">
            <input class="input" type="password" placeholder="contraseña"  v-model=" form_data.pass "  >
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
    data() {
      return ({
        form_data: {
          name: '',
          email: '',
          pass: '',
        }
      })
    },
    methods:{
      sing_in( event ){
        event.preventDefault();
        // this.$http.post().then().catch( response  )
        console.log( this.form_data );
        
      }
    }
  }

</script>

<style>

</style>
