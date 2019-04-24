<template>
  <div class=" ">
    <div class="columns is-centered is-mobile ">
      <div class="column is-6 ">
        <div class=" box has-text-centered has-text-primary ">
          <h3 class=" title is-2  "> Saliendo </h3>
          <fa-icon icon='circle-notch' size='6x' spin>
          </fa-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as types from '../store/types';
  export default {
    data() {
      return ({
        paciente: {
          sintomas: 'Dientes chuecos ',
          tratamiento: ' Radiografia, braquets, endodoncia ',
          receta: 'Paracettamol 10 tabletas, 1 cada 12 horas. Diprofenaco 10 tabletas, 1 cada 12 horas.',
        }
      })
    },
    mounted() {
      this.$store.commit(types.MUTATE_DELETE_SESSION);
      setTimeout(() => {
        this.$router.push('/');
      }, 1000)

    }

  }

</script>

<style>

</style>
