<template>
  <main-layout>
    <template slot="section-title">Notes <span class="subtitle">From the other side of the fog</span></template>
    <nuxt-child/>
  </main-layout>
</template>


<script>
import MainLayout, { swipeTransition } from '~/components/layout/MainLayout.vue'

export default {
  components: {
    MainLayout
  },
  transition(to, from) {
    return swipeTransition(to, from)
  }
}
</script>


<style lang="postcss" scoped>
  .o {
    letter-spacing: -.05ex;
  }
  .subtitle {
    display: block;
    font-size: calc(20rem/16);
    line-height: calc(28em/20);
    margin: calc(10rem/16) 0 0 calc(2rem/16);
  }
  @media (--viewport-medium) {
    .subtitle {
      margin: calc(10rem/16) 0 calc(-28rem/16) calc(2rem/16);
    }
  }
</style>
