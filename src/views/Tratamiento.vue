<template>
  <div class=" ">
    <div class="columns is-centered is-mobile ">
      <div class="column is-6 ">
        <div class=" box ">

          <h3 class=" title is-2 has-text-centered "> Tratamiento </h3>
          <h3 class=" title is-4 has-text-centered "> Paciente: Alan Ramirez </h3>

          <h4 class=" subtitle is-5 is-marginless "> Sintomas : </h4>
          <p>
            {{ paciente.sintomas}}
          </p>
          <br>
          <h4 class=" subtitle is-5 is-marginless"> Tratamiento: </h4>
          <p>
            {{ paciente.tratamiento}}
          </p>
          <br>
          <h4 class=" subtitle is-5 is-marginless "> Receta: </h4>
          <p>
            {{ paciente.receta}}
          </p>

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
