<template>
  <div>
    <header class="header">
      <div class="logo-container">
        <nuxt-link to="/" class="logo">
          <span class="logo-container">
            <dy-logo />
          </span>
          <span class="distantly-yours">Distantly Yours</span>
        </nuxt-link>
      </div>
      <nav class="verbose-nav">
        <nuxt-link to="/portfolio">Portfolio</nuxt-link>
        <nuxt-link to="/blog">Blog</nuxt-link>
      </nav>
      <div class="concise-nav">
        <mobile-nav-launcher/>
      </div>
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
    margin: (20rem/16);
    @media (min-width: $viewport-small) {
      justify-content: flex-start;
    }
    @media (min-width: $viewport-medium) {
      margin: (34rem/16) auto;
      width: (100% * 12 / 14);
    }
  }
  .logo-container {
    @media (min-width: $viewport-medium) {
      width: (100% * 1 / 12);
    }
  }
  .distantly-yours {
    position: absolute !important;
      left: -1000rem;
    clip: rect(1px, 1px, 1px, 1px);
  }
  .concise-nav {
    @media (min-width: $viewport-small) {
      display: none;
    }
  }
  .verbose-nav {
    display: none;
    @media (min-width: $viewport-small) {
      display: flex;
        flex-direction: row;
        align-items: center;
      > a {
        color: #97A3A7;
        display: block;
        font-size: (15rem/16);
        margin: 0 (40rem/16) 0 0;
        text-decoration: none;
      }
    }
  }
</style>
