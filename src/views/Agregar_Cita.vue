<template>

  <div>
    <div class="columns is-centered is-mobile ">
      <div class="column is-6 ">
        <div class=" box ">

          <h3 class=" title is-2 has-text-centered "> Agendar cita </h3>
          <h3 class=" title is-4 has-text-centered "> Paciente: Alan Ramirez </h3>
          <form action="">
            <div class="field">
              <label class="label ">Fecha</label>
              <div class="control">
                <input class="input" type="date" placeholder="Nombre" v-model=" cita.fecha ">
              </div>
            </div>
            <div class="columns">
              <div class="column is-4">
                <div class="field">
                  <label class="label">Hora</label>
                  <div class="control">
                    <div class="select is-fullwidth">
                      <select v-model=" cita.hora ">
                        <option :value=" hora.value " v-for=" ( hora, index ) in horas " :key=" index "> {{hora.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-4">
                <div class="field">
                  <label class="label"> Período </label>
                  <div class="control">
                    <div class="select is-fullwidth ">
                      <select v-model=" cita.tipo ">
                        <option :value=" tipo.value " v-for=" ( tipo, index ) in tipos " :key=" index "> {{tipo.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="column is-4 ">
                <div class="field">
                  <label class="label">Minuto</label>
                  <div class="control">
                    <div class="select is-fullwidth">
                      <select v-model=" cita.minuto ">
                        <option :value=" minuto.value " v-for=" ( minuto, index ) in minutos " :key=" index ">
                          {{minuto.name }} </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="buttons has-addons is-right">
              <button class="button is-success "> Agendar </button>
            </div>


          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return ({
        cita: {
          fecha: new Date().toDateString(),
          hora: 1,
          tipo: 'AM',
          minuto: 0,
        },
        horas: [{
            name: '1:00',
            value: 1,
          },
          {
            name: '2:00',
            value: 2,
          },
          {
            name: '3:00',
            value: 3,
          },
          {
            name: '4:00',
            value: 4,
          },
          {
            name: '5:00',
            value: 5,
          },
          {
            name: '6:00',
            value: 6,
          },
          {
            name: '7:00',
            value: 7,
          },
          {
            name: '8:00',
            value: 8,
          },
          {
            name: '9:00',
            value: 9,
          },
          {
            name: '10:00',
            value: 10,
          },
          {
            name: '11:00',
            value: 11,
          },
          {
            name: '12:00',
            value: 12,
          },
        ],
        minutos: [{
            name: '00',
            value: 0,
          },
          {
            name: '10',
            value: 10,
          },
          {
            name: '20',
            value: 20,
          },
          {
            name: '30',
            value: 30,
          },
          {
            name: '40',
            value: 40,
          },
          {
            name: '50',
            value: 50,
          },
        ],
        tipos: [{
            name: 'PM',
            value: 'PM',
          },
          {
            name: 'AM',
            value: 'AM',
          }
        ]
      })
    }
  }

</script>

<style>

</style>
