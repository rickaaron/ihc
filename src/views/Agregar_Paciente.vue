<template>
  <div class="columns is-centered is-mobile ">
    <div class="column is-10 ">
      <div class=" box ">
        <h3 class=" title is-4 has-text-centered " v-if=" progress == 36 "> Paciente:
          {{ patient.name + ' ' +  patient.lastname1  }} </h3>
        <div class=" barra-container ">
          <progress class="progress is-info" id="barra" :value="progress" max="100"></progress>
          <div class="level is-mobile">
            <div class="level-item">
              <button class=" button is-info is-large is-circle ">
                1
              </button>
            </div>
            <div class="level-item">
              <button class=" button is-info is-large is-circle ">
                2
              </button>
            </div>
            <div class="level-item">
              <button class=" button is-info is-large is-circle ">
                3
              </button>
            </div>
            <div class="level-item">
              <button class=" button is-info is-large is-circle ">
                4
              </button>
            </div>
          </div>
        </div>

        <div v-if=" progress == 12 ">
          <div class="columns">
            <div class="column is-6">
              <div class="field">
                <label class="label ">Nombres</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.name ">
                </div>
              </div>
              <div class="field">
                <label class="label ">Apellido Paterno </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.lastname1 ">
                </div>
              </div>
              <div class="field">
                <label class="label">Apellido Materno </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.lastname2 ">
                </div>
              </div>
              <div class="field">
                <label class="label">Sexo</label>
                <div class="control">
                  <div class="select is-fullwidth">
                    <select v-model=" patient.sex ">
                      <option :value=" se.value " v-for=" ( se, index ) in sex " :key=" index "> {{se.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

            </div>
            <div class="column is-6">
              <div class="field">
                <label class="label">Edad </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.age ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Fecha de nacimiento </label>
                <div class="control">
                  <input class="input" type="date" placeholder="Nombre" v-model=" patient.birthdate  ">
                </div>
              </div>
              <div class="field">
                <label class="label">Estado civil</label>
                <div class="control">
                  <div class="select is-fullwidth">
                    <select v-model=" patient.civil_status ">
                      <option :value=" status.value " v-for=" ( status, index ) in civil_status " :key=" index ">
                        {{status.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="field">
                <label class="label"> Nuero de hijos </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.children  ">
                </div>
              </div>
            </div>

          </div>


        </div>


        <div v-if=" progress == 36 ">
          <div class="columns">
            <div class="column is-6">
              <div class="field">
                <label class="label"> Dirección </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.direccion  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Colonia </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.colonia  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Código postal </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.cp  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Ciudad </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.ciudad  ">
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label class="label"> Telefono </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.telefono  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Oficina </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.oficina  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Celular </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.celular  ">
                </div>
              </div>
              <div class="field">
                <label class="label">E-Mail</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.email ">
                </div>
              </div>
            </div>
          </div>

        </div>

        <div v-if=" progress == 60 ">
          <div class="field">
            <label class="label"> Historial clinico</label>
            <div class="control">
              <textarea class="textarea" placeholder="Historial clinico" v-model=" patient.historial "></textarea>
            </div>
          </div>
        </div>

        <div v-if=" progress == 100 ">
          <br>
          <section class="hero   has-text-info is-medium">
            <div class="hero-body">
              <div class="container has-text-centered  ">
                <fa-icon icon='smile-beam' size="6x"></fa-icon>
                <br>
                <br>
                <h3 class="title is-4 has-text-info ">
                  Paciente: {{ patient.name }}, a sido agregado con exito.
                </h3>
                <link-router class=" button is-info is-rounded  "> Agendar Cita </link-router>
              </div>
            </div>
          </section>
        </div>


        <div v-if=" progress < 100 ">
          <hr>
          <div class="level">
            <div class="level-left">
              <button class="button is-danger " v-if=" progress > 12 && progress < 100 " @click=" prev_info() ">
                <fa-icon icon='long-arrow-alt-left'></fa-icon>
              </button>
            </div>
            <div class="level-rigth">
              <button class="button is-info " @click=" next_info() ">
                <fa-icon icon='chevron-circle-right'></fa-icon>
              </button>
            </div>
          </div>
        </div>


      </div>

    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return ({
        progress: 12,
        patient: {
          name: 'Arturo Ramirez',
          lastname1: 'Ramirez',
          lastname2: 'Carrizales',
          sex: 'Hombre',
          age: 18,
          birthdate: new Date(),
          civil_status: 'Soltero',
          children: 2,
          // seccion2
          direccion: 'Nuevo Leon, Mexico',
          colonia: 'Aspreso #2015',
          cp: 6764,
          ciudad: 'Monterrey',
          telefono: 23242256,
          oficina: 23242256,
          celular: 23242256,
          email: 'alan@gmail.com',

        },

        sex: [{
            name: 'Hombre',
            value: 'Hombre',
          },
          {
            name: 'Mujer',
            value: 'Mujer',
          }
        ],
        civil_status: [{
            name: 'Casado',
            value: 'Casado',
          },
          {
            name: 'Soltero',
            value: 'Soltero',
          },
          {
            name: 'Union Libre',
            value: 'Union Libre',
          }
        ]

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
                this.$store.commit(types.MUTATE_UPDATE_SESSION, response.data);

                setTimeout(() => {
                  this.$router.push('/dashboard');
                }, 200)

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
      next_info: function () {
        let constraints;
        switch (this.progress) {
          case 12:
            constraints = {
              lastname1: 'Ramirez',
              lastname2: 'Carrizales',
              sex: 'Hombre',
              age: 18,
              birthdate: new Date(),
              civil_status: 'Soltero',
              children: 2,

              name: {
                presence: {
                  message: "Falta el nombre"
                },
                length: {
                  minimum: 2,
                  maximum: 30,
                  tooShort: "Nombre: Al menos 2 caracteres",
                  tooLong: "Nombre: Máximo 30 caracteres"
                }
              },
              lastname1: {
                presence: {
                  message: "Falta el Primer Apellido"
                },
                length: {
                  minimum: 2,
                  maximum: 30,
                  tooShort: "Primer Apellido: Al menos 2 caracteres",
                  tooLong: "Primer Apellido: Máximo 30 caracteres"
                }
              },
              lastname2: {
                presence: {
                  message: "Falta el Segundo Apellido"
                },
                length: {
                  minimum: 2,
                  maximum: 30,
                  tooShort: "Segundo Apellido: Al menos 2 caracteres",
                  tooLong: "Segundo Apellido: Máximo 30 caracteres"
                }
              },
              sex: {
                presence: {
                  message: "Falta el Sexo"
                },
                length: {
                  minimum: 2,
                  maximum: 30,
                  tooShort: "Sexo: Al menos 2 caracteres",
                  tooLong: "Sexo: Máximo 30 caracteres"
                }
              },
              age: {
                presence: {
                  message: "Falta la edad"
                },
                numericality: {
                  onlyInteger: true,
                  greaterThan: 0,
                  lessThanOrEqualTo: 30,
                  even: true,
                  notGreaterThan: "Ingresa una fecha d"
                }
              },
              birthdate: {
                presence: {
                  message: "Falta la fecha de nacimiento"
                },
                length: {
                  minimum: 2,
                  maximum: 30,
                  tooShort: "Fecha de nacimiento: Al menos 2 caracteres",
                  tooLong: "Fecha de nacimiento: Máximo 30 caracteres"
                }
              },
              civil_status: {
                presence: {
                  message: "Falta el estado civil"
                },
                length: {
                  minimum: 2,
                  maximum: 30,
                  tooShort: "Estado civil: Al menos 2 caracteres",
                  tooLong: "Estado civil: Máximo 30 caracteres"
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
            break;
        }

        this.progress += 24;

      },

      prev_info: function () {
        this.progress -= 24;
      }

    }
  }

</script>

<style>
  .is-circle {
    border-radius: 50% 50%;
  }

  .barra-container {
    position: relative;
  }

  #barra {
    position: absolute;
    top: 19px;
  }

</style>
