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
    <div class="level">
      <div class="level-item">
        <button class=" button  " :class=" { 'is-info': option == 'normales' } " @click="option = 'normales'  ">
          Activos
        </button>
      </div>
      <div class="level-item">
        <button class=" button  " :class=" { 'is-info': option == 'eliminados' } " @click="option = 'eliminados'  ">
          Eliminados
        </button>
      </div>
    </div>

    <div v-if=" option == 'normales' ">
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
                  <router-link to="/Signin" class="button is-danger ">
                    <fa-icon icon='trash'></fa-icon>
                  </router-link>
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
                  <router-link to="/Signin" class="button is-danger ">
                    <fa-icon icon='trash'></fa-icon>
                  </router-link>
                </p>
              </div>
            </div>
          </div>
          <hr>
        </li>
      </ul>
    </div>

    <div v-if=" option == 'eliminados' ">
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
              </div>
            </div>
          </div>
          <hr>
        </li>
      </ul>
    </div>

    <div v-if=" option == 'none'  " class=" has-text-centered ">
      <img src="../assets/info.png" alt="" width="100">
      <br>
      Selecciona una opción
      <br>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return ({
        option: 'none'
      })
    }
  }

</script>

<style>

</style>
