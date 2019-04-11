<template>
  <div class=" ">
    <div class="columns is-centered is-mobile ">
      <div class="column is-6 ">
        <div class=" box ">

          <h3 class=" title is-3 has-text-centered "> Citas </h3>
          <hr>
          <h3 class=" title is-4 has-text-centered "> Doctor: Ricardo Marttinez </h3>

          <h3 class=" subtitle is-5 has-text-centered "> Paciente: Alan Ramirez </h3>
          <hr>

          <div class="level">
            <div class="level-item">
              Fecha: <strong> 23/4/2019 </strong>
            </div>
            <div class="level-item">
              Hora: <strong> 8:20 PM </strong>
            </div>
          </div>
          <hr>
          <div class="level">
            <div class="level-item">
              Fecha: <strong> 16/4/2019 </strong>
            </div>
            <div class="level-item">
              Hora: <strong> 8:20 PM </strong>
            </div>
          </div>
          <hr>
          <div class="level">
            <div class="level-item">
              Fecha: <strong> 08/4/2019 </strong>
            </div>
            <div class="level-item">
              Hora: <strong> 8:20 PM </strong>
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
