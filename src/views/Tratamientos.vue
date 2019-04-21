<template>
  <div>
    <h3 class=" title is-4  ">Tratamientos</h3>
    <hr>
    <div class="level">
      <div class="level-item">
        <button class=" button  " :class=" { 'is-info': option == 'activos' } " @click="option = 'activos'  ">
          Activos
        </button>
      </div>
      <div class="level-item">
        <button class=" button  " :class=" { 'is-info': option == 'eliminados' } " @click="option = 'eliminados'  ">
          Eliminados
        </button>
      </div>
    </div>

    <div v-if=" option == 'activos'">
      <ul>
        <li>
          <div class="level">
            <div class="level-left">
              <p>
                Folio: <strong> CI-123 </strong> , Paciente: <strong> Ramiro Martinez </strong>
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
              <p>
                Folio: <strong> CI-2236 </strong> , Paciente: <strong> Aurora Martinez </strong>
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
    <div v-if=" option == 'eliminados'">
      <ul>
        <li>
          <div class="level">
            <div class="level-left">
              <p>
                Folio: <strong> CI-123 </strong> , Paciente: <strong> Ramiro Martinez </strong>
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
              <p>
                Folio: <strong> CI-2236 </strong> , Paciente: <strong> Aurora Martinez </strong>
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
