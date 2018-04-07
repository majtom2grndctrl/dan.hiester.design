<template>
  <main class="home-container">
    <header>
      <dy-logo class="home-logo" />
      <h1 class="title">Distantly Yours</h1>
      <div class="subtitle">Push Farther</div>
    </header>
    <div class="links">
      <nuxt-link to="/portfolio">Portfolio</nuxt-link>
      <nuxt-link to="/elements-of-my-process">Process</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
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
  background: url('~/assets/img/home-header-background@1x.jpg') 50% 50% / contain no-repeat #6E8A93;
  min-height: 100vh;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  text-align: center;
  @media (min-resolution: 150dpi) {
    background-image: url('~/assets/img/home-header-background@2x.jpg');
  }
  > header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: (105rem/16);
  }
}
.home-logo {
  mix-blend-mode: color-burn;
}

.title {
  color: $gray-400;
  display: block;
  font-family: $font-heading;
  font-weight: 600;
  font-size: 30px;
  letter-spacing: .166ex;
  margin: 0 4rem 0 (30rem/16);
  text-transform: uppercase;
}

.subtitle {
  color: #797979;
  font-weight: 300;
  font-size: (21rem/16);
  letter-spacing: .05ex;
  padding: 0 0 0 (70rem/16);
  position: relative;
  text-transform: uppercase;
  &:before {
    color: #076381;
    content: '//';
    font-size: (38rem/16);
    font-weight: bold;
    font-style: italic;
    mix-blend-mode: color-burn;
    padding: 0 .125em;
    position: absolute;
      left: .125em;
      top: 50%;
    transform: translate(0, -50%);
  }
}

.links {
  padding-top: (65rem/16);
  > a {
    color: $gray-400;
    font-size: (21rem/16);
    margin: 0 (38rem/16);
    text-decoration: none;
  }
}
</style>
