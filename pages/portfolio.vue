<template>
  <main class="container">
    <nuxt-link to="/">Home</nuxt-link>
    <h1>Portfolio</h1>
    <nuxt-link to="/portfolio">All Projects</nuxt-link> | <nuxt-link to="/portfolio/ux">UX</nuxt-link>
    <nuxt-child/>
  </main>
</template>


<script>
export default {
  transition(to, from) {
    console.log('to = ', to, 'from = ', from)
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


<style lang="scss">
</style>
