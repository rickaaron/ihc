<template>
  <div class=" ">
    <div class="columns is-centered is-mobile ">
      <div class="column is-10">
        <div class=" box ">

          <h3 class=" title is-3 has-text-centered "> Expediente </h3>
          <h3 class=" title is-4 has-text-centered is-capitalized"> Doctor:
            {{  doctor.name + ' ' + doctor.lastname_1 + ' ' + doctor.lastname_2  }} </h3>
          <h3 class=" subtitle is-5 has-text-centered "> Paciente: {{ patient.name }} </h3>

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
              <img src="../../assets/info.png" alt="" width="100">
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
  export default {
    data() {
      return ({
        uuid: null,
        patient: {},
        doctor: {},
        treatments: [],
      })
    },
    methods: {
      get_patient(uuid) {
        return this.$http.get("patient", {
          params: {
            uuid
          }
        }).then(
          response => {
            return response.body;
          }
        ).catch(errors => {});
      },


      get_doctor(id_doctor) {
        return this.$http.get("doctor", {
          params: {
            id_doctor
          }
        }).then(
          response => {
            return response.body;
          }
        ).catch(errors => {});
      },

      get_treatments(id_patient) {
        return this.$http.get("treatments", {
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
      this.uuid = this.$route.params.id;
      this.patient = await this.get_patient(this.uuid);

      if (this.patient != '') {
        this.doctor = await this.get_doctor(this.patient.f_id_user);
        this.treatments = await this.get_treatments(this.patient.id_patient);
        this.treatments = await this.tratmens_date(this.treatments);
      }
    }
  }

</script>

<style>

</style>
