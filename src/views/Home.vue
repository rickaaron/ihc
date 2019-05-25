<template>


  <div>
    <div class="columns is-mobile is-centered is-multiline ">
      <div class="column is-12 ">

        <div class=" box has-background-primary ">
          <div class="columns is-mobile is-vcentered ">
            <div class="column is-6 has-text-centered  ">

              <h3 class=" subtitle is-4 "> Si estás buscando la sonrisa perfecta... </h3>
              <h3 class=" subtitle is-4 "> !Cuenta con el equipo de la clinica DENT¡ </h3>
              <br>

              <h3 class=" title is-4 "> Iniciar sesion como: </h3>

              <div class="level is-mobile ">

                <div class="level-item">

                  <router-link to="login">
                    <button class=" button is-info   is-large ">
                      Doctor
                    </button>
                  </router-link>
                </div>

                <div class="level-item">
                  <router-link to="buscar-paciente">
                    <button class=" button is-info   is-large ">
                      Paciente
                    </button>
                  </router-link>

                </div>
              </div>
            </div>

            <div class="column is-6 ">
              <div class=" image is-square	">

                <img src="../assets/sonrisa.png">
              </div>
            </div>


          </div>
        </div>

      </div>

      <div class="column is-6 ">
        <div class=" box has-background-primary  ">

          <p>
            <strong>
              <fa-icon icon='map-marked-alt'></fa-icon> Ubicación:
            </strong>
            Av Bonifacio Salinas Nte 145-149
            La Luz, 67129 Guadalupe, N.L.
          </p>

          <p>
            <strong>
              <fa-icon icon='envelope'></fa-icon> Correo:
            </strong>
            dent@gmail.com
          </p>
          <p>
            <strong>
              <fa-icon icon='phone'></fa-icon> Telefono:
            </strong>
            80802470
          </p>
          <p>
            <strong>
              <fa-icon icon='calendar-day'></fa-icon> Horario:
            </strong>
            Lunes - Viernes 8:00 AM- 8:00 PM <br>
            Sabados 8:00 AM- 6:00 PM
          </p>
        </div>
      </div>

      <div class="column is-6 ">

        <div class=" map-responsive ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12327.18129502269!2d-100.24176596847879!3d25.704335740531338!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1554844864734!5m2!1ses!2smx"
            width="800" height="361" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>

      </div>
    </div>


  </div>


</template>

<script>
  export default {
    name: 'home',
    data() {
      return ({
        uuid: '',
      })
    }
  }

</script>
<style>
  .map-responsive iframe {
    height: 100%;
    width: 100%;
  }

</style>
