<template>
  <main-layout>
    <template slot="section-title"><span class="p">P</span><span class="o">o</span>rt<span class="f">f</span><span class="o">o</span>li<span class="o">o</span></template>
    <template slot="section-navigation"><nuxt-link to="/portfolio">All Projects</nuxt-link><nuxt-link to="/portfolio/ux">UX</nuxt-link></template>
    <nuxt-child/>
  </main-layout>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import MainLayout, { swipeTransition } from '~/components/layout/MainLayout.vue'

@Component({
  components: {
    MainLayout
  }
})
export default class Portfolio extends Vue {
  transition(to, from) {
    return swipeTransition(to, from)
  }
}
</script>


<style lang="scss" scoped>
  .p {
    letter-spacing: -.075ex;
  }
  .o {
    letter-spacing: -.05ex;
  }
  .f {
    letter-spacing: -.025ex;
  }
</style>
