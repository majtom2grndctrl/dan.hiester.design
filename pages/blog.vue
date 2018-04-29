<template>
  <main-layout>
    <template slot="section-title">Bl<span class="o">o</span>g</template>
    <nuxt-child/>
  </main-layout>
</template>


<script>
import MainLayout from '~/components/layout/MainLayout.vue'

export default {
  components: {
    MainLayout
  }
}
</script>


<style lang="scss" scoped>
  .t1-title {
    > .o {
      letter-spacing: -.05ex;
    }
  }
</style>
