<template>
  <main-layout>
    <template slot="section-title">Bl<span class="o">o</span>g</template>
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


<style lang="scss" scoped>
  .o {
    letter-spacing: -.05ex;
  }
</style>
