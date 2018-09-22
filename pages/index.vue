<template>
  <main class="home-container">
    <header>
      <dy-logo width="71px" height="52px" style="mix-blend-mode: color-burn;" d-fill="rgba(3, 161, 213, 100)" d-style="mix-blend-mode: color-burn;" y-fill="rgba(3, 161, 213, 100)" y-style="mix-blend-mode: color-burn;" overlap-fill="#00B3EE" />
      <h1 class="title" :class="mobileNav && 'mobileNavOpen'">Distantly Yours</h1>
      <div class="home-subtitle">Push Farther</div>
    </header>
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
    <nav class="widescreen-links">
      <nuxt-link to="/portfolio">Portfolio</nuxt-link>
      <nuxt-link to="/blog">Blog</nuxt-link>
    </nav>
    <nuxt-link class="down-button-link" :class="mobileNav && 'mobileNavOpen'" to="/portfolio">
      <down-button />
    </nuxt-link>
  </main>
</template>


<script>
import DyLogo from '~/components/DyLogo'
import CloseButton from '~/components/buttons/CloseButton'
import DownButton from '~/components/buttons/DownButton'
import MobileNavLauncher from '~/components/buttons/MobileNavLauncher'

export default {
  components: {
    CloseButton,
    DownButton,
    DyLogo,
    MobileNavLauncher
  },
  data: function() {
    return {
      mobileNav: false,
      logoColors: {
        dColor: '',
        overlapColor: '#00B3EE',
        yColor: '',
      }
    }
  },
  methods: {
    handleScroll () {
      // TODO Navigate to portfolio on scroll down.
      return router.push('/portfolio')
    }
  },
  transition(to, from) {
    if (!from) {
      return
    } else if (from.path === '/') {
      return
    } else {
      return {
        name: 'fade'
      }
    }
  }
}
</script>


<style lang="scss" scoped>
$mobile-nav-transition-duration: .3s;
$viewport-small: $viewport-small + 5rem;

.home-container {
  background: url('/img/home-header-background@1x.jpg') 50% 50% / cover no-repeat #6E8A93;
  min-height: 100vh;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  text-align: center;
  @media (min-width: $viewport-medium) {
    background: url('/img/home-header-background@1x.jpg') 50% 50% / contain no-repeat #6E8A93;
  }
  @media (min-resolution: 150dpi) {
    background-image: url('/img/home-header-background@2x.jpg');
  }
  > header {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: $viewport-small) {
      flex-direction: row;
      padding-top: (105rem/16);
    }
  }
}
.home-logo {
  mix-blend-mode: color-burn;
  position: relative;
    z-index: 1;
}
.title {
  color: $gray-400;
  display: block;
  font-family: $font-heading;
  font-weight: 600;
  font-size: (24rem/16);
  letter-spacing: .166ex;
  margin: (30rem/16) (20rem/16) 0;
  text-transform: uppercase;
  text-align: center;
  transition: filter .2s, opacity .2s;
  &.mobileNavOpen {
    opacity: .075;
    @media (min-width: $viewport-small) {
      opacity: 1;
    }
  }
  @media (min-width: $viewport-small) {
    margin: 0 (46rem/16) 0 (30rem/16);
    text-align: left;
  }
  @media (min-width: $viewport-medium) {
    font-size: (29rem/16);
  }
}
.home-subtitle {
  display: none;
  @media (min-width: $viewport-small) {
    color: #797979;
    display: block;
    font-weight: 300;
    font-size: (21rem/16);
    letter-spacing: .05ex;
    padding: 0 0 0 (82rem/16);
    position: relative;
    text-transform: uppercase;
    &:before {
      color: #076381;
      content: '//';
      font-size: (38rem/16);
      font-weight: bold;
      font-style: italic;
      mix-blend-mode: color-burn;
      padding: 0 .125em;
      position: absolute;
        left: .125em;
        top: 50%;
      transform: translate(0, -50%);
    }
  }
}
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
    margin: 10vh 0 0 0;
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
    background: linear-gradient(45deg, rgba(0,32,42,1) 0%, rgba(0,66,88,1) 16%, rgba(0,82,152,1) 39%, rgba(0,82,152,1) 59%, rgba(34,118,190,1) 65%, rgba(0,82,152,1) 73%, rgba(201,242,255,1) 100%);
    mix-blend-mode: color-burn;
  }
  position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
}
.widescreen-links {
  display: none;
  @media (min-width: $viewport-small) {
    display: block;
    padding-top: (65rem/16);
    > a {
      color: $gray-400;
      font-size: (21rem/16);
      text-decoration: none;
      @media (min-width: $viewport-small) {
        margin: 0 (38rem/16);
      }
    }
  }
}

.down-button {
  &-link {
    position: absolute;
      bottom: 3%;
      z-index: 1;
    opacity: .68;
    transition: filter .3s, opacity .3s;
    &.mobileNavOpen {
      filter: blur(.25em);
      opacity: .5;
      @media (min-width: $viewport-small) {
        opacity: 1;
        filter: none;
      }
    }
  }
  .circle {
    opacity: 0;
  }
}
</style>
