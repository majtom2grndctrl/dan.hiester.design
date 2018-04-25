<template>
  <main-layout>
    <main class="container">
      <h1>Portfolio</h1>
      <nuxt-link to="/portfolio">All Projects</nuxt-link> | <nuxt-link to="/portfolio/ux">UX</nuxt-link>
      <nuxt-child/>
    </main>
  </main-layout>
</template>


<script>
import MainLayout from '~/components/layout/MainLayout.vue'

export default {
  components: {
    MainLayout
  },
  transition(to, from) {
    if (!from) {
      return {
        name: 'page'
      }
    } else if (from.path === '/') {
      return {
        name: 'home',
        mode: 'in-out'
      }
    } else {
      return {
        name: 'page'
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
