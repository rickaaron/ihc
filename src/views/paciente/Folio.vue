<template>
  <div class=" ">
    <div class="columns is-centered is-mobile ">
      <div class="column is-6 ">
        <div class=" box " v-if=" patient != ''">

          <h3 class=" title is-3 has-text-centered "> Folio: {{ patient.uuid  }} </h3>
          <hr>
          <h3 class=" title is-4 has-text-centered is-capitalized"> Doctor:
            {{  doctor.name + ' ' + doctor.lastname_1 + ' ' + doctor.lastname_2  }} </h3>

          <h3 class=" subtitle is-5 has-text-centered "> Paciente: {{ patient.name }} </h3>
          <div class="level">
            <div class="level-item">

              <router-link :to="{ name: 'citas', params: { id: uuid }}" class="button is-info is-rounded ">
                Ver citas
              </router-link>

            </div>
            <div class="level-item">

              <router-link :to="{ name: 'expediente', params: { id: uuid }}" class="button is-info is-rounded ">
                Ver Expediente
              </router-link>

            </div>
          </div>
        </div>

        <div v-else class=" box ">
          <h3 class=" title is-3 has-text-centered "> Ese folio no existe </h3>
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

      
    },

    async created() {
      this.uuid = this.$route.params.id;
      this.patient = await this.get_patient(this.uuid);
      if (this.patient != '') {
        this.doctor = await this.get_doctor(this.patient.f_id_user);
      }
    }
  }

</script>

<style>

</style>
