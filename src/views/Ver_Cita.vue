<template>
  <div class=" ">
    <div class="columns is-centered is-mobile ">
      <div class="column is-6 ">
        <div class=" box ">

          <h3 class=" title is-2 has-text-centered "> Cita </h3>
          <h3 class=" title is-4 has-text-centered "> Paciente: {{ patient.name  }} </h3>
          <!-- <p> (Datos editables)</p> -->

          <div class="field">
            <label class="label"> Sintomas :</label>
            <div class="control">
              <textarea class="textarea" placeholder="Sintomas" v-model=" treatment.symptom "></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label"> Tratamiento:</label>
            <div class="control">
              <textarea class="textarea" placeholder="Tratemiento" v-model=" treatment.treatment "></textarea>
            </div>
          </div>

          <div class="buttons has-addons is-right">
            <button class="button is-info " @click=" add_treatment() " :class=" { 'is-loading': is_loading  }  ">
              Guardar </button>
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

        quote: {  },
        patient: { },
        is_loading: false,
        treatment: {
          symptom: ' ',
          treatment: ' ',
          f_id_quote: '',
        }
      })
    },
    methods: {
      add_treatment: function () {
        // event.preventDefault();
        this.is_loading = true;

        const constraints = {
          symptom: {
            presence: {
              message: "Falta los sintomas "
            },
            length: {
              minimum: 5,
              maximum: 200,
              tooShort: "Sintomas: Al menos 5 caracteres",
              tooLong: "Sintomas: Máximo 200 caracteres"
            }

          },
          treatment: {
            presence: {
              message: "Falta el tratamiento"
            },
            length: {
              minimum: 5,
              maximum: 200,
              tooShort: "Tratamiento: Al menos 5 caracteres",
              tooLong: "Tratamiento: Máximo 200 caracteres"
            }
          },
        };

        validate.async(this.treatment, constraints).then(
          data => {
            console.log(data)

            this.$http.post("user/treatment", this.treatment).then(
              response => {

                this.is_loading = false;

                this.$router.push({
                  path: '/dashboard',
                })

              }
            ).catch(errors => {});
          },

        ).catch(errors => {
          this.$modal_error.show(errors);
          this.is_loading = false;
        });

      },



      get_patient(id_patient) {
        return this.$http.get("user/get-patient", {
          params: {
            id_patient
          }
        }).then(
          response => {
            return response.body;
          }
        ).catch(errors => {});
      },

      get_quote(id_quote) {
        return this.$http.get("user/quote", {
          params: {
            id_quote
          }
        }).then(
          response => {
            return response.body;
          }
        ).catch(errors => {});
      }

    },
    async mounted() {
      this.quote = await this.get_quote(this.$route.params.id);
      
      this.patient = await this.get_patient(this.quote.f_id_patient);
      this.treatment.f_id_patient = this.patient.id_patient;
      this.treatment.f_id_quote = this.quote.id_quote;
    }
  }

</script>

<style>

</style>
