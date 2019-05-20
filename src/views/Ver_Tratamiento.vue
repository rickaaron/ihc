<template>
  <div class=" ">
    <div class="columns is-centered is-mobile ">
      <div class="column is-6 ">
        <div class=" box ">

          <h3 class=" title is-2 has-text-centered "> Tratamiento </h3>
          <h3 class=" title is-4 has-text-centered "> Paciente: {{ treatment.name  }} </h3>

          <h4 class=" subtitle is-5 is-marginless "> Sintomas : </h4>
          <p>
            {{ treatment.symptom}}
          </p>
          <br>
          <h4 class=" subtitle is-5 is-marginless"> Tratamiento: </h4>
          <p>
            {{ treatment.treatment}}
          </p>
          <br>

          <!-- <h4 class=" subtitle is-5 is-marginless "> Receta: </h4>
          <p>
            {{ treatment.receta}}
          </p> -->

        </div>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return ({
        treatment: {},
        paciente: {
          sintomas: 'Dientes chuecos ',
          tratamiento: ' Radiografia, braquets, endodoncia ',
          receta: 'Paracettamol 10 tabletas, 1 cada 12 horas. Diprofenaco 10 tabletas, 1 cada 12 horas.',
        }
      })
    },
    methods: {
      get_treatment(id_treatment) {
        this.$http.get("user/treatment", {
          params: {
            id_treatment
          }
        }).then(
          response => {
            this.treatment = response.data;
          }
        ).catch(errors => {});
      }

    },
    created() {
      this.get_treatment(this.$route.params.id);
    }


  }

</script>

<style>

</style>
