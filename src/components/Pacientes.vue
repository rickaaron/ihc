<template>
  <div>
    <div class="level">
      <div class="level-left">
        <h3 class=" title is-4  ">Pacientes</h3>

      </div>
      <div class="level-rigth">
        <button class=" button is-info  ">
          Agregar
        </button>
      </div>
    </div>
    <hr>
    <ul>
      <li>
        <div class="level">
          <div class="level-left">
            <p>
               <strong>Ramiro Martinez </strong>
            </p>

          </div>
          <div class="level-rigth">
            <div class="field is-grouped">
              <p class="control">
                <router-link to="/Login" class="button is-success ">Ver </router-link>
              </p>
              <p class="control">
                <router-link to="/Signin" class="button is-danger ">X</router-link>
              </p>
            </div>
          </div>
        </div>
        <hr>
      </li>
      <li>
        <div class="level">
          <div class="level-left">
             <strong> Aurora Martinez </strong> 

          </div>
          <div class="level-rigth">
            <div class="field is-grouped">
              <p class="control">
                <router-link to="/Login" class="button is-success ">Ver </router-link>
              </p>
              <p class="control">
                <router-link to="/Signin" class="button is-danger ">X</router-link>
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
