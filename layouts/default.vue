<template>
  <div>
    <transition :name="$nuxt.$route.path === '/' ? '' : 'home'" mode="in-out">
      <template v-if="$nuxt.$route.path === '/'">
        <nuxt/>
      </template>
      <template v-if="$nuxt.$route.path !== '/'">
        <div>
          <header class="site-header">
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
  },
  data() {
    return {
      mobileNav: false
    }
  }
}
</script>

<style lang="scss">
.site-header {
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

$mobile-nav-transition-duration: .3s;

.home-nav-enter-active, .home-nav-leave-active {
  //mix-blend-mode: color-burn;
  transition: background-color $mobile-nav-transition-duration; // background-color is just there to trigger the transition timing.
  .modal-overlay {
    mix-blend-mode: color-burn;
  }
  .modal-overlay, .mobile-nav-links {
    transition: opacity .2s ease-in-out, transform .2s;
  }
}
.home-nav-enter, .home-nav-leave-to {
  > .modal-overlay, > .mobile-nav-links {
    opacity: 0;
  }
  > .mobile-nav-links {
    transform: perspective(10em) translate3d(-70%, 20%, -5em);
  }
}
.mobile-nav {
  @media (min-width: $viewport-small) {
    display: none;
  }
  &-launcher {
    transition: filter .3s, opacity .3s;
    &.mobileNavOpen {
        opacity: .1;
    }
  }
  &-close-button {
    color: rgba(255, 255, 255, .7);
    cursor: pointer;
    position: absolute;
      top: 1.1em;
      left: 100%;
  }
  &-links {
    border-left: 1px solid rgba(255, 255, 255, .5);
    box-sizing: border-box;
    display: flex;
      flex-direction: column;
      align-content: flex-start;
      justify-content: space-between;
    font-size: (24rem/16);
//    height: 55vh;
    height: 33vh;
    width: 50vw;
    padding: .5em 0 1em .5em;
    position: fixed;
//      top: 22.5%;
      top: 33%;
      left: 50%;
      z-index: 6;
    text-align: left;
    transition: transform $mobile-nav-transition-duration ease-out;
    transform: perspective(10em) translate3d(-50%, 0, 0);
    > h2 {
      color: rgba(255, 255, 255, .66);
      font-weight: 400;
      font-size: (16em/24);
      margin: 0;
      padding: (16rem/16);
      text-transform: uppercase;
    }
    > a {
      color: #fff;
      display: block;
      padding: .75em;
      text-decoration: none;
    }
  }
}
.modal-overlay {
  background: rgba(0,0,0,.6);
  @supports (mix-blend-mode: color-burn) {
//    background: linear-gradient(45deg, rgba(0,32,42,1) 0%, rgba(0,66,88,1) 16%, rgba(0,82,152,1) 39%, rgba(0,82,152,1) 59%, rgba(34,118,190,1) 65%, rgba(0,82,152,1) 73%, rgba(201,242,255,1) 100%);
//    mix-blend-mode: color-burn;
  }
  position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
}

</style>
