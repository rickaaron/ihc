<template>
  <div class=" ">
    <div class="columns is-centered is-mobile ">
      <div class="column is-6 ">
        <div class=" box ">

          <h3 class=" title is-2 has-text-centered "> Cita </h3>
          <h3 class=" title is-4 has-text-centered "> Paciente: Alan Ramirez </h3>
          <p> (Datos editables)</p>
          <div class="field">
            <label class="label"> Sintomas :</label>
            <div class="control">
              <textarea class="textarea" placeholder="Historial clinico" v-model=" paciente.sintomas "></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label"> Tratamiento:</label>
            <div class="control">
              <textarea class="textarea" placeholder="Historial clinico" v-model=" paciente.receta "></textarea>
            </div>
          </div>
          <div class="buttons has-addons is-right">
            <button class="button is-info "> Guardar </button>
          </div>

          <!-- <hr>
          <div class="level">
            <div class="level-left">
              <router-link to="/Login" class="button is-success "> Expediente </router-link>


            </div>
            <div class="level-rigth">
              <router-link to="/Login" class="button is-success "> Agendar Cita </router-link>
            </div>
          </div> -->
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
          sintomas: 'Presion alta, dolor de cabza',
          receta: 'Paracettamol 10 tabletas, 1 cada 12 horas. Diprofenaco 10 tabletas, 1 cada 12 horas.',

        }
      })
    }
  }

</script>

<style>

</style>
