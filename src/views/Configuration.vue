<template>
  <div>
    <h3 class=" title is-4  ">Configuración</h3>

    <div class="level is-mobile ">
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
            <button class="button is-info is-fullwidth  " :class=" { 'is-loading': is_loading }  "> Guardar </button>
          </div>
        </div>
      </div>

    </form>

    <div v-if="option== 'esp' ">
      <div class="level is-mobile ">
        <div class="level-left">
          <h3 class=" title is-4  ">Especialidades </h3>

        </div>
        <div class="level-rigth">
          <button class=" button is-info " @click=" is_visible = true ">
            Agregar
          </button>
        </div>
      </div>


      <div class="level is-mobile" v-for=" ( special, index  ) in user_specials  " :key=" index ">
        <div class="level-left">
          <p>
            <strong> {{ special.specialtie }} </strong>
          </p>

        </div>
        <div class="level-rigth">

          <div class="field is-grouped">
            <p class="control">

              <button class="button is-danger" @click=" delete_special( index  )  ">
                <fa-icon icon='trash'></fa-icon>
              </button>

            </p>
          </div>

        </div>
      </div>

      <div v-if=" user_specials.length == 0   && option == 'esp'  " class=" has-text-centered ">
        <img src="../assets/info.png" alt="" width="100">
        <br>
        Sin datos
        <br>
        <br>
        <br>
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



    <div class="modal" :class=" { 'is-active':is_visible == true}">
      <div class="modal-background" @click=" hide() "></div>
      <div class="modal-card">
        <header class="modal-card-head has-text-centered has-background-info  ">
          <p class="modal-card-title is-size-3 has-text-white">
            <fa-icon :icon=' modal.icon '></fa-icon> {{ modal.title }}
          </p>
          <button class="delete" aria-label="close" @click=" hide() "></button>
        </header>

        <section class="modal-card-body">
          <div class="columns is-multiline is-mobile ">
            <div class="column is-full">
              <div class="content">
                <div class="field">
                  <label class="label"> Nueva Especialidad </label>
                  <div class="control">
                    <input type="text" class="input" placeholder=" Nueva Especialidad " v-model=" special.name ">
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <footer class="modal-card-foot  columns">
          <div class="column">
            <div class="level is-mobile ">
              <div class="level-left ">
                <button class="button is-rounded is-info " @click=" hide() ">Salir</button>

              </div>
              <div class="level-right">
                <button class="button is-rounded is-success " @click=" post_special() ">Agregar</button>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return ({
        is_visible: false,
        option: 'none',
        special: {
          name: ''
        },
        modal: {
          icon: 'send',
          title: 'Agregar Especialidad '
        },
        user: {},
        is_loading: false,
        user_specials: [],

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
      get_user_special() {
        this.$http.get("user/special").then(
          response => {
            this.user_specials = response.body;
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
            ).catch(errors => {});
          },
        ).catch(errors => {
          this.$modal_error.show(errors);
          this.is_loading = false;
        });




      },

      delete_special(index) {

        this.$http.delete("user/special", {
          params: {
            id: this.user_specials[index].id_spe,
          }
        }).then(
          response => {
            if (response.body == 1) {
              this.user_specials.splice(index, 1);
            }
          }
        ).catch(errors => {});
      },

      hide() {
        this.is_visible = false;
      },

      post_special: function (data) {
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
        }
        validate.async(this.special, constraints).then(
          data => {

            this.$http.post("user/special", data).then(

              response => {
                this.is_loading = false;
                this.user_specials.push({
                  id_spe: response.body,
                  specialtie: data.name
                });
                this.special.name = '';
                this.hide();
              }
            ).catch(errors => {
              // this.$modal_error.show(errors.data.errors);
              this.is_loading = false;
            });

          },
        ).catch(errors => {
          this.$modal_error.show(errors);
          this.is_loading = false;
        });
      },


    },
    created() {
      this.get_user_info();
      this.get_user_special();
    }


  }

</script>

<style>

</style>
