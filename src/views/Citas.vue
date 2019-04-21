<template>
  <div>
    <h3 class=" title is-4 ">Citas</h3>
    <hr>
    <div class="level">
      <div class="level-item">
        <button class=" button  " :class=" { 'is-info': option == 'activas' } " @click="option = 'activas'  ">
          Activas
        </button>
      </div>
      <div class="level-item">
        <button class=" button  " :class=" { 'is-info': option == 'eliminadas' } " @click="option = 'eliminadas'  ">
          Eliminadas
        </button>
      </div>
    </div>

    <div v-if=" option == 'activas' ">
      <ul>
        <li>
          <div class="level">
            <div class="level-left">
              23/4/2019 , 8:20 PM - <strong>Ramiro Martinez </strong>

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
              23/4/2019 , 8:20 PM - <strong>Aurora Martinez </strong>

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
    <div v-if=" option == 'eliminadas' ">
      <ul>
        <li>
          <div class="level">
            <div class="level-left">
              23/4/2019 , 8:20 PM - <strong>Ramiro Martinez </strong>

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
              23/4/2019 , 8:20 PM - <strong>Aurora Martinez </strong>

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
