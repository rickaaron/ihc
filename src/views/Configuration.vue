<template>
  <div>
    <h3 class=" title is-4  ">Configuración</h3>
    <hr>
    <form action="" class=" columns ">
      <div class="column is-6 ">
        <div class="field">
          <label class="label">Nombre(s)</label>
          <div class="control">
            <input class="input" type="text" placeholder="Nombre" v-model="  session.nombre  "  >
          </div>
        </div>

        <div class="field">
          <label class="label"> Apellido paterno </label>
          <div class="control">
            <input class="input" type="text" placeholder="Apellido paterno" v-model="  session.apellido_paterno  " >
          </div>
        </div>
        <div class="field">
          <label class="label"> Apellido materno </label>
          <div class="control">
            <input class="input" type="text" placeholder="Apellido materno" v-model="  session.apellido_materno  " >
          </div>
        </div>

        <div class="field">
          <label class="label">Correo</label>
          <div class="control">
            <input class="input" type="text" placeholder="Correo" v-model="  session.email  " >
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="field">
          <label class="label"> RFC </label>
          <div class="control">
            <input class="input" type="text" placeholder="RFC" v-model="  session.rfc  " >
          </div>
        </div>
        <div class="field">
          <label class="label"> Dirección </label>
          <div class="control">
            <input class="input" type="text" placeholder="Dirección" v-model="  session.direccion  " >
          </div>
        </div>
        <div class="field">
          <label class="label"> Telefono </label>
          <div class="control">
            <input class="input" type="text" placeholder="Telefono" v-model="  session.telefono  " >
          </div>
        </div>
        
        <div class="field">
          <label class="label"> &nbsp; </label>
          <div class="control">
            <button class="button is-info is-fullwidth "> Guardar </button>
          </div>
        </div> 
      </div>

    </form>

  </div>
</template>

<script>
  export default {
      data(){
          return( {
              session:{
                  nombre: 'Ricardo',
                  apellido_paterno: 'Martinez',
                  apellido_materno: 'Alvarado',
                  email: 'ricardo@gmail.com',
                  rfc: 'ARASD123123dasd',
                  direccion: 'Valle colorado 232, Monterrey , Nuevo Leon, Mexico',
                  telefono: '899646689',
                  
              } 
          } )
      }
  }

</script>

<style>

</style>
