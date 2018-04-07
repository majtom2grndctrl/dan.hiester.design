<template>
  <main class="home-container">
    <header>
      <dy-logo class="home-logo" />
      <h1 class="title">Distantly Yours</h1>
      <div>Push Farther</div>
    </header>
    <div class="links">
      <nuxt-link to="/portfolio">Portfolio</nuxt-link>
    </div>
  </main>
</template>


<script>
import DyLogo from '~/components/DyLogo.vue'

export default {
  components: {
    DyLogo
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  background: url('/img/home-header-background@1x.jpg') 50% 50% / contain no-repeat #6E8A93;
  min-height: 100vh;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  text-align: center;
  > header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
.home-logo {
  mix-blend-mode: color-burn;
}

.title {
  color: #717171;
  display: block;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 30px;
  letter-spacing: .166ex;
  margin: 0 4rem 0 (30rem/16);
  text-transform: uppercase;
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
