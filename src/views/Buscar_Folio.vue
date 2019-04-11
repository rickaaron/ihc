<template>
  <div class=" ">
    <div class="columns is-centered is-mobile ">
      <div class="column is-6 ">
        <div class=" box ">

          <h3 class=" title is-3 has-text-centered "> Folio: CI-3123412342 </h3>
          <hr>
          <h3 class=" title is-4 has-text-centered "> Doctor: Ricardo Marttinez </h3>

          <h3 class=" subtitle is-5 has-text-centered "> Paciente: Alan Ramirez </h3>
          <div class="level">
            <div class="level-item">
              <button class="button is-info">
                Ver citas
              </button>
            </div>
            <div class="level-item">
              <button class="button is-info">
                Ver Expediente
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
        paciente: {
          sintomas: 'Dientes chuecos ',
          tratamiento: ' Radiografia, braquets, endodoncia ',
          receta: 'Paracettamol 10 tabletas, 1 cada 12 horas. Diprofenaco 10 tabletas, 1 cada 12 horas.',
        }
      })
    }
  }

</script>

<style>

</style>
