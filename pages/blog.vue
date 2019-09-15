<template>
  <main-layout>
    <template slot="section-title">
      <SectionTitleLink to="/blog">
        Blog
      </SectionTitleLink>
    </template>
    <nuxt-child/>
  </main-layout>
</template>


<script>
import MainLayout, { swipeTransition } from '~/components/layout/MainLayout.vue';
import SectionTitleLink from '~/components/buttons/SectionTitleLink.vue';

export default {
  components: {
    MainLayout,
    SectionTitleLink,
  },
  transition (to, from) {
    return swipeTransition(to, from)
  },
  head () {
    return {
      title: 'Blog: Notes from the fog',
    }
  }
}
</script>


<style lang="postcss" scoped>
  .o {
    letter-spacing: -.05ex;
  }
  .subtitle {
    display: block;
    font-size: var(--type-scale-1);
    line-height: calc(28em/20);
    margin: var(--spatial-scale-0) 0 0 calc(2rem/16);
  }
  @media (--viewport-medium) {
    .subtitle {
      margin: calc(10rem/16) 0 calc(var(--spatial-scale-1) * -1) calc(3rem/16);
    }
  }
</style>
