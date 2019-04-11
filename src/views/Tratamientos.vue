<template>
  <div>
    <h3 class=" title is-4  ">Tratamientos</h3>
    <hr>
    <ul>
      <li>
        <div class="level">
          <div class="level-left">
            <p>
              Cita: <strong> CI-123 </strong> , Paciente: <strong> Ramiro Martinez </strong>
            </p> 
          </div>
          <div class="level-rigth">
            <div class="field is-grouped">
              <p class="control">
                <router-link to="/Login" class="button is-success "> Receta </router-link>
              </p>
              <p class="control">
                <router-link to="/Login" class="button is-success ">Ver </router-link>
              </p>
              <p class="control">
                <router-link to="/Signin" class="button is-danger "> <fa-icon icon='trash'></fa-icon>  </router-link>
              </p>
            </div>
          </div>
        </div>
        <hr>
      </li>
      <li>
        <div class="level">
          <div class="level-left">
            <p>
              Cita: <strong> CI-2236 </strong> , Paciente: <strong> Aurora Martinez </strong>
            </p>  

          </div>
          <div class="level-rigth">
            <div class="field is-grouped">
              <p class="control">
                <router-link to="/Login" class="button is-success "> Receta </router-link>
              </p>
              <p class="control">
                <router-link to="/Login" class="button is-success ">Ver </router-link>
              </p>
              <p class="control">
                <router-link to="/Signin" class="button is-danger "> <fa-icon icon='trash'></fa-icon> </router-link>
              </p>
            </div>
          </div>
        </div>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {

  }

</script>

<style>

</style>
