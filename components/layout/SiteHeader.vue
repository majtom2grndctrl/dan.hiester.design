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
    display: block;
    font-weight: 400;
    font-size: var(--type-scale-1);
/*    letter-spacing: .166ex; */
    line-height: var(--spatial-scale-1);
    transform: scaleX(1.1);
    transform-origin: left;
  }
  @media (--viewport-small) {
    .logo-link {
      padding-left: var(--spatial-scale-4);
    }
  }
  @media (--viewport-medium) {
    .SiteHeader {
      margin: var(--spatial-scale-4) auto 0 auto;
      width: calc(100% * 12 / 14);
    }
    .logo-link {
      padding-left: 0;
    }
  }

/* 
   Navigation
******************************/
.site-nav {
  display: flex;
    flex-direction: row;
    flex-basis: 100%;
    justify-content: flex-end;
  margin: 0 var(--spatial-scale-2) 0 0;
  & > a {
    color: #97A3A7;
    display: flex;
      align-items: center;
    font-size: var(--type-scale-0);
    line-height: var(--spatial-scale-0);
    margin: calc(var(--spatial-scale-1) * -1) calc(var(--spatial-scale-1) * -1) calc(var(--spatial-scale-1) * -1) var(--spatial-scale-1);
    padding: var(--spatial-scale-1);
    text-decoration: none;
    transition: border-bottom-color .66s;
    &:after {
      background: red;
      content: '';
      display: block;
    }
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
@media(--viewport-small) {
  .site-nav {
    margin-right: var(--spatial-scale-4);
  }
}
@media (--viewport-medium) {
  .site-nav {
    margin-right: 0;
    & > a {
      font-size: var(--type-scale-0);
    }
  }
}

</style>
