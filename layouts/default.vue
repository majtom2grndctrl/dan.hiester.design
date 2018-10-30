<template>
  <div>
    <transition :name="this.$route.path === '/' ? '' : 'home'">

      <!-- Display splash when path is '/' -->
      <template v-if="this.$route.path === '/'">
        <nuxt/>
      </template>

      <!-- Display main site template when path isn't '/' -->
      <template v-if="this.$route.path !== '/'">
        <div>
          <site-header />
          <nuxt/>
          <footer class="footer"></footer>
        </div>
      </template>
    </transition>
  </div>
</template>


<script>
import SiteHeader from '~/components/layout/SiteHeader.vue'

export default {
  components: {
    SiteHeader
  }
}
</script>

<style lang="scss">
// Navitation
// -- Mobile Navigation

$mobile-nav-transition-duration: .3s;

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

// -- Desktop navigation
.desktop-nav {
  display: none;
  @media (min-width: $viewport-small) {
    display: flex;
      flex-direction: row;
      align-items: center;
    margin: 0 0 0 (-8rem/16);
    transition: transform .5s ease, opacity .5s;
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
.push-farther {
  display: none;
  @media (min-width: $viewport-medium) {
    color: #797979;
    display: block;
    font-weight: 300;
    font-size: (15rem/16);
    letter-spacing: .05ex;
    opacity: .6;
    padding: 0;
    position: absolute;
      top: (48rem/16);
      right: (100% * 1/14);
    text-transform: uppercase;
    transition: transform .5s ease, opacity .5s, filter .5s;
    &:before {
      color: #076381;
      content: '//';
      font-size: (26em/15);
      font-weight: bold;
      font-style: italic;
      mix-blend-mode: color-burn;
      padding: 0 .125em;
      position: absolute;
        left: -(20em/15);
        top: 45%;
      transform: translate(0, -50%);
    }
  }
}

</style>
