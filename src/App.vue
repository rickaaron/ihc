<template>
  <section class="hero   is-fullheight">
    <div class="hero-head">
      <nav-bar></nav-bar>
      <hr>
    </div>
    <!-- Hero content: will be in the middle -->
    <div class="hero-body ">
      <div class="container ">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>

    </div>

    <!-- Hero footer: will stick at the bottom -->
    <!-- <div class="hero-foot ">
      <div class="level is-mobile ">
        <div class="level-item">
          <router-link to="/contact"> Contacto </router-link>
        </div>
        <div class="level-item">
          <router-link to="/about"> Acerca de nosotros </router-link>
        </div>
      </div>
      <br>
    </div> -->
    <app-modal />

  </section>

</template>
<script>
  import NavBar from '@/components/Nav.vue'
  import * as types from './store/types';

  export default {
    components: {
      NavBar
    },
    methods: {

    },
    created() {
      this.$store.commit(types.MUTATE_SET_SESSION);

       
    }

  }

</script>

<style lang="scss">
  @import '~bulma/bulma';

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

</style>
