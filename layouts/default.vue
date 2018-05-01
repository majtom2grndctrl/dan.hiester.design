<template>
  <div>
    <transition :name="$nuxt.$route.path === '/' ? '' : 'home'" mode="in-out">
      <template v-if="$nuxt.$route.path === '/'">
        <nuxt/>
      </template>
      <template v-if="$nuxt.$route.path !== '/'">
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
            <nav class="desktop-nav">
              <nuxt-link to="/portfolio">Portfolio</nuxt-link>
              <nuxt-link to="/blog">Blog</nuxt-link>
            </nav>
            <div class="mobile-nav">
              <mobile-nav-launcher/>
            </div>
          </header>
          <nuxt/>
          <footer class="footer"></footer>
        </div>
      </template>
    </transition>
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
  margin: (20rem/16) (20rem/16) (30rem/16) (20rem/16);
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
.mobile-nav {
  @media (min-width: $viewport-small) {
    display: none;
  }
}
.desktop-nav {
  display: none;
  @media (min-width: $viewport-small) {
    display: flex;
      flex-direction: row;
      align-items: center;
    margin: 0 0 0 (-8rem/16);
    > a {
      border-bottom: (1rem/16) solid rgba(3, 161, 213, 0);
      color: #97A3A7;
      display: block;
      font-size: (15rem/16);
      line-height: 1em;
      margin: 0 (17rem/16) 0 0;
      padding: (10rem/16) (8rem/16) (8rem/16);
      text-decoration: none;
      transition: border-bottom-color .66s;
      &.active {
        border-bottom-color: rgba(3, 161, 213, .3);
        @media (min-resolution: 1.25dppx) {
          border-bottom-width: (1.5rem/16);
          padding-bottom: (7.5rem/16);
        }
      }
    }
  }
}
.mobile-nav-launcher {
  background: none;
  border: none;
  outline: none;
  color: #03A1D5;
  cursor: pointer;
  display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  font-family: $font-heading;
  font-weight: 600;
  font-size: (24rem/16);
  text-transform: uppercase;
  width: 5em;
  &:active {
    outline: none;
  }
}
</style>
