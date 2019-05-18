<!-- Splash page -->

<template>
  <main class="Splash">
    <header>
      <dy-logo width="71px" height="52px" style="mix-blend-mode: color-burn;" d-fill="rgba(3, 161, 213, 100)" d-style="mix-blend-mode: color-burn;" y-fill="rgba(3, 161, 213, 100)" y-style="mix-blend-mode: color-burn;" overlap-fill="#00B3EE" />
      <h1 class="title" :class="mobileNav && 'mobileNavOpen'">Distantly Yours</h1>
      <div class="subtitle">Push Farther</div>
    </header>
    <div :class="'mobile-nav' + (isNavigating ? ' mobile-nav--navigating' : '')">
      <mobile-nav-launcher v-on:launch="mobileNav = !mobileNav" :class="mobileNav && 'mobileNavOpen'" />
      <transition name="splash-nav">
        <div v-if="mobileNav">
          <div class="modal-overlay" v-on:click="mobileNav = !mobileNav" />
          <nav class="mobile-nav-links">
            <CloseButton class="mobile-nav-close-button"/>
            <h2>Menu</h2>
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>
            <nuxt-link to="/blog"><div v-on:click="isNavigating = true">Blog</div></nuxt-link>
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
      isNavigating: false,
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


<style lang="postcss">
  @custom-media --viewport-small (min-width: 31.25rem); /* 500 / 16 */
  @custom-media --viewport-medium (min-width: 51.25rem); /* 820 / 16 */
  @custom-media --viewport-large (min-width: 81.25rem); /* 1300 / 16 */
</style>


<style lang="postcss" scoped>

.Splash {
/*  --viewport-small: calc(--viewport-small + 5rem);*/
  background: url('/img/home-header-background@1x.jpg') 50% 50% / cover no-repeat #6E8A93;
  min-height: 100vh;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  text-align: center;
  & > header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.title {
  color: var(--gray-400);
  display: block;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: calc(24rem/16);
  letter-spacing: .166ex;
  margin: calc(30rem/16) calc(20rem/16) 0;
  text-transform: uppercase;
  text-align: center;
  transition: filter .2s, opacity .2s;
  &.mobileNavOpen {
    opacity: .075;
  }
}
.subtitle {
  display: none;
}
@media (min-resolution: 150dpi) {
  .Splash {
    background-image: url('/img/home-header-background@2x.jpg');
  }
}
@media (--viewport-small) {
  .Splash > header {
    flex-direction: row;
    padding-top: calc(105rem/16);
  }
  .title {
    margin: 0 calc(46rem/16) 0 calc(30rem/16);
    text-align: left;
    &.mobileNavOpen {
      opacity: 1;
    }
  }
  .subtitle {
    color: #797979;
    display: block;
    font-weight: 300;
    font-size: calc(21rem/16);
    letter-spacing: .05ex;
    padding: 0 0 0 calc(82rem/16);
    position: relative;
    text-transform: uppercase;
    &:before {
      color: #076381;
      content: '//';
      font-size: calc(38rem/16);
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
@media (--viewport-medium) {
  .Splash {
    background: url('/img/home-header-background@1x.jpg') 50% 50% / contain no-repeat #6E8A93;
  }
  .title {
    font-size: calc(29rem/16);
  }
}

/*
Page transitions
****************************/

.splash-nav-enter-active, .splash-nav-leave-active {
  transition: background-color var(--mobile-nav-transition-duration); /* background-color is just there to trigger the transition timing. */
  & .modal-overlay, & .mobile-nav-links {
    transition: opacity calc(var(--mobile-nav-transition-duration) * 2/3) ease-in-out, transform calc(var(--mobile-nav-transition-duration) * 2/3);
  }
}
.splash-nav-enter, .splash-nav-leave-to {
  & > .modal-overlay, & > .mobile-nav-links {
    opacity: 0;
  }
  & > .mobile-nav-links {
    transform: perspective(10em) translate3d(-70%, 20%, -5em);
  }
}

/*
  Navigation
****************************/

.mobile-nav-launcher {
  margin: 10vh 0 0 0;
  transition: filter .3s, opacity .3s;
  &.mobileNavOpen {
      opacity: .1;
  }
}
.mobile-nav-close-button {
  color: rgba(255, 255, 255, .7);
  cursor: pointer;
  position: absolute;
    top: 1.1em;
    left: 100%;
}
.mobile-nav-links {
  border-left: 1px solid rgba(255, 255, 255, .5);
  box-sizing: border-box;
  display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: space-between;
  font-size: calc(24rem/16);
  height: 33vh;
  width: 50vw;
  padding: .5em 0 1em .5em;
  pointer-events: none;
  position: fixed;
    top: 33%;
    left: 50%;
    z-index: 6;
  text-align: left;
  transition: transform var(--mobile-nav-transition-duration) ease-out;
  transform: perspective(10em) translate3d(-50%, 0, 0);
  & > h2 {
    color: rgba(255, 255, 255, .66);
    font-weight: 400;
    font-size: calc(16em/24);
    margin: 0;
    padding: calc(16rem/16);
    text-transform: uppercase;
  }
  & > a {
    color: #fff;
    display: block;
    padding: .75em;
    pointer-events: all;
    text-decoration: none;
  }
}
.modal-overlay {
  background: rgba(0,0,0,.6);
  filter: saturate(100%);
  transition: filter .9s linear;
  position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
}
.mobile-nav--navigating {
  & .modal-overlay {
    filter: saturate(0%) brightness(80%);
  }
}
@supports (mix-blend-mode: color-burn) {
  .modal-overlay {
    background: linear-gradient(45deg, rgba(0,32,42,1) 0%, rgba(0,66,88,1) 16%, rgba(0,82,152,1) 39%, rgba(0,82,152,1) 59%, rgba(34,118,190,1) 65%, rgba(0,82,152,1) 73%, rgba(201,242,255,1) 100%);
    mix-blend-mode: color-burn;
  }
}
.widescreen-links {
  display: none;
}

.down-button-link {
  position: absolute;
    bottom: 3%;
    z-index: 1;
  opacity: .68;
  transition: filter .3s, opacity .3s;
  &.mobileNavOpen {
    filter: blur(.25em);
    opacity: .5;
  }
}
.down-button .circle {
  opacity: 0;
}

@media (--viewport-small) {
  .mobile-nav {
    display: none;
  }
  .widescreen-links {
    display: block;
    padding-top: calc(65rem/16);
    & > a {
      color: var(--gray-400);
      font-size: calc(21rem/16);
      text-decoration: none;
      margin: 0 calc(38rem/16);
    }
  }
  .down-button.mobileNavOpen {
    opacity: 1;
    filter: none;
  }
}
</style>
