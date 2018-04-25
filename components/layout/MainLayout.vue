<template>
  <div>
    <header class="header">
      <nuxt-link to="/" class="logo">
        <dy-logo />
        <span>Distantly Yours</span>
      </nuxt-link>
      <mobile-nav-launcher/>
    </header>
    <slot />
    <footer class="footer"></footer>
  </div>
</template>


<script>
import DyLogo from '~/components/DyLogo.vue'
import MobileNavLauncher from '~/components/buttons/MobileNavLauncher.vue'

export default {
  components: {
    DyLogo,
    MobileNavLauncher
  }
}
</script>


<style lang="scss" scoped>
  .header {
    display: flex;
      align-content: center;
      flex-direction: row;
      justify-content: space-between;
  }
</style>
