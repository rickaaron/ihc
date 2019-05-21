<template>
  <div>
    <div class="level is-mobile ">
      <div class="level-left">
        <h3 class=" title is-4  ">Pacientes</h3>
      </div>
      <div class="level-rigth">
        <router-link to="/agregar-paciente" class=" button is-info  ">
          Agregar
        </router-link>
      </div>
    </div>
    <hr>
    <div class="level is-mobile ">
      <div class="level-item">
        <button class=" button  " :class=" { 'is-info': option == 'normales' } "
          @click=" get_patients(  'active' ) , option = 'normales'   ">
          Activos
        </button>
      </div>
      <div class="level-item">
        <button class=" button  " :class=" { 'is-info': option == 'eliminados' } "
          @click="option = get_patients(  'deleted' ) ,   option = 'eliminados'  ">
          Eliminados
        </button>
      </div>
    </div>

    <ul v-if=" patients.length > 0  ">

      <li v-for=" (patient, index ) in patients " :key=" index">
        <div class="level is-mobile ">
          <div class="level-left">
            <p>
              <strong> {{ patient.name }} </strong>
            </p>

          </div>
          <div class="level-rigth">

            <div class="field is-grouped" >

              <p class="control" v-if=" option == 'normales'" >
                <router-link :to="'/paciente/' + patient.id_patient  " class="button is-success ">Ver </router-link>
              </p>

              <p class="control" v-if=" patient.status == 'active'"   >
                <button @click=" delete_patient( index )" class="button is-danger ">
                  <fa-icon icon='trash'></fa-icon>
                </button>
              </p>

              <p class="control" v-if=" patient.status == 'deleted'"  >
                <button @click=" delete_patient_perm( index )" class="button is-danger ">
                  <fa-icon icon='trash'></fa-icon>
                </button>
              </p>


            </div>


          </div>
        </div>
        <hr>
      </li>

    </ul>
    
    <div v-if=" patients.length == 0   && option != 'none'  "  class=" has-text-centered " > 
      <img src="../assets/info.png" alt="" width="100">
      <br>
      Sin datos
      <br>
      <br>
      <br> 
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
        patients: [],
        option: 'none'
      })
    },
    methods: {

      get_patients(type) {

        this.$http.get("user/get-patients", {
          params: {
            type
          }
        }).then(

          response => {
            this.patients = response.body;

          }
        ).catch(errors => {

        });
      },


      delete_patient(index) {
        this.$http.delete("user/patients", {
          params: {
            id: this.patients[index].id_patient,
          }
        }).then(
          response => {
            if (response.body == 1) { 
              this.patients.splice(index, 1);
            }
          }
        ).catch(errors => {
        });
      },

      delete_patient_perm(index) {
        this.$http.delete("user/patients-perm", {
          params: {
            id: this.patients[index].id_patient,
          }
        }).then(
          response => {
            if (response.body == 1) { 
              this.patients.splice(index, 1);
            }
          }
        ).catch(errors => {
        });
      }



    },

  }

</script>

<style>

</style>
