<template>
  <div class=" ">
    <div class="columns is-centered is-mobile ">
      <div class="column is-6 ">
        <div class=" box ">

          <h3 class=" title is-3 has-text-centered "> Expediente </h3>
          <hr>
          <h3 class=" title is-4 has-text-centered is-capitalized "> Doctor: {{ session.name }} </h3>

          <h3 class=" subtitle is-5 has-text-centered "> Paciente: {{ patient.name  }} </h3>
          <h3 class=" subtitle is-6 has-text-centered "> Folio: {{ patient.uuid  }} </h3>
          <div v-if=" treatments.length > 0 ">
            <div v-for=" ( treatment, index  ) in treatments" :key=" index ">
              <hr>
              <div class="level">
                <div class="level-item">
                  Fecha: <strong> {{ treatment.date }} </strong>
                </div>
                <div class="level-item">
                  Hora: <strong> {{ treatment.hour }} </strong>
                </div>
              </div>
              <p>
                <strong> Tramaiento: </strong>
                {{ treatment.symptom }}
                <br>
                <strong> Receta: </strong>
                {{ treatment.treatment }}
              </p>
            </div>
          </div>

          <div v-else>
            <div v-if=" treatments.length == 0 " class=" has-text-centered ">
              <img src="../assets/info.png" alt="" width="100">
              <br>
              Sin datos
              <br>
              <br>
              <br>
            </div>
          </div>

        </div>



      </div>

    </div>
  </div>
</template>

<script>
  import * as types from '../store/types';

  import {
    mapGetters,
    mapActions
  } from 'vuex';
  import {
    constants
  } from 'crypto';

  export default {
    data() {
      return ({
        treatments: [],
        patient: {
          name: '',
        },
        paciente: {
          sintomas: 'Dientes chuecos ',
          tratamiento: ' Radiografia, braquets, endodoncia ',
          receta: 'Paracettamol 10 tabletas, 1 cada 12 horas. Diprofenaco 10 tabletas, 1 cada 12 horas.',
        }

      })
    },
    computed: {
      ...mapGetters({
        'session': types.SESSION,
      }),
    },
    methods: {

      get_treatments(id_patient) {
        this.$http.get("user/patient/treatments", {
          params: {
            id_patient
          }
        }).then(
          response => {
            this.treatments = response.data;

            this.treatments = this.tratmens_date(this.treatments);
          }
        ).catch(errors => {});
      },


      get_patient(id_patient) {
        return this.$http.get("user/get-patient", {
          params: {
            id_patient
          }
        }).then(
          response => {
            return response.body;
          }
        ).catch(errors => {});
      },

      tratmens_date(treatments) {
        for (let index in treatments) {
          treatments[index].date = moment(treatments[index].date).format('MM/DD/YYYY');
        }
        return treatments;
      }

    },
    async created() {
      this.patient = await this.get_patient(this.$route.params.id);
      this.get_treatments(this.$route.params.id);
    }

  }

</script>
