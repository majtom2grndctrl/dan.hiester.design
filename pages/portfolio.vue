<template>
  <main class="container">
    <h1>Portfolio</h1>
    <nuxt-link to="/">Home</nuxt-link> | <nuxt-link to="/portfolio/ux">UX</nuxt-link>
    <nuxt-child/>
  </main>
</template>


<script>
export default {
  transition(to, from) {
    console.log('to =', to, 'from = ', from)
    if (from.path === '/') return {
      name: 'home',
      mode: 'in-out'
    }
  }
}
</script>


<style lang="scss">
</style>
