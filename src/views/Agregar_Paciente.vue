<template>
  <div class="columns is-centered is-mobile ">
    <div class="column is-10 ">
      <div class=" box ">
        <h3 class=" title is-4 has-text-centered " v-if=" progress == 36 "> Paciente:
          {{ patient.name + ' ' +  patient.lastname_1  }} </h3>
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

        <div v-if=" progress == 12.5 ">

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
                  <input class="input" type="text" placeholder="Primer apellido" v-model=" patient.lastname_1 ">
                </div>
              </div>
              <div class="field">
                <label class="label">Apellido Materno </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Segundo apellido" v-model=" patient.lastname_2 ">
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
                  <input class="input" type="number" min="1" max="200" v-model=" patient.age ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Fecha de nacimiento </label>
                <div class="control">
                  <input class="input" type="date" placeholder="Fecha de nacimento" v-model=" patient.birthdate  ">
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
                  <input class="input" type="text" placeholder="Hijos" v-model=" patient.children  ">
                </div>
              </div>


            </div>

          </div>


        </div>


        <div v-if=" progress == 37.5 ">
          <div class="columns">
            <div class="column is-6">

              <div class="field">
                <label class="label"> Dirección </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Dirección" v-model=" patient.direction  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Colonia </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Colonia" v-model=" patient.colony  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Código postal </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Código postal" v-model=" patient.cp  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Ciudad </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Ciudad" v-model=" patient.city  ">
                </div>
              </div>


            </div>
            <div class="column is-6">

              <div class="field">
                <label class="label"> Telefono </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Telefono" v-model=" patient.telephone  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Tel.Oficina </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Tel.Oficina" v-model=" patient.office  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Celular </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Celular" v-model=" patient.cellphone  ">
                </div>
              </div>
              <div class="field">
                <label class="label">E-Mail</label>
                <div class="control">
                  <input class="input" type="text" placeholder="example@gmail.com" v-model=" patient.email ">
                </div>
              </div>


            </div>
          </div>

        </div>

        <div v-if=" progress == 62.5 ">

          <div class="field">
            <label class="label"> Historial clinico</label>
            <div class="control">
              <textarea class="textarea" placeholder="Historial clinico" v-model=" patient.record "></textarea>
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
                <router-link :to="'/agregar-cita/' + id_patient " class=" button is-info is-rounded  ">
                  Agendar Cita
                </router-link>

              </div>
            </div>
          </section>
        </div>


        <div v-if=" progress < 100 ">
          <hr>
          <div class="level">
            <div class="level-left">
              <button class="button is-danger " v-if=" progress > 12.5 && progress < 100 " @click=" prev_info() ">
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
        progress: 12.5,
        // progress: 62.5,
        id_patient: null,
        patient: {
          name: '',
          lastname_1: '',
          lastname_2: '',
          sex: '',
          age: 4,
          birthdate: '',
          civil_status: '',
          children: 0,
          // seccion2
          direction: '',
          colony: '',
          cp: '',
          city: '',
          telephone: '',
          office: '',
          cellphone: '',
          email: '',
          record: '',
        },

        sex: [{
            name: 'Hombre',
            value: 'Hombre',
          },
          {
            name: 'Mujer',
            value: 'Mujer',
          },
          {
            name: 'Indefinido',
            value: 'indefinido',
          }
        ],
        civil_status: [{
            name: 'Casado',
            value: 'casado',
          },
          {
            name: 'Soltero',
            value: 'soltero',
          },
          {
            name: 'Union Libre',
            value: 'libre',
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
          case 12.5:
            constraints = {
              // name: 'Arturo Ramirez',
              // lastname_1: 'Ramirez',
              // lastname_2: 'Carrizales',
              // sex: 'Hombre',
              // age: 18,
              // birthdate: new Date(),
              // civil_status: 'Soltero',
              // children: 2,
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
              lastname_1: {
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
              lastname_2: {
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
              },
              age: {
                presence: {
                  message: "Falta la edad"
                },
                numericality: {
                  onlyInteger: true,
                  greaterThan: 0,
                  lessThanOrEqualTo: 200, 
                  notGreaterThan: "Falta la edad"
                }
              },

              birthdate: {
                datetime: {
                  dateOnly: true,
                  message: "Recuerda agregar la fecha de nacimiento "
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
               
            };
            break;
          case 37.5:
            constraints = {
              // direction: 'Nuevo Leon, Mexico',
              // colony: 'Aspreso #2015',
              // cp: 6764,
              // city: 'Monterrey',
              // telephone: 789789789,
              // office: 456456456,
              // cellphone: 123123123,
              // email: 'alan@gmail.com',
              direction: {
                presence: {
                  message: "Falta la dirección"
                },
                length: {
                  minimum: 2,
                  maximum: 30,
                  tooShort: "Dirección: Al menos 2 caracteres",
                  tooLong: "Dirección: Máximo 30 caracteres"
                }
              },
              colony: {
                presence: {
                  message: "Falta la colonia"
                },
                length: {
                  minimum: 2,
                  maximum: 30,
                  tooShort: "Colonia: Al menos 2 caracteres",
                  tooLong: "Colonia: Máximo 30 caracteres"
                }
              },
              cp: {
                presence: {
                  message: "Falta el codigo postal"
                },
                length: {
                  minimum: 2,
                  maximum: 30,
                  tooShort: "CP: Al menos 2 caracteres",
                  tooLong: "CP: Máximo 30 caracteres"
                }
              },
              city: {
                presence: {
                  message: "Falta la ciudad"
                },
                length: {
                  minimum: 2,
                  maximum: 30,
                  tooShort: "Ciudad: Al menos 2 caracteres",
                  tooLong: "Ciudad: Máximo 30 caracteres"
                }
              },
              telephone: {
                presence: {
                  message: "Falta el telefono "
                },
                length: {
                  minimum: 8,
                  maximum: 12,
                  tooShort: "Tel: Al menos 8 digitos",
                  tooLong: "Tel: Máximo 12 digitos"
                }
              },
              office: {
                presence: {
                  message: "Falta el telefono de oficina "
                },
                length: {
                  minimum: 8,
                  maximum: 12,
                  tooShort: "Tel.Oficina: Al menos 8 digitos",
                  tooLong: "Tel.Oficina: Máximo 12 digitos"
                }
              },
              cellphone: {
                presence: {
                  message: "Falta el numero celular"
                },
                length: {
                  minimum: 8,
                  maximum: 12,
                  tooShort: "Numero celular: Al menos 8 digitos",
                  tooLong: "Numero celular: Máximo 12 digitos"
                }
              },
              email: {
                email: {
                  message: "Falta el correo del paciente"
                }
              },
            };
            break;
          case 62.5:
            constraints = {
              // record: 'Nuevo Leon, Mexico', 
              record: {
                presence: {
                  message: "Falta el historial medico"
                },
                length: {
                  minimum: 2,
                  maximum: 30,
                  tooShort: "Historial: Al menos 2 caracteres",
                  tooLong: "Historial: Máximo 30 caracteres"
                }
              },
            };
            break;
        }

        validate.async(this.patient, constraints).then(
          data => {
            if (this.progress == 62.5) {
              this.progress = 100;
              this.add_patient(this.patient);
            } else {
              this.progress += 25;

            }
            console.log(data);
          },
        ).catch(errors => {
          this.$modal_error.show(errors);
        });



      },

      add_patient: function (data) {
        this.$http.post("user/add-patient", data).then(
          response => {
            this.id_patient = response.data.id_patient;
            // this.is_loading = false;
            // this.$store.commit(types.MUTATE_UPDATE_SESSION, response.data);
 
          }
        ).catch(errors => {
          // this.$modal_error.show(errors.data.errors);
        });
      },
      
      prev_info: function () {
        this.progress -= 25;
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
