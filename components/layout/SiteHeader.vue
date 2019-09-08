<script lang="ts">
import { Vue } from 'nuxt-property-decorator';
import { createComponent, ref, computed } from '@vue/composition-api';
import { Route } from 'vue-router';
import paths from '~/paths'

const SiteHeader = createComponent({
  setup(props, context) {
    const navMode = computed(() => {
      const routeName = context.root.$route.name;
      if (routeName === 'portfolio' || routeName === 'blog') {
        return 'tier-1';
      } else {
        return 'other';
      };
    });

    return {
      paths,
      navMode,
    };
  },
});

export default SiteHeader;
</script>


<template>
  <header class="SiteHeader">
    <div class="logo-container">
      <nuxt-link :to="paths.about" exact class="logo-link">
        <span class="dan-hiester">Dan Hiester</span>
      </nuxt-link>
    </div>
    <nav class="nav1" :class="navMode">
      <nuxt-link :to="paths.portfolio">Portfolio</nuxt-link>
      <nuxt-link :to="paths.blog">Blog</nuxt-link>
      <nuxt-link :to="paths.about" exact>About</nuxt-link>
    </nav>
    <nav class="nav2">
      <nuxt-link :to="paths.portfolio" v-if="true">Back to Portfolio</nuxt-link>
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
  box-shadow: rgba(0, 0, 0, .3) 0 0 10px;
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
  & > a {
    background-color: var(--link-bg-inactive);
    border-radius: var(--spatial-scale-00);
    color: #97A3A7;
    display: flex;
      align-items: center;
      justify-content: center;
    flex-basis: 20%;
    font-size: var(--type-scale-0);
    font-weight: 500;
    font-family: var(--font-heading);
    line-height: var(--spatial-scale-0);
    min-width: 20%;
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
    &:focus, &:hover {
      background-color: var(--link-bg-active);
      color: var(--gray-400);
    }
  }
}
@media(--viewport-small) {
  .nav1 {
    box-shadow: none;
    position: static;
    justify-content: flex-end;
    padding: 0;
    transition: none;
    transform: none;
    & > a {
      flex-basis: unset;
      font-weight: 400;
      font-family: var(--font-body);
      justify-content: unset;
      min-width: unset;
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
