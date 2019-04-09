<template>
  <div class=" ">
    <div class="columns is-centered is-mobile ">
      <div class="column is-6 ">
        <div class=" box ">
          <p> (Datos editables)</p>
          <div class="field">
            <label class="label">Nombres</label>
            <div class="control">
              <input class="input" type="text" placeholder="Nombre" v-model=" paciente.nombres ">
            </div>
          </div>
          <div class="field">
            <label class="label">Primer Apellido</label>
            <div class="control">
              <input class="input" type="text" placeholder="Nombre" v-model=" paciente.apellido1 ">
            </div>
          </div>
          <div class="field">
            <label class="label">Segundo Apellido</label>
            <div class="control">
              <input class="input" type="text" placeholder="Nombre" v-model=" paciente.apellido2 ">
            </div>
          </div>
          <div class="field">
            <label class="label">E-Mail</label>
            <div class="control">
              <input class="input" type="text" placeholder="Nombre" v-model=" paciente.email ">
            </div>
          </div>
          <div class="field">
            <label class="label"> Historial clinico</label>
            <div class="control">
              <textarea class="textarea" placeholder="Historial clinico" v-model=" paciente.historial " ></textarea>
            </div>
          </div>



          <div class="level">
            <div class="level-left">
              <router-link to="/Login" class="button is-success "> Expediente </router-link>


            </div>
            <div class="level-rigth">
              <router-link to="/Login" class="button is-success "> Agendar Cita </router-link>
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
        paciente: {
          nombres: 'Alan Aaron',
          apellido1: 'Ramirez',
          apellido2: 'Carrizales',
          alutra: 1.8,
          peso: 70,
          telefono: 8118930037,
          celular: 8118930037,
          email: 'alan@gmail.com',

        }
      })
    }
  }

</script>

<style>

</style>
