<template>
  <div>
    <h3 class=" title is-4  ">Configuración</h3>
    <div class="level">
      <div class="level-item">
        <button class="button " @click=" option = 'datos' " :class=" { 'is-info':  option == 'datos' } ">
          Datos personales
        </button>

      </div>
      <div class="level-item">
        <button class="button " @click=" option = 'esp' " :class=" { 'is-info':  option == 'esp' } ">
          Especialidades
        </button>
      </div>

    </div>
    <hr>


    <form @submit=" update_info " class=" columns " v-if=" option == 'datos'">
      <div class="column is-6 ">
        <div class="field">
          <label class="label">Nombre(s)</label>
          <div class="control">
            <input class="input" type="text" placeholder="Nombre" v-model="  user.name  ">
          </div>
        </div>

        <div class="field">
          <label class="label"> Apellido paterno </label>
          <div class="control">
            <input class="input" type="text" placeholder="Apellido paterno" v-model="  user.lastname_1  ">
          </div>
        </div>
        <div class="field">
          <label class="label"> Apellido materno </label>
          <div class="control">
            <input class="input" type="text" placeholder="Apellido materno" v-model="  user.lastname_2  ">
          </div>
        </div>

        <div class="field">
          <label class="label">Correo</label>
          <div class="control">
            <input class="input" type="text" placeholder="Correo" v-model="  user.email  ">
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="field">
          <label class="label"> RFC </label>
          <div class="control">
            <input class="input" type="text" placeholder="RFC" v-model="  user.rfc  ">
          </div>
        </div>
        <div class="field">
          <label class="label"> Dirección </label>
          <div class="control">
            <input class="input" type="text" placeholder="Dirección" v-model="  user.direction  ">
          </div>
        </div>
        <div class="field">
          <label class="label"> Telefono </label>
          <div class="control">
            <input class="input" type="text" placeholder="Telefono" v-model="  user.telephone  ">
          </div>
        </div>

        <div class="field">
          <label class="label"> &nbsp; </label>
          <div class="control">
            <button class="button is-info is-fullwidth  " :class=" { 'is-loading': is_loading }  " > Guardar </button>
          </div>
        </div>
      </div>

    </form>

    <div v-if="option== 'esp'">
      <div class="level">
        <div class="level-left">
          <h3 class=" title is-4  ">Especialidades </h3>

        </div>
        <div class="level-rigth">
          <button class=" button is-info  ">
            Agregar
          </button>
        </div>
      </div>
      <div class="level">
        <div class="level-left">
          <p>
            <strong> Prostodoncia </strong>
          </p>

        </div>
        <div class="level-rigth">
          <div class="field is-grouped">
            <p class="control">
              <router-link to="/Signin" class="button is-danger ">
                <fa-icon icon='trash'></fa-icon>
              </router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="level">
        <div class="level-left">
          <p>
            <strong> Ortodoncia </strong>
          </p>

        </div>
        <div class="level-rigth">
          <div class="field is-grouped">
            <p class="control">
              <router-link to="/Signin" class="button is-danger ">
                <fa-icon icon='trash'></fa-icon>
              </router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="level">
        <div class="level-left">
          <p>
            <strong> Endodoncia </strong>
          </p>

        </div>
        <div class="level-rigth">
          <div class="field is-grouped">
            <p class="control">
              <router-link to="/Signin" class="button is-danger ">
                <fa-icon icon='trash'></fa-icon>
              </router-link>
            </p>
          </div>
        </div>
      </div>

    </div>
    <div v-if=" option == 'none'  " class=" has-text-centered ">
      <img src="../assets/info.png" alt="" width="100">
      <br>
      Selecciona una opción
      <br>
      <br>
      <br>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return ({
        option: 'none',
        user: {},
        is_loading: false,

      })
    },
    methods: {
      get_user_info() {
        this.$http.get("user/info").then(
          response => {
            this.user = response.body;
          }
        ).catch(errors => {});
      },

      update_info(event) {
        event.preventDefault();
        this.is_loading = true;
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
          rfc: {
            presence: {
              message: "Falta el RFC"
            },
            length: {
              minimum: 10,
              maximum: 30,
              tooShort: "RFC: Al menos 10 caracteres",
              tooLong: "RFC: Máximo 30 caracteres"
            }
          },

          lastname_1: {
            presence: {
              message: "Falta el apellido paterno"
            },
            length: {
              minimum: 3,
              maximum: 30,
              tooShort: "Apellido paterno: Al menos 3 caracteres",
              tooLong: "Apellido paterno: Máximo 30 caracteres"
            }
          },
          lastname_2: {
            presence: {
              message: "Falta el Apellido materno"
            },
            length: {
              minimum: 3,
              maximum: 30,
              tooShort: "Apellido materno: Al menos 3 caracteres",
              tooLong: "Apellido materno: Máximo 30 caracteres"
            }
          },

          direction: {
            presence: {
              message: "Falta la dirección"
            },
            length: {
              minimum: 3,
              maximum: 30,
              tooShort: "Dirección: Al menos 3 caracteres",
              tooLong: "Dirección: Máximo 30 caracteres"
            }
          },

          telephone: {
            presence: {
              message: "Falta el telefono"
            },
            length: {
              minimum: 8,
              maximum: 14,
              tooShort: "Telefono: Al menos 8 caracteres",
              tooLong: "Telefono: Máximo 14 caracteres"
            }
          },
          email: {
            email: {
              message: "Falta el correo"
            }
          },
        };

        validate.async(this.user, constraints).then(
          data => {
            this.$http.put("user/info", data).then(
              response => {
              this.is_loading = false;
              }
            ).catch(errors => {
              // this.$modal_error.show(errors.data.errors);
              // this.is_loading = false;
            });
          },
        ).catch(errors => {
          this.$modal_error.show(errors);
          this.is_loading = false;
        });




      }
    },
    created() {
      this.get_user_info();
    }


  }

</script>

<style>

</style>
