<template>

  <div class="columns is-mobile is-centered">
    <div class="column is-6 ">
      <div class="box has-text-centered">
        <h1 class=" title is-3 "> Bienvenido al consultorio </h1>
        <img alt="Vue logo" src="../assets/dent.png">
        <p class=" subtitle is-6 has-text-justified"> Plataforma creada para Dentistas. Lleva el control de tus pacientes asi como de sus
          citas y expedientes. </p>

        <hr>

        <h3 class=" subtitle is-4"> <strong> ¿Eres un paciente? </strong> Busca tu folio: </h3>

        <div class="field has-addons has-addons-centered ">
          <div class="control">
            <input class="input is-rounded " type="text" placeholder="#Folio" v-model=" uuid ">
          </div>
          <div class="control"> 

            <router-link :to="{ name: 'buscar-folio', params: { id: uuid }}" class="button is-info is-rounded ">

              <fa-icon icon='search'></fa-icon>

            </router-link>
            
 
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script> 

  export default {
    name: 'home', 
    data(){
      return( {
        uuid: '',
      }  )
    }
  }

</script>
