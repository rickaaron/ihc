<template>
  <div class="columns is-centered  ">
    <div class="column is-4 box ">

      <h3>Regirtrate</h3>
      <p>
        ¿Ya tienes una cuenta ? <router-link to="/Login">Inicia sesion</router-link>
      </p>
      <form @submit=" sing_in ">
        <div class="field">
          <label class="label">Nombre(s)</label>
          <div class="control">
            <input class="input" type="text" placeholder="Nombre" v-model=" form_data.name ">
          </div>
        </div>
        <div class="field">
          <label class="label">Correo</label>
          <div class="control">
            <input class="input" type="email" placeholder="Correo" v-model=" form_data.email ">
          </div>
        </div>
        <div class="field">
          <label class="label">Contraseña</label>
          <div class="control">
            <input class="input" type="password" placeholder="contraseña" v-model=" form_data.password ">
          </div>
        </div>
        <div class="buttons has-addons is-right">
          <button class="button is-info " :class=" { 'is-loading': is_loading } "> Enviar </button>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
  import * as types from '../store/types';

  export default {
    data() {
      return ({
        is_loading: false,
        form_data: {
          name: '',
          email: '',
          password: '',
        }
      })
    },
    methods: {
      sing_in: function (event) {
        event.preventDefault();
        const constraints = {
          name: {
            presence: {
              message: "Falta el nombre"
            },
            length: {
              minimum: 3,
              maximum: 30,
              tooShort: "Nombre: Al menos 3 caracteres",
              tooLong: "Nombre: Máximo 30 caracteres"
            }
          },
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
            this.$http.post("signin", data).then(
              response => {
                this.is_loading = false;
                this.$store.commit( types.MUTATE_UPDATE_SESSION , response.data );
                
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
