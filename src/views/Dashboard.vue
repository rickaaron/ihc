<template>
  <div class="columns box ">
    <div class="column is-4 ">
      <div class="panel">
        <p class="panel-heading">
          Menu
        </p>
        <router-link :to="{ name: 'Dashboard/Option', params: { option: 'pacientes' }}" class="panel-block"
          :class=" { 'is-active': option == 'pacientes' } ">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          Pacientes
        </router-link>
        <router-link :to="{ name: 'Dashboard/Option', params: { option: 'citas' }}" class="panel-block"
          :class=" { 'is-active': option == 'citas' } ">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          Citas
        </router-link>
        <router-link :to="{ name: 'Dashboard/Option', params: { option: 'tratamientos' }}" class="panel-block"
          :class=" { 'is-active': option == 'tratamientos' } ">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          Tratamientos
        </router-link>
        <router-link :to="{ name: 'Dashboard/Option', params: { option: 'expediente' }}" class="panel-block"
          :class=" { 'is-active': option == 'expediente' } ">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          Expediente
        </router-link>
      </div>


    </div>
    <div class="column is-8  ">
      <div class="box">
        <pacientes-comp v-if=" option == 'pacientes'  ">

        </pacientes-comp>
        <citas-comp v-if=" option == 'citas'  ">

        </citas-comp>
        <tratamientos-comp v-if=" option == 'tratamientos'  ">

        </tratamientos-comp>
        <expediente-comp v-if=" option == 'expediente'  ">

        </expediente-comp>
        <div v-if=" option == 'none'  " class=" has-text-centered ">
          <img src="../assets/info.png" alt="" width="100">
          <br>
          Selecciona una opcion 
          <br>
          <br>
          <br>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import PacientesComp from '@/components/Pacientes.vue'
  import CitasComp from '@/components/Citas.vue'
  import TratamientosComp from '@/components/Recetas.vue'
  import ExpedienteComp from '@/components/Expediente.vue'
  import {
    watch
  } from 'fs';

  export default {
    components: {
      PacientesComp,
      CitasComp,
      TratamientosComp,
      ExpedienteComp,
    },
    data() {
      return ({
        option: 'none',
      })
    },
    methods: {
      set_option: function () {
        if (this.$route.params.option) {
          this.option = this.$route.params.option;
        }else{
          this.option = 'none';
        }
      }
    },
    mounted() {
      console.log(this.$route.params);
      this.set_option();
    },
    watch: {
      '$route'(to, from) {
        this.set_option();

      }
    }
  }

</script>

<style>

</style>
