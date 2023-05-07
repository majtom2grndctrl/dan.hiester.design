<template>
  <main-layout>
    <template slot="SectionTitle">
      <SectionTitleLink to="/portfolio">Portfolio</SectionTitleLink>
    </template>
    <!--<template slot="SectionNavigation"><nuxt-link to="/portfolio">All Projects</nuxt-link><nuxt-link to="/portfolio/ux">UX</nuxt-link></template>-->
    <nuxt-child/>
  </main-layout>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout, { swipeTransition } from '~/components/layout/MainLayout.vue'
import SectionTitleLink from '~/components/buttons/SectionTitleLink.vue';

const Portfolio = defineComponent({
  components: {
    MainLayout,
    SectionTitleLink,
  },
  transition (to, from) {
    return swipeTransition(to, from)
  },
  head () {
    return {
      title: 'Portfolio'
    }
  }
})

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
