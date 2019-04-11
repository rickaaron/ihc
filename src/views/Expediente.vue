<template>
  <div class=" ">
    <div class="columns is-centered is-mobile ">
      <div class="column is-10">
        <div class=" box ">

          <h3 class=" title is-2 has-text-centered "> Expediente </h3>
          <h3 class=" title is-4 has-text-centered "> Paciente: Alan Ramirez </h3>

          <h3 class=" subtitle is-4 has-text-centered "> Tratamientos: </h3>

          <ul>
            <li>
              <div class="level">
                <div class="level-left">
                  <p>
                    Cita: <strong> CI-123 </strong> , Paciente: <strong> Alan Ramirez </strong>
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
                    Cita: <strong> CI-2236 </strong> , Paciente: <strong> Alan Ramirez </strong>
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

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return ({
        paciente: {
          sintomas: 'Presion alta, dolor de cabza',
          receta: 'Paracettamol 10 tabletas, 1 cada 12 horas. Diprofenaco 10 tabletas, 1 cada 12 horas.',

        }
      })
    }
  }

</script>

<style>

</style>
