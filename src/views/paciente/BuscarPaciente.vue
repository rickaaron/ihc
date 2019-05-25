<template>
  <div class="box  has-background-primary dental has-text-centered  has-text-white ">
    <div class=" has-text-centered ">
      <h1 class=" title is-3 "> ¿ Olvidaste tu cita ? </h1>
      <h1 class=" title is-3 "> ¿ Quieres revisar tu expediente ? </h1>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>

    <h3 class=" title is-4 " > Teclea tu folio: </h3>
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

    <br>
    <br>
    <br>
    <br>

  </div>
</template>

<script>
  export default {
      data(){
          return ( {
              uuid: '',
          })
      }
  }

</script>


<style>


.dental{
  background-image: url( '../../assets/dental.jpg');
  background-position: center;
  background-size: cover;
}
</style>
