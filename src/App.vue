<template>
  <section class="hero   is-fullheight">
    <div class="hero-head">
      <nav-bar></nav-bar>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container">

      <router-view  />
      </div>
       
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot ">
      <div class="level">
        <div class="level-item">
          <router-link to="/contact"> Contacto </router-link>
        </div>
        <div class="level-item">
          <router-link to="/about"> Acerca de nosotros </router-link>
        </div>
      </div>
      <br>
    </div>
  </section>


</template>
<script>
  import NavBar from '@/components/Nav.vue'
  export default {
    components: {
      NavBar
    }
  }

</script>

<style lang="scss">
  @import '~bulma/bulma';
  
</style>
