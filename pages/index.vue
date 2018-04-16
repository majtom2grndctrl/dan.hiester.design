<template>
  <main class="home-container">
    <header>
      <dy-logo class="home-logo" />
      <h1 class="title">Distantly Yours</h1>
      <div class="subtitle">Push Farther</div>
    </header>
    <div class="mobile-nav">
      <button v-on:click="mobileNav = !mobileNav" class="mobile-nav-launcher">
        <svg width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title></title>
            <g id="Home-Mobile-3a" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-118.000000, -365.000000)" opacity="0.599524457">
                <g id="Group" transform="translate(118.000000, 357.000000)" fill="#717171">
                    <g id="mobile-nav-launcher-icon" transform="translate(0.000000, 8.000000)">
                        <rect id="Rectangle-2" style="mix-blend-mode: multiply;" x="0" y="0" width="18" height="3"></rect>
                        <rect id="Rectangle-2-Copy" style="mix-blend-mode: multiply;" x="0" y="7" width="18" height="3"></rect>
                        <rect id="Rectangle-2-Copy-2" style="mix-blend-mode: multiply;" x="0" y="14" width="18" height="3"></rect>
                    </g>
                </g>
            </g>
        </svg>
        <span>Menu</span>
      </button>
      <transition name="home-nav">
        <div v-if="mobileNav">
          <div class="modal-overlay" v-on:click="mobileNav = !mobileNav" />
          <nav class="mobile-nav-links" v-on:click="mobileNav = !mobileNav">
            <CloseButton class="mobile-nav-close-button"/>
            <h2>Menu</h2>
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>
            <nuxt-link to="/elements-of-my-process">Process</nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </nav>
        </div>
      </transition>
    </div>
    <nav class="widescreen-links">
      <nuxt-link to="/portfolio">Portfolio</nuxt-link>
      <nuxt-link to="/elements-of-my-process">Process</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </nav>
    <nuxt-link class="down-button-link" to="/portfolio">
      <down-button />
    </nuxt-link>
  </main>
</template>


<script>
import CloseButton from '~/components/CloseButton.vue'
import DownButton from '~/components/DownButton.vue'
import DyLogo from '~/components/DyLogo.vue'

export default {
  components: {
    CloseButton,
    DownButton,
    DyLogo
  },
  data: function() {
    return {
      mobileNav: false
    }
  },
}
</script>

<style lang="scss" scoped>
$mobile-nav-transition-duration: .3s;

.home-container {
  background: url('~/assets/img/home-header-background@1x.jpg') 50% 50% / cover no-repeat #6E8A93;
  min-height: 100vh;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  text-align: center;
  @media (min-width: $viewport-medium) {
    background: url('~/assets/img/home-header-background@1x.jpg') 50% 50% / contain no-repeat #6E8A93;
  }
  @media (min-resolution: 150dpi) {
    background-image: url('~/assets/img/home-header-background@2x.jpg');
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
  @media (min-width: $viewport-small) {
    margin: 0 (46rem/16) 0 (30rem/16);
    text-align: left;
  }
  @media (min-width: $viewport-medium) {
    font-size: (29rem/16);
  }
}
.subtitle {
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
  mix-blend-mode: color-burn;
  position: absolute;
    z-index: 6;
  transition: opacity .2s ease-in-out, background-color $mobile-nav-transition-duration;
}
.home-nav-enter, .home-nav-leave-to {
  opacity: 0;
  > .mobile-nav-links {
    transform: perspective(10em) translate3d(-50%, 0, -5em);
  }
}
.mobile-nav {
  @media (min-width: $viewport-small) {
    display: none;
  }
  &-launcher {
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
    margin: 10vh 0 0 0;
    text-transform: uppercase;
    width: 5em;
    &:active {
      outline: none;
    }
  }
  &-close-button {
    color: rgba(255, 255, 255, .5);
    cursor: pointer;
    position: absolute;
      top: .95em;
      left: 150%;
  }
  &-links {
    border-left: 1px solid rgba(255, 255, 255, .5);
    box-sizing: border-box;
    display: flex;
      flex-direction: column;
      align-content: flex-start;
      justify-content: space-between;
    height: 40vh;
    padding: 1em 0 1em 2em;
    position: fixed;
      top: 30%;
      left: 38%;
      z-index: 6;
    text-align: left;
    transition: transform $mobile-nav-transition-duration ease-out;
    transform: perspective(10em) translate3d(-50%, 0, 0);
    > h2 {
      color: rgba(255, 255, 255, .66);
      font-weight: 400;
      font-size: (16rem/16);
      margin: 0;
      text-transform: uppercase;
    }
    > a {
      color: #fff;
      display: block;
      font-size: (24rem/16);
      text-decoration: none;
    }
  }
}
.modal-overlay {
  background: linear-gradient(45deg, rgba(0,66,88,1) 16%, rgba(3,161,213,1) 46%, rgba(3,161,213,1) 58%, rgba(201,242,255,1) 94%);
  mix-blend-mode: color-burn;
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
      top: 78%;
      z-index: 1;
    opacity: .68;
  }
  .circle {
    opacity: 0;
  }
}
</style>
