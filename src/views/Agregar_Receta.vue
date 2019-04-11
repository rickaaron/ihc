<template>
  <div class=" ">
    <div class="columns is-centered is-mobile ">
      <div class="column is-6 ">
        <div class=" box ">
          <h3 class=" title is-2 has-text-centered "> Agregar Receta </h3>
          <h3 class=" title is-4 has-text-centered "> Paciente: Alan Ramirez </h3>
          <h3 class=" title is-6 has-text-centered "> Folio de la cita : CI-12312312 </h3>
          <!-- <p> (Datos editables)</p> -->
          <div class="field">
            <label class="label"> Receta :</label>
            <div class="control">
              <textarea class="textarea" placeholder="Receta" v-model=" receta "></textarea>
            </div>
          </div>
          <div class="buttons has-addons is-right">
            <button class="button is-info "> Guardar </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    dat() {
      return ({
        receta: 'Paracettamol 10 tabletas, 1 cada 12 horas. Diprofenaco 10 tabletas, 1 cada 12 horas.'
      });
    }
  }

</script>

<style>

</style>
