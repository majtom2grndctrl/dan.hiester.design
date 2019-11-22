<template>
  <client-only>
  <main-layout>
    <template slot="section-title">
      <SectionTitleLink to="/portfolio">Portfolio</SectionTitleLink>
    </template>
    <!--<template slot="section-navigation"><nuxt-link to="/portfolio">All Projects</nuxt-link><nuxt-link to="/portfolio/ux">UX</nuxt-link></template>-->
    <nuxt-child/>
  </main-layout>
  </client-only>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import MainLayout, { swipeTransition } from '~/components/layout/MainLayout.vue'
import SectionTitleLink from '~/components/buttons/SectionTitleLink.vue';

@Component({
  components: {
    MainLayout,
    SectionTitleLink,
  }
})

class Portfolio extends Vue {
  transition (to, from) {
    return swipeTransition(to, from)
  }
  head () {
    return {
      title: 'Portfolio'
    }
  }
}

export default Portfolio

</script>


<style lang="postcss" scoped>
  .p {
    letter-spacing: -.075ex;
  }
  .o {
    letter-spacing: -.05ex;
  }
  .f {
    letter-spacing: -.1ex;
  }
</style>
