<template>
  <div>
    <h3 class=" title is-4  ">Configuración</h3>
    <div class="level">
      <div class="level-item">
        <button class="button " @click=" option = 'datos' " :class=" { 'is-info':  option == 'datos' } ">
          Datos personales
        </button>

      </div>
      <div class="level-item">
        <button class="button " @click=" option = 'esp' " :class=" { 'is-info':  option == 'esp' } ">
          Especialidades
        </button>
      </div>

    </div>
    <hr>


    <form action="" class=" columns " v-if=" option == 'datos'">
      <div class="column is-6 ">
        <div class="field">
          <label class="label">Nombre(s)</label>
          <div class="control">
            <input class="input" type="text" placeholder="Nombre" v-model="  session.nombre  ">
          </div>
        </div>

        <div class="field">
          <label class="label"> Apellido paterno </label>
          <div class="control">
            <input class="input" type="text" placeholder="Apellido paterno" v-model="  session.apellido_paterno  ">
          </div>
        </div>
        <div class="field">
          <label class="label"> Apellido materno </label>
          <div class="control">
            <input class="input" type="text" placeholder="Apellido materno" v-model="  session.apellido_materno  ">
          </div>
        </div>

        <div class="field">
          <label class="label">Correo</label>
          <div class="control">
            <input class="input" type="text" placeholder="Correo" v-model="  session.email  ">
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="field">
          <label class="label"> RFC </label>
          <div class="control">
            <input class="input" type="text" placeholder="RFC" v-model="  session.rfc  ">
          </div>
        </div>
        <div class="field">
          <label class="label"> Dirección </label>
          <div class="control">
            <input class="input" type="text" placeholder="Dirección" v-model="  session.direccion  ">
          </div>
        </div>
        <div class="field">
          <label class="label"> Telefono </label>
          <div class="control">
            <input class="input" type="text" placeholder="Telefono" v-model="  session.telefono  ">
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

    <div v-if="option== 'esp'">
      <div class="level">
        <div class="level-left">
          <h3 class=" title is-4  ">Especialidades </h3>

        </div>
        <div class="level-rigth">
          <button class=" button is-info  ">
            Agregar
          </button>
        </div>
      </div>
      <div class="level">
        <div class="level-left">
          <p>
            <strong> Prostodoncia </strong>
          </p>

        </div>
        <div class="level-rigth">
          <div class="field is-grouped">
            <p class="control">
              <router-link to="/Signin" class="button is-danger ">
                <fa-icon icon='trash'></fa-icon>
              </router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="level">
        <div class="level-left">
          <p>
            <strong> Ortodoncia </strong>
          </p>

        </div>
        <div class="level-rigth">
          <div class="field is-grouped">
            <p class="control">
              <router-link to="/Signin" class="button is-danger ">
                <fa-icon icon='trash'></fa-icon>
              </router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="level">
        <div class="level-left">
          <p>
            <strong> Endodoncia </strong>
          </p>

        </div>
        <div class="level-rigth">
          <div class="field is-grouped">
            <p class="control">
              <router-link to="/Signin" class="button is-danger ">
                <fa-icon icon='trash'></fa-icon>
              </router-link>
            </p>
          </div>
        </div>
      </div>

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
        option: 'none',
        session: {
          nombre: 'Ricardo',
          apellido_paterno: 'Martinez',
          apellido_materno: 'Alvarado',
          email: 'ricardo@gmail.com',
          rfc: 'ARASD123123dasd',
          direccion: 'Valle colorado 232, Monterrey , Nuevo Leon, Mexico',
          telefono: '899646689',

        }
      })
    }
  }

</script>

<style>

</style>
