<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import DyLogo from '~/components/DyLogo.vue'
import paths from '~/paths'

@Component({
  components: {
    DyLogo,
//    MobileNavLauncher
  }
})

class SiteHeader extends Vue {
  showNav = true;
  lastScrollPosition = 0;
  paths = paths;

  get mobileNavClass(): string {
    return !this.showNav ? 'nav1--hidden-mobile' : '';
  }

  onScroll() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPosition < 0) return;
    
    this.showNav = currentScrollPosition < this.lastScrollPosition;
    this.lastScrollPosition = currentScrollPosition;

    if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) return;
    this.showNav = currentScrollPosition < this.lastScrollPosition;
    this.lastScrollPosition = currentScrollPosition;
  }

  mounted() {
    window.addEventListener('scroll', this.onScroll);
  }

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }
}


export default SiteHeader
</script>


<template>
  <header class="SiteHeader">
    <div class="logo-container">
      <nuxt-link :to="paths.about" exact class="logo-link">
        <span class="dan-hiester">Dan Hiester</span>
      </nuxt-link>
    </div>
    <nav class="nav1" :class="mobileNavClass">
      <nuxt-link :to="paths.portfolio">Portfolio</nuxt-link>
      <nuxt-link :to="paths.blog">Blog</nuxt-link>
      <nuxt-link :to="paths.about" exact>About</nuxt-link>
    </nav>
  </header>
</template>


<style lang="postcss" scoped>
  .SiteHeader {
    display: flex;
      align-items: stretch;
      justify-items: stretch;
      flex-direction: row;
    height: var(--spatial-scale-1);
    margin: var(--spatial-scale-5) 0 0 0;
  }
  .logo-container {
    display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-content: center;
      flex-basis: 100%;
  }
  .logo-link {
    color: var(--gray-500);
    display: block;
    margin: calc(var(--spatial-scale-1) * -1) 0;
    padding: var(--spatial-scale-1) var(--spatial-scale-2);
    text-decoration: none;
  }
  .dan-hiester {
    font-size: var(--type-scale-1);
    line-height: var(--spatial-scale-1);
  }
  @media (--viewport-xs) {

  }
  @media (--viewport-small) {
    .SiteHeader {
      margin-right: auto;
      margin-left: auto;
      max-width: 30rem;
    }
    .logo-link {
      padding-left: var(--spatial-scale-4);
      margin-left: calc(var(--spatial-scale-4) * -1);
    }
  }
  @media (--viewport-medium) {
    .SiteHeader {
      margin: var(--spatial-scale-4) auto 0 auto;
      max-width: unset;
      width: calc(100% * 12 / 14);
    }
    .logo-link {
      padding-left: 0;
      margin-left: inherit;
    }
  }

/* 
   Navigation
******************************/
.nav1 {
  background: var(--white);
  display: flex;
    flex-direction: row;
    flex-basis: 100%;
    justify-content: center;
  padding: var(--spatial-scale-4);
  position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
  transition: transform .2s ease-out;
    transform: translate3d(0, 100%, 0);
  &.nav1--hidden-mobile {
    transform: translate3d(0, 0, 0);
  }
  & > a {
    background-color: var(--link-bg-inactive);
    border-radius: var(--spatial-scale-00);
    color: #97A3A7;
    display: flex;
      align-items: center;
    font-size: var(--type-scale-0);
    line-height: var(--spatial-scale-0);
    margin: calc(var(--spatial-scale-1) * -1) var(--spatial-scale-00);
    padding: var(--spatial-scale-1);
    position: relative;
    text-decoration: none;
    transition: color .66s, background-color .66s;
    &:after {
      background: var(--bg-blue-600);
      border-radius: 100%;
      content: '';
      display: block;
      height: calc(3.5rem/16);
      opacity: 0;
      position: absolute;
        top: 90%;
        left: 49%;
      transition: opacity .66s, background-color .4s;
      width: calc(3.5rem/16);
    }
    &.active {
      color: var(--bg-blue-600);
      &:after {
        opacity: 1;
      }
    }
    &:focus {
      background-color: var(--link-bg-active);
      &.active {
        background-color: var(--link-bg-inactive);
      }
    }
  }
}
@media(--viewport-small) {
  .nav1 {
    position: static;
    justify-content: flex-end;
    padding: 0;
    &.nav1--hidden-mobile {
      transition: none;
      transform: none;
    }
    & > a {
      margin: calc(var(--spatial-scale-1) * -1) calc(var(--spatial-scale-1) * -1) calc(var(--spatial-scale-1) * -1) var(--spatial-scale-1);
    }
  }
}
@media (--viewport-medium) {
  .nav1 {
    margin-right: 0;
    & > a {
      font-size: var(--type-scale-0);
    }
  }
}

</style>
