<template>
  <div class="columns box ">
    <div class="column is-4 ">
      <div class="panel">
        <p class="panel-heading">
          Menu
        </p>
        <router-link :to="{ name: 'Dashboard', params: { option: 'pacientes' }}" class="panel-block"
          :class=" { 'is-active': option == 'pacientes' } ">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          Pacientes
        </router-link>
        <router-link :to="{ name: 'Dashboard', params: { option: 'citas' }}" class="panel-block"
          :class=" { 'is-active': option == 'citas' } ">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          Citas
        </router-link>
        <router-link :to="{ name: 'Dashboard', params: { option: 'recetas' }}" class="panel-block"
          :class=" { 'is-active': option == 'recetas' } ">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          Recetas
        </router-link>
        <router-link :to="{ name: 'Dashboard', params: { option: 'expediente' }}" class="panel-block"
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
        <recetas-comp v-if=" option == 'recetas'  ">

        </recetas-comp>
        <expediente-comp v-if=" option == 'expediente'  ">

        </expediente-comp>
      </div>

    </div>
  </div>
</template>

<script>
  import PacientesComp from '@/components/Pacientes.vue'
  import CitasComp from '@/components/Citas.vue'
  import RecetasComp from '@/components/Recetas.vue'
  import ExpedienteComp from '@/components/Expediente.vue'
  import {
    watch
  } from 'fs';

  export default {
    components: {
      PacientesComp,
      CitasComp,
      RecetasComp,
      ExpedienteComp,
    },
    data() {
      return ({
        option: 'none',
      })
    },
    mounted() {
      console.log(this.$route.params);
      this.option = this.$route.params.option;
    },
    watch: {
      '$route'(to, from) {
        this.option = this.$route.params.option;
        // react to route changes...
      }
    }
  }

</script>

<style>

</style>
