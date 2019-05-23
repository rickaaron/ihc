<template>
  <div>
    <h3 class=" title is-4  ">Tratamientos</h3>
    <hr>
    <div class="level is-mobile ">
      <div class="level-item">
        <button class=" button  " :class=" { 'is-info': option == 'activos' } "
          @click=" get_treatments('active') , option = 'activos'  ">
          Activos
        </button>
      </div>
      <div class="level-item">
        <button class=" button  " :class=" { 'is-info': option == 'eliminados' } "
          @click=" get_treatments('deleted') , option = 'eliminados'  ">
          Eliminados
        </button>
      </div>
    </div>

    <div v-if=" treatments.length > 0 ">
      <ul>

        <li v-for="  ( treatment, index  )  in  treatments " :key="index">
          <div class="level is-mobile ">
            <div class="level-left">
              <p>
                Folio: <strong> CI-{{ treatment.id_treatment }} </strong> , Paciente: <strong> {{ treatment.name  }}
                </strong>
              </p>
            </div>
            <div class="level-rigth">
              <div class="field is-grouped" v-if=" option == 'activos' " >
                <!-- <p class="control">
                  <router-link to="/Login" class="button is-success "> Receta </router-link>
                </p> -->

                <p class="control">
                  <router-link :to=" '/tratamiento/' + treatment.id_treatment " class="button is-success ">Ver </router-link>
                </p>

                <p class="control">
                  <button class="button is-danger "  @click=" delete_treatment_modal( index )  ">
                    <fa-icon icon='trash'></fa-icon>
                  </button>
                </p>


              </div>
            </div>
          </div>
          <p v-if=" option == 'eliminados' "  >
            {{treatment.reason }}
          </p>
          <hr>
        </li>
      </ul>
    </div>
    <div v-if=" treatments.length == 0   && option != 'none'  " class=" has-text-centered ">
      <img src="../assets/info.png" alt="" width="100">
      <br>
      Sin datos
      <br>
      <br>
      <br>

    </div>


    <div v-if=" option == 'none'  " class=" has-text-centered ">
      <img src="../assets/info.png" alt="" width="100">
      <br>
      Selecciona una opción
      <br>
      <br>
      <br>
    </div>


    <div class="modal" :class=" { 'is-active':is_visible == true}">
      <div class="modal-background" @click=" hide() "></div>
      <div class="modal-card">
        <header class="modal-card-head has-text-centered has-background-danger  ">
          <p class="modal-card-title is-size-3 has-text-white">
            <fa-icon :icon=' modal.icon '></fa-icon> {{ modal.title }}
          </p>
          <button class="delete" aria-label="close" @click=" hide() "></button>
        </header>

        <section class="modal-card-body">
          <div class="columns is-multiline is-mobile ">
            <div class="column is-full">
              <h4 class="is-size-4"> ¿ Estas seguro que deseas eliminar ?</h4>
              <div class="content">
                <div class="field">
                  <label class="label"> Motivo</label>
                  <div class="control">
                    <textarea class="textarea" placeholder="Motivo" v-model=" reason  "></textarea>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>

        <footer class="modal-card-foot  columns">
          <div class="column">
            <div class="level is-mobile ">
              <div class="level-left ">
                <button class="button is-rounded is-info " @click=" hide() ">Salir</button>

              </div>
              <div class="level-right" >
                <button class="button is-rounded is-danger " @click=" delete_treatment(temp_index) ">Eliminar</button>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>



  </div>
</template>

<script>
  export default {

    data() {
      return ({
        is_visible: false,
        temp_index: '',
        reason: '',
        treatments: [],

        modal: {
          icon: 'trash',
          title: 'Eliminar cita'
        },
        temp_treatment: {},
        option: 'none'
      })
    },
    methods: {
      delete_treatment_modal(index) {
        this.is_visible = true;
        this.temp_treatment = this.treatments[index];
        this.temp_index = index;
      },

      get_treatments(type) {
        this.$http.get("user/treatments", {
          params: {
            type
          }
        }).then(
          response => {

            this.treatments = response.body;
          }
        ).catch(errors => {});


      },

      delete_treatment(index) {
        this.$http.delete("user/treatment", {
          params: {
            id: this.treatments[index].id_treatment,
            reason: this.reason,
          }
        }).then(
          response => {
            if (response.body == 1) {
              this.treatments.splice(index, 1);
              this.hide();

            }
          }
        ).catch(errors => {});
      },

      delete_treatment_perm(index) {
        this.$http.delete("user/treatments-perm", {
          params: {
            id: this.treatments[index].id_treatment,
          }
        }).then(
          response => {
            if (response.body == 1) {
              this.treatments.splice(index, 1);
            }
          }
        ).catch(errors => {});
      },

      hide() {
        this.is_visible = false;
      }


    },

  }

</script>

<style>

</style>
