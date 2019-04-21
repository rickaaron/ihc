<template>
  <div>
    <!-- Confirmar cancelacions -->
    <div class="modal" :class=" { 'is-active':modal == 1 } ">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box has-text-centered">
          <h4 class='subtitle'> ¿ Esta seguro desea eliminar la cita ? </h4>
          <div class="field">
            <label class="label"> Motivo </label>
            <div class="control">
              <textarea class="textarea" placeholder="Motivo"></textarea>
            </div>
          </div>
          <button class=" button is-danger is-fullwidth">
            Si
          </button>

        </div>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
    <!-- Eliminar tratamiento -->
    <div class="modal" :class=" { 'is-active':modal == 2 } ">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box has-text-centered">
          <h4 class='subtitle'> ¿ Esta seguro desea eliminar el tratamiento ? </h4>
          <div class="field">
            <label class="label"> Motivo </label>
            <div class="control">
              <textarea class="textarea" placeholder="Motivo"> El tratamiento no era el adecuado </textarea>
            </div>
          </div>
          <button class=" button is-danger is-fullwidth">
            Si
          </button>

        </div>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>

    <div class="modal" :class=" { 'is-active':modal == 3 } ">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box has-text-centered">
          <h4 class='subtitle'> ¿ Esta seguro desea eliminar paciente ? </h4>
          <button class=" button is-danger is-fullwidth">
            Si
          </button>

        </div>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>

    <div class="modal" :class=" { 'is-active':modal == 4 } ">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box has-text-centered">

          <h4 class='subtitle'> Agregar especialidad </h4>
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Especialidad" >
            </div>
          </div>
          <div class="buttons has-addons is-right">
            <button class="button is-success "> Agregar </button>
          </div>

        </div>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>

    <div class="modal" :class=" { 'is-active':modal == 6 } ">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box has-text-centered">
          <h4 class='subtitle'> ¿ Esta seguro desea eliminar especialidad ? </h4>
          <button class=" button is-danger is-fullwidth">
            Si
          </button>

        </div>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return ({
        modal: 2,
      })
    }
  }

</script>

<style>

</style>
