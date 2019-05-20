<template>
  <div class="columns is-centered is-mobile ">
    <div class="column is-10 ">
      <div class=" box ">
        <h3 class=" title is-4 has-text-centered "> Paciente: {{ patient.name + patient.lastname_1 }} </h3>
        <p> (Datos editables)</p>

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



        <div class="level">
          <div class="level-left">
            <router-link to="/Login" class="button is-success "> Expediente </router-link>
          </div>
          <div class="level-rigth"> 

            <router-link :to="'/agregar-cita/' + patient.id_patient " class="button is-success "> Agendar Cita </router-link>
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
        id_patient: null,
        patient: {
          name: ' ',
          lastname_1: ' ',
          lastname_2: ' ',
          sex: ' ',
          age:  '',
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
    created() {
      // console.log( this.$route.params );
      this.$http.get("user/get-patient", {
        params: {
          id_patient: this.$route.params.id
        }
      }).then(
        response => {
          this.patient = response.data; 
        }
      ).catch(errors => { 
      });
    }
  }

</script>

<style>

</style>
