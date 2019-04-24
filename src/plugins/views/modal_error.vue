<template>
  <div class="modal" :class=" { 'is-active':is_visible == true}"  >
    <div class="modal-background" @click=" hide() "></div>
    <div class="modal-card">
      <header class="modal-card-head has-text-centered has-background-danger  ">
        <p class="modal-card-title is-size-3 has-text-white">
          <fa-icon :icon=' Icon'></fa-icon> {{Title}}
        </p>
        <button class="delete" aria-label="close" @click=" hide() "></button>
      </header>

      <section class="modal-card-body">
        <div class="columns is-multiline is-mobile ">
          <div class="column is-full">
            <h4 class=" has-text-danger is-size-4">Errores:</h4> 
            <div class="content">
              <ul>
                <li v-for=" (error,index) in Errors " :key=" index ">
                  {{ error }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer class="modal-card-foot  columns">
        <div class="column">
          <div class="level is-mobile ">
            <div class="level-left ">
            </div>
            <div class="level-right">
              <button class="button is-rounded is-danger " @click=" hide() ">Salir</button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  </div>
</template>

<script>
  import Modal from '@/plugins/modal_error.js';
  export default {
    data() {
      return {
        is_visible: false,
        Title: 'Errores',
        Icon: 'exclamation-circle',
        Errors: [],
      }
    },
    methods: {
      show(errors) {
        this.is_visible = true;
        this.Errors = errors;
      },
      hide() {
        this.is_visible = false;
      },
    },
    beforeMount() {
      // here we need to listen for emited events
      // we declared those events inside our plugin
      Modal.EventBus.$on('show', (errors) => {
        this.show(errors)
      })
    }
  }
</script>