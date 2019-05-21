<template>
  <div class="columns is-centered is-mobile ">
    <div class="column is-10 ">
      <div class=" box ">
        <h3 class=" title is-4 has-text-centered "> Paciente: {{ patient.name + ' ' + patient.lastname_1 }} </h3>
          <h3 class=" title is-6 has-text-centered "> Folio: {{ patient.uuid  }} </h3>
  
        <form @submit=" update_patient ">

          <div class="columns">
            <div class="column is-3 ">
              <div class="field">
                <label class="label ">Nombres</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.name ">
                </div>
              </div>
              <div class="field">
                <label class="label ">Apellido Paterno </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.lastname_1 ">
                </div>
              </div>
              <div class="field">
                <label class="label">Apellido Materno </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.lastname_2 ">
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

            <div class="column is-3 ">
              <div class="field">
                <label class="label">Edad </label>
                <div class="control">
                  <input class="input" type="number" min="1" max="200" placeholder="Nombre" v-model=" patient.age ">
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
            <div class="column is-3 ">
              <div class="field">
                <label class="label"> Dirección </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.direction  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Colonia </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.colony  ">
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
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.city  ">
                </div>
              </div>
            </div>
            <div class="column is-3 ">
              <div class="field">
                <label class="label"> Telefono </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.telephone  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Oficina </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.office  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Celular </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" patient.cellphone  ">
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

          <div class="field">
            <label class="label"> Historial clinico</label>
            <div class="control">
              <textarea class="textarea" placeholder="Historial clinico" v-model=" patient.record "></textarea>
            </div>
          </div>

          <div class="level is-mobile ">
            <div class="level-left">
            </div>
            <div class="level-right">
              <button class=" button is-primary ">
                Actualizar
              </button>
            </div>
          </div>

        </form>
        <hr>


        <div class="level is-mobile">
          <div class="level-left">
            <router-link :to="'/ver-expediente/' + patient.id_patient " class="button is-success "> Expediente </router-link>
          </div>
          <div class="level-rigth">
            <router-link :to="'/agregar-cita/' + patient.id_patient " class="button is-success "> Agendar Cita
            </router-link>
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
        is_loading: false,
        id_patient: null,
        patient: {
          name: ' ',
          lastname_1: ' ',
          lastname_2: ' ',
          sex: ' ',
          age: '',
          birthdate: ' ',
          civil_status: ' ',
          children: 2,
          // seccion2
          direction: ' ',
          colony: ' ',
          cp: ' ',
          city: ' ',
          telephone: ' ',
          office: ' ',
          cellphone: ' ',
          email: ' ',
          record: ' ',
        },

        sex: [{
            name: 'Hombre',
            value: 'hombre',
          },
          {
            name: 'Mujer',
            value: 'mujer',
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

      update_patient(event) {
        this.is_loading = true;
        event.preventDefault();
        const constraints = {
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
              lessThanOrEqualTo: 30,
              even: true,
              notGreaterThan: "Ingresa una fecha nacimiento"
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
          age: {
            presence: {
              message: "Falta la edad"
            },
            numericality: {
              onlyInteger: true,
              greaterThanOrEqualTo: 0,
              lessThanOrEqualTo: 200,
              even: true,
              notGreaterThanOrEqual: "Ingresa una fecha d"
            }
          },
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


        }

        validate.async(this.patient, constraints).then(
          data => {

            this.$http.put("user/patient", this.patient).then(
              response => {
                console.log(response.data);
                this.is_loading = false;

                // this.patient = response.data;
              }
            ).catch(errors => {
              this.is_loading = false;

            });


          },
        ).catch(errors => {
          this.$modal_error.show(errors);
        });


      }
    },

    created() {
      // console.log( this.$route.params );
      this.$http.get("user/get-patient", {
        params: {
          id_patient: this.$route.params.id
        }
      }).then(
        response => {
          console.log( new Date( response.data.birthdate ) );

          // response.data.birthdate = new Date( response.data.birthdate );
          this.patient = response.data;
        }
      ).catch(errors => {});
    }
  }

</script>

<style>

</style>
