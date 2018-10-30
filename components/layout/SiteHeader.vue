<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import DyLogo from '~/components/DyLogo.vue'
import MobileNavLauncher from '~/components/buttons/MobileNavLauncher.vue'

export default Vue.extend({
  components: {
    DyLogo,
    MobileNavLauncher
  },
  data() {
    return {
      mobileNav: false
    }
  }
})
</script>


<template>
  <header class="site-header">
    <div class="logo-container">
        <nuxt-link to="/" class="logo">
        <dy-logo />
        <span class="distantly-yours">Distantly Yours</span>
        </nuxt-link>
    </div>
    <nav class="desktop-nav">
        <nuxt-link to="/portfolio">Portfolio</nuxt-link>
        <nuxt-link to="/blog">Blog</nuxt-link>
    </nav>
    <div class="push-farther">Push Farther</div>
    <div class="mobile-nav">
        <mobile-nav-launcher v-on:launch="mobileNav = !mobileNav" :class="mobileNav && 'mobileNavOpen'" />
        <transition name="home-nav">
        <div v-if="mobileNav">
            <div class="modal-overlay" v-on:click="mobileNav = !mobileNav" />
            <nav class="mobile-nav-links" v-on:click="mobileNav = !mobileNav">
            <CloseButton class="mobile-nav-close-button"/>
            <h2>Menu</h2>
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>
            <nuxt-link to="/blog">Blog</nuxt-link>
            </nav>
        </div>
        </transition>
    </div>
  </header>
</template>


<style lang="scss" scoped>
  .site-header {
    display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    margin: (20rem/16) (20rem/16) (30rem/16) (20rem/16);
    @media (min-width: $viewport-small) {
      justify-content: flex-start;
    }
    @media (min-width: $viewport-medium) {
      margin: (34rem/16) auto (20rem/16) auto;
      width: (100% * 12 / 14);
    }
  }
  .logo-container {
    width: (100% * 2/12);
    @media (min-width: $viewport-medium) {
      width: (100% * 1 / 12);
      &:hover {
        .distantly-yours {
          opacity: 1;
          filter: blur(0);
          transform: translate(0, -50%) rotate3d(0, 0, 0, 45deg);
        }
        + .desktop-nav {
          opacity: 0;
          transform: translate3d(3em, 0, 0);
          + .push-farther {
            opacity: 0;
            filter: blur(.25em);
            transform: translate3d(3em, 0, 0);
          }
        }
      }
    }
  }
  .logo {
    display: inline-block;
    position: relative;
  }
  .distantly-yours {
    color: $gray-500;
    filter: blur(.66em);
    font-family: $font-heading;
    font-weight: 600;
    font-size: (18rem/16);
    letter-spacing: .166ex;
    opacity: 0;
    pointer-events: none;
    position: absolute;
      top: 50%;
      left: 142%;
    width: 12em;
    text-transform: uppercase;
    transform: translate(0, -50%) rotate3d(-1, 2, 0, 55deg);
    transition: opacity .4s, filter .6s ease, transform .6s;
  }
</style>
