<template>

  <div>
    <div class="columns is-centered is-mobile ">
      <div class="column is-6-desktop is-10-mobile  ">
        <div class=" box ">

          <h3 class=" title is-2 has-text-centered "> Agendar cita </h3>
          <h3 class=" title is-4 has-text-centered "> Paciente: {{ patient.name }} </h3>
          <h3 class=" title is-6 has-text-centered "> Folio: {{ patient.uuid }} </h3>
          <form @submit=" add_quote ">
            <div class="field">
              <label class="label ">Fecha</label>
              <div class="control">
                <input class="input" type="date" placeholder="Nombre" v-model=" quote.date ">
              </div>
            </div>
            <div class="columns">
              <div class="column is-4">
                <div class="field">
                  <label class="label">Hora</label>
                  <div class="control">
                    <div class="select is-fullwidth">
                      <select v-model=" quote.hour ">
                        <option :value=" hora.value " v-for=" ( hora, index ) in horas " :key=" index "> {{hora.name }}
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
                      <select v-model=" quote.min ">
                        <option :value=" minuto.value " v-for=" ( minuto, index ) in minutos " :key=" index ">
                          {{minuto.name }} </option>
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
                      <select v-model=" quote.period ">
                        <option :value=" tipo.value " v-for=" ( tipo, index ) in tipos " :key=" index "> {{tipo.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="buttons has-addons is-right">
              <button class="button is-success " :class="  { 'is-loading': is_loading } "> Agendar </button>
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
        is_loading: false,
        patient: {
          name: '',
        },
        quote: {
          f_id_patient: '',
          date: '2019-05-08',
          hour: 1,
          period: 'AM',
          min: '00',
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
            value:'00',
          },
          {
            name: '10',
            value: '10',
          },
          {
            name: '20',
            value: '20',
          },
          {
            name: '30',
            value: '30',
          },
          {
            name: '40',
            value: '40',
          },
          {
            name: '50',
            value: '50',
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
    },
    methods: {
      get_date: function () {
        let temp_date = new Date()
        // 2019-05-08
        this.quote.date = temp_date.getFullYear() + '-' + temp_date.getMonth() + '-' + temp_date.getDate();
        console.log( this.quote.date );
      },

      add_quote: function (event) {
        event.preventDefault();
        this.is_loading = true;

        const constraints = {
          // fecha: '',
          // hora: 1,
          // tipo: 'AM',
          // minuto: 0,
          date: {
            datetime: {
              dateOnly: true,
              message: "Recuerda agregar la fecha "
            }
          },

          hour: {
            presence: {
              message: "Falta la hora"
            },
          },
          min: {
            presence: {
              message: "Falta los minutos"
            },
          },
          period: {
            presence: {
              message: "Falta el periodo"
            },
          },
        };
        validate.async(this.quote, constraints).then(
          data => {
            console.log(data)
            
            this.$http.post("user/quote", this.quote ).then(
              response => {

                this.is_loading = false;

                this.$router.push( { name: 'Dashboard' });

              }
            ).catch(errors => {
              // this.$modal_error.show(errors.data.errors);
            });
          },

        ).catch(errors => {
          this.$modal_error.show(errors);
          this.is_loading = false;
        });

      },

      get_patient( id_patient  ){
        return this.$http.get("user/get-patient", {
        params: {
          id_patient 
        }
      }).then(
        response => {
          return response.data; 
        }
      ).catch(errors => { 
      });
      }

      
    },
    async mounted() {
      // this.get_date();

      this.quote['f_id_patient'] = this.$route.params.id_patient;

      this.patient = await this.get_patient( this.$route.params.id_patient ); 

    },

  }

</script>

<style>

</style>
