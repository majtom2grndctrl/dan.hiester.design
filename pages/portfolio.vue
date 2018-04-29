<template>
  <main-layout>
    <template slot="section-title"><span class="p">P</span><span class="o">o</span>rt<span class="f">f</span><span class="o">o</span>li<span class="o">o</span></template>
    <template slot="section-navigation"><nuxt-link to="/portfolio">All Projects</nuxt-link><nuxt-link to="/portfolio/ux">UX</nuxt-link></template>
    <nuxt-child/>
  </main-layout>
</template>


<script>
import MainLayout, { pageTransition } from '~/components/layout/MainLayout.vue'

export default {
  components: {
    MainLayout
  }
}
</script>


<style lang="scss" scoped>
  .t1-title {
    > .p {
      letter-spacing: -.05ex;
    }
    > .o {
      letter-spacing: -.05ex;
    }
    > .f {
      letter-spacing: -.025ex;
    }
  }
</style>
