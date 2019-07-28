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
  paths = paths;
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
    <nav class="nav1">
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
  display: flex;
    flex-direction: row;
    flex-basis: 100%;
    justify-content: flex-end;
  margin: 0 var(--spatial-scale-2) 0 0;
  & > a {
    background-color: var(--link-bg-inactive);
    border-radius: var(--spatial-scale-00);
    color: #97A3A7;
    display: flex;
      align-items: center;
    font-size: var(--type-scale-0);
    line-height: var(--spatial-scale-0);
    margin: calc(var(--spatial-scale-1) * -1) calc(var(--spatial-scale-1) * -1) calc(var(--spatial-scale-1) * -1) var(--spatial-scale-1);
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
    &[href="/"] {
      display: none;
    }
  }
}
@media(--viewport-small) {
  .nav1 {
    margin-right: var(--spatial-scale-4);
  }
  .nav1 a[href="/"] {
    display: inherit;
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
