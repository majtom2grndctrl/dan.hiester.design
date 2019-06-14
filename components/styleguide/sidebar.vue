<template>
  <div class="StyleGuideSidebar">
    <header class="header">
      <dy-logo />
      <span class="distantly-yours">Distantly Yours</span>
    </header>
    <nav class="nav">
      <nuxt-link :to="routes.brandPrinciples">Brand Principles</nuxt-link>
      <nuxt-link :to="routes.typography">Typography</nuxt-link>
      <nuxt-link :to="routes.colors">Colors</nuxt-link>
      <nuxt-link :to="routes.components">Components</nuxt-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import DyLogo from '~/components/DyLogo.vue'
import { StyleGuideRoutes as routes } from '~/layouts/styleguide.vue'

@Component({
  components: {
    DyLogo,
  }
})
class StyleGuideSidebar extends Vue {
  data() {
    return {
      routes
    }
  }
}

export default StyleGuideSidebar
</script>


<style lang="postcss" scoped>
  .StyleGuideSidebar {
    border-right: 1px solid var(--gray-600);
    box-sizing: border-box;
    padding: var(--spatial-scale-2);
  }
  .header {
    display: flex;
      flex-direction: row;
      align-items: center;
    font-family: var(--font-heading);
  }
  .distantly-yours {
    color: var(--gray-400);
    display: block;
    font-weight: 500;
    font-size: var(--type-scale-0);
    letter-spacing: .166ex;
    line-height: var(--spatial-scale-0);
    margin: .125em 0 0 var(--spatial-scale-0);
    text-transform: uppercase;
  }
  .nav {
    margin: var(--spatial-scale-2) 0;
    & > a {
      background-color: rgba(255, 255, 255, 0);
      border-radius: var(--spatial-scale-00);
      display: block;
      color: var(--gray-500);
      padding: var(--spatial-scale-00);
      text-decoration: none;
      transition: background-color .25s, color .25s;
      &:active, &:focus {
        background-color: var(--gray-800);
        color: var(--gray-400);
      }
    }
  }
</style>
