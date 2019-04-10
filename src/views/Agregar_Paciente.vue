<template>
  <div class="columns is-centered is-mobile ">
    <div class="column is-10 ">
      <div class=" box ">
        <h3 class=" title is-4 has-text-centered "> Paciente: {{ paciente.nombres }} </h3>
        <div class=" barra-container ">
          <progress class="progress is-info" id="barra" :value="progress" max="100"></progress>

          <div class="level">
            <div class="level-item">
              <button class=" button is-info is-large is-circle ">
                1
              </button>
            </div>
            <div class="level-item">
              <button class=" button is-info is-large is-circle ">
                2
              </button>
            </div>
            <div class="level-item">
              <button class=" button is-info is-large is-circle ">
                3
              </button>
            </div>
            <div class="level-item">
              <button class=" button is-info is-large is-circle ">
                4
              </button>
            </div>
          </div>
        </div>

        <div v-if=" progress == 12 ">
          <div class="columns">
            <div class="column is-6">
              <div class="field">
                <label class="label ">Nombres</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" paciente.nombres ">
                </div>
              </div>
              <div class="field">
                <label class="label ">Apellido Paterno </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" paciente.apellido1 ">
                </div>
              </div>
              <div class="field">
                <label class="label">Apellido Materno </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" paciente.apellido2 ">
                </div>
              </div>
              <div class="field">
                <label class="label">Sexo </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" paciente.sexo ">
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label class="label">Edad </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" paciente.edad ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Fecha de nacimiento </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" paciente.fecha_nacimiento  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Estado civil </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" paciente.estado_civil  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Nuero de hijos </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" paciente.numero_hijos  ">
                </div>
              </div>
            </div>

          </div>


        </div>


        <div v-if=" progress == 36 ">
          <div class="columns">
            <div class="column is-6">
              <div class="field">
                <label class="label"> Dirección </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" paciente.direccion  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Colonia </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" paciente.colonia  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Código postal </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" paciente.cp  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Ciudad </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" paciente.ciudad  ">
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label class="label"> Telefono </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" paciente.telefono  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Oficina </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" paciente.oficina  ">
                </div>
              </div>
              <div class="field">
                <label class="label"> Celular </label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" paciente.celular  ">
                </div>
              </div>
              <div class="field">
                <label class="label">E-Mail</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Nombre" v-model=" paciente.email ">
                </div>
              </div>
            </div>
          </div>

        </div>

        <div v-if=" progress == 60 ">
          <div class="field">
            <label class="label"> Historial clinico</label>
            <div class="control">
              <textarea class="textarea" placeholder="Historial clinico" v-model=" paciente.historial "></textarea>
            </div>
          </div>
        </div>

        <div v-if=" progress == 100 ">
          <br>
          <section class="hero   has-text-info is-medium">
            <div class="hero-body">
              <div class="container has-text-centered  ">
                <fa-icon icon='smile-beam' size="6x"></fa-icon>
                <br>
                <br>
                <h3 class="title is-4 has-text-info ">
                  Paciente: {{ paciente.nombres }}, a sido agregado con exito.
                </h3>
                <link-router class=" button is-info is-rounded  "> Agendar Cita </link-router>
              </div>
            </div>
          </section>
        </div>


        <div v-if=" progress < 100 ">
          <hr>
          <div class="level">
            <div class="level-left">
              <router-link to="/Login" class="button is-danger " v-if=" progress > 12 && progress < 100 ">
                <fa-icon icon='long-arrow-alt-left'></fa-icon>
              </router-link>


            </div>
            <div class="level-rigth">
              <router-link to="/Login" class="button is-info ">
                <fa-icon icon='chevron-circle-right'></fa-icon>
              </router-link>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return ({
        progress: 100,
        paciente: {
          nombres: 'Arturo Ramirez',
          apellido1: 'Ramirez',
          apellido2: 'Carrizales',
          sexo: 'Hombre',
          edad: 18,
          fecha_nacimiento: new Date(),
          estado_civil: new Date(),
          numero_hijos: 2,
          direccion: 'Nuevo Leon, Mexico',
          colonia: 'Aspreso #2015',
          cp: 6764,
          ciudad: 'Monterrey',
          telefono: 23242256,
          oficina: 23242256,
          celular: 23242256,
          email: 'alan@gmail.com',

        }
      })
    }
  }

</script>

<style>
  .is-circle {
    border-radius: 50% 50%;
  }

  .barra-container {
    position: relative;
  }

  #barra {
    position: absolute;
    top: 19px;
  }

</style>
