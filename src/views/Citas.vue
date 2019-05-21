<template>
  <div>
    <h3 class=" title is-4 ">Citas</h3>
    <hr>

    <div class="level is-mobile ">
      <div class="level-item">
        <button class=" button  " :class=" { 'is-info': option == 'activas' } "
          @click=" get_quotes('active') ,  option = 'activas'  ">
          Activas
        </button>
      </div>
      <div class="level-item">
        <button class=" button  " :class=" { 'is-info': option == 'eliminadas' } "
          @click="  get_quotes('deleted') , option = 'eliminadas'  ">
          Eliminadas
        </button>
      </div>
    </div>


    <div v-if="quotes.length > 0 ">

      <ul>
        <li v-for=" (quote,index) in quotes " :key="index ">
          <div class="level is-mobile ">
            <div class="level-left">
              {{quote.date}} - {{quote.hour}}
            </div>

            <div class="level-item">
              <strong> {{ quote.name}} </strong>
            </div>

            <div class="level-rigth" v-if=" option == 'activas' ">
              <div class="field is-grouped">
                <p class="control">
                  <router-link :to=" '/cita/' + quote.id_quote   " class="button is-success ">Ver </router-link>
                </p>

                <p class="control" v-if=" option == 'activas'  ">
                  <button class="button is-danger " @click=" delete_quote_modal( index )  ">
                    <fa-icon icon="trash"></fa-icon>
                  </button>
                </p>

                <p class="control" v-if=" option == 'eliminadas'  ">
                  <button class="button is-danger " @click=" delete_quote_modal( index )  ">
                    <fa-icon icon="trash"></fa-icon>
                  </button>
                </p>


              </div>
            </div>
          </div>
          <hr>
        </li>

      </ul>

    </div>
    <div v-if=" quotes.length == 0   && option != 'none'  " class=" has-text-centered ">
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
              <div class="level-right">
                <button class="button is-rounded is-danger " @click=" delete_quote(temp_index) ">Eliminar</button>
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
        modal: {
          icon: 'trash',
          title: 'Eliminar cita'
        },
        temp_quote: {},
        quotes: [],
        option: 'none'
      })
    },
    methods: {
      delete_quote_modal(index) {
        this.is_visible = true;
        this.temp_quote = this.quotes[index];
        this.temp_index = index;
      },
      get_quotes(type) {
        this.$http.get("user/quotes", {
          params: {
            type
          }
        }).then(
          response => {
            for (let index in response.body) {
              let temp_date = new Date(response.body[index].date)
              response.body[index].date = temp_date.getFullYear() + '/' + (temp_date.getMonth() + 1) + '/' + temp_date
                .getDate();
              response.body[index].hour = response.body[index].hour + ':' + response.body[index].min + ' ' + response
                .body[index].period.toUpperCase();
            }

            this.quotes = response.body;
          }
        ).catch(errors => {});


      },

      delete_quote(index) {
        this.$http.delete("user/quote", {
          params: {
            id: this.quotes[index].id_quote,
            reason: this.reason,
          }
        }).then(
          response => {
            if (response.body == 1) {
              this.quotes.splice(index, 1);
              this.hide();

            }
          }
        ).catch(errors => {});
      },

      delete_quote_perm(index) {
        this.$http.delete("user/quotes-perm", {
          params: {
            id: this.quotes[index].id_quote,
          }
        }).then(
          response => {
            if (response.body == 1) {
              this.quotes.splice(index, 1);
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
