<template>
  <div class="columns is-mobile is-centered ">

    <form @submit=" login" class="column is-4  box ">
      <h3 class=" title is-3 ">Inicia sesion </h3>
      <div class="field">
        <label class="label">Correo</label>
        <div class="control">
          <input class="input" type="email" placeholder="Correo" v-model=" form_data.email  ">
        </div>
      </div>
      <div class="field">
        <label class="label">Contraseña</label>
        <div class="control">
          <input class="input" type="password" placeholder="contraseña" v-model=" form_data.password  ">
        </div>
      </div>
      <div class="buttons has-addons is-right">
        <button class="button is-info "> Enviar </button>
      </div>
      <p>
        Aún no tienes una cuenta ? <router-link to="/Signin">Registrarse</router-link>
      </p>
    </form>

  </div>
</template>

<script>
  import * as types from '../store/types';

  export default {
    data() {
      return ({
        is_loading: false,
        form_data: {
          email: '',
          password: '',
        }
      })
    },
    methods: {
      login: function (event) {
        event.preventDefault();
        const constraints = {
          email: {
            email: {
              message: "Falta el correo"
            }

          },
          password: {
            presence: {
              message: "Falta la contraseña "
            },
            length: {
              minimum: 8,
              maximum: 30,
              tooShort: " Contraseña: Al menos 8 caracteres",
              tooLong: " Contraseña: Máximo 30 caracteres"
            }
          },
        };

        validate.async(this.form_data, constraints).then(
          data => {
            this.$http.post("login", data).then(
              response => {
                this.is_loading = false;
                this.$store.commit(types.MUTATE_UPDATE_SESSION, response.data);

                setTimeout(() => {
                  this.$router.push('/dashboard');
                }, 200 ) 
              }
            ).catch(errors => {
              this.$modal_error.show(errors.data.errors);
              this.is_loading = false;
            });
          },
        ).catch(errors => {
          this.$modal_error.show(errors);
          this.is_loading = false;
        });
      },

    }
  }

</script>

<style>

</style>
