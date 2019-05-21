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
            <fa-icon icon='user-injured'></fa-icon>
          </span>
          Pacientes
        </router-link>
        <router-link :to="{ name: 'Dashboard/Option', params: { option: 'citas' }}" class="panel-block"
          :class=" { 'is-active': option == 'citas' } ">
          <span class="panel-icon">
            <fa-icon icon='table'></fa-icon>
          </span>
          Citas
        </router-link>
        <router-link :to="{ name: 'Dashboard/Option', params: { option: 'tratamientos' }}" class="panel-block"
          :class=" { 'is-active': option == 'tratamientos' } ">
          <span class="panel-icon">
            <fa-icon icon='file-alt'></fa-icon>
          </span>
          Tratamientos
        </router-link>
        <router-link :to="{ name: 'Dashboard/Option', params: { option: 'configuracion' }}" class="panel-block"
          :class=" { 'is-active': option == 'configuracion' } ">
          <span class="panel-icon"> 
            <fa-icon icon='cog'></fa-icon>
          </span>
          Configuración
        </router-link>
      </div>


    </div>
    <div class="column is-8  ">
      <div class="box" id="das-box">
        <pacientes-comp v-if=" option == 'pacientes'  ">

        </pacientes-comp>
        <citas-comp v-if=" option == 'citas'  ">

        </citas-comp>
        <tratamientos-comp v-if=" option == 'tratamientos'  ">

        </tratamientos-comp>
        <config-comp v-if=" option == 'configuracion'  " >

        </config-comp>

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
  import PacientesComp from './Pacientes.vue'
  import CitasComp from './Citas.vue'
  import TratamientosComp from './Tratamientos.vue' 
  import ConfigComp from './Configuration.vue'
  import {
    watch
  } from 'fs';

  export default {
    components: {
      PacientesComp,
      CitasComp,
      TratamientosComp, 
      ConfigComp,
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
#das-box{
  max-height: 633px;
  overflow-y: scroll;
}
</style>
