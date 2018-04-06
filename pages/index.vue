<template>
  <main class="home-container">
    <div>
      <app-logo/>
      <h1 class="title">
        distantlyyours-v8
      </h1>
      <h2 class="subtitle">
        Codebase for distantlyyours.com, version 8.
      </h2>
      <div class="links">
        <nuxt-link to="/portfolio">Portfolio</nuxt-link>
      </div>
    </div>
  </main>
</template>


<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>


<style scoped>
.home-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
