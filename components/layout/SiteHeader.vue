<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import DyLogo from '~/components/DyLogo.vue'
//import MobileNavLauncher from '~/components/buttons/MobileNavLauncher.vue'

@Component({
  components: {
    DyLogo,
//    MobileNavLauncher
  }
})

class SiteHeader extends Vue {
/*
  data() {
    return {
      mobileNav: false
    }
  }
*/
}


export default SiteHeader
</script>


<template>
  <header class="SiteHeader">
    <div class="logo-container">
      <nuxt-link to="/" class="logo-link">
        <span class="dan-hiester">Dan Hiester</span>
      </nuxt-link>
    </div>
    <nav class="site-nav">
      <nuxt-link to="/portfolio">Portfolio</nuxt-link>
      <nuxt-link to="/blog">Blog</nuxt-link>
    </nav>
  </header>
</template>


<style lang="postcss" scoped>
  .SiteHeader {
    display: flex;
      align-items: stretch;
      flex-direction: row;
    margin: var(--spatial-scale-00) 0 0 0;
  }
  .logo-container {
    display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-content: center;
    margin-right: var(--spatial-scale-4);
  }
  .logo-link {
    display: block;
    padding: var(--spatial-scale-1);
    text-decoration: none;
  }
  .dan-hiester {
    color: var(--gray-500);
    display: block;
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: var(--type-scale-1);
    letter-spacing: .166ex;
    line-height: var(--spatial-scale-1);
    text-transform: uppercase;
  }
  @media (--viewport-small) {
    .SiteHeader {
      margin-right: var(--spatial-scale-4);
      margin-left: var(--spatial-scale-00);
    }
  }
  @media (--viewport-medium) {
    .SiteHeader {
      display: grid;
        grid-column-gap: var(--spatial-scale-2);
        grid-template-columns: 2fr 10fr;
      margin: var(--spatial-scale-4) auto 0 auto;
      width: calc(100% * 12 / 14);
    }
    .logo-container {
      grid-area: 1 / 1 / 2 / 2;
      margin: 0;
      width: auto;
    }
    .logo-link {
      padding-left: 0;
    }
    .dan-hiester {
    }
  }

/* 
   Navigation
******************************/
.site-nav {
  display: flex;
    flex-direction: row;
  margin: 0;
  & > a {
    border-bottom: calc(1rem/16) solid rgba(3, 161, 213, 0);
    color: #97A3A7;
    display: flex;
      align-items: center;
    font-size: var(--type-scale-0);
    line-height: var(--spatial-scale-0);
    margin: 0 var(--type-scale-1) 0 0;
    padding: 0 var(--spatial-scale-1) 0;
    text-decoration: none;
    transition: border-bottom-color .66s;
    &.active {
      border-bottom-color: rgba(3, 161, 213, .3);
    }
    & > span {
      display: block;
    }
  }
}
@media (min-resolution: 1.25dppx) {
  .site-nav > a.active {
    border-bottom-width: calc(1.5rem/16);
  }
}
@media (--viewport-medium) {
  .site-nav {
    grid-area: 1 / 2 / 2 / 3;
    margin-left: calc(var(--spatial-scale-1) * -1);
    & > a {
      font-size: var(--type-scale-0);
    }
  }
}

</style>
