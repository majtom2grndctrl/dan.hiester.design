<template>
  <main class="home-container">
    <header>
      <dy-logo class="home-logo" />
      <h1 class="title">Distantly Yours</h1>
      <div class="subtitle">Push Farther</div>
    </header>
    <div class="mobile-nav">
      <button class="mobile-nav-launcher">Menu</button>
      <nav v-if="mobile-nav" class="mobile-nav-links">
        <nuxt-link to="/portfolio">Portfolio</nuxt-link>
        <nuxt-link to="/elements-of-my-process">Process</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </nav>
    </div>
    <nav class="widescreen-links">
      <nuxt-link to="/portfolio">Portfolio</nuxt-link>
      <nuxt-link to="/elements-of-my-process">Process</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </nav>
    <down-button />
  </main>
</template>


<script>
import DyLogo from '~/components/DyLogo.vue'
import DownButton from '~/components/DownButton.vue'

export default {
  components: {
    DyLogo,
    DownButton
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  background: url('~/assets/img/home-header-background@1x.jpg') 50% 50% / cover no-repeat #6E8A93;
  min-height: 100vh;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  text-align: center;
  @media (min-width: $viewport-medium) {
    background: url('~/assets/img/home-header-background@1x.jpg') 50% 50% / contain no-repeat #6E8A93;
  }
  @media (min-resolution: 150dpi) {
    background-image: url('~/assets/img/home-header-background@2x.jpg');
  }
  > header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: (105rem/16);
    @media (min-width: $viewport-small) {
      flex-direction: row;
    }
  }
}
.home-logo {
  mix-blend-mode: color-burn;
}

.title {
  color: $gray-400;
  display: block;
  font-family: $font-heading;
  font-weight: 500;
  font-size: (24rem/16);
  letter-spacing: .166ex;
  margin: (30rem/16) (20rem/16) 0;
  text-transform: uppercase;
  text-align: center;
  @media (min-width: $viewport-small) {
    margin: 0 (46rem/16) 0 (30rem/16);
    text-align: left;
  }
  @media (min-width: $viewport-medium) {
    font-size: (29rem/16);
  }
}

.subtitle {
  display: none;
  @media (min-width: $viewport-small) {
    color: #797979;
    display: block;
    font-weight: 300;
    font-size: (21rem/16);
    letter-spacing: .05ex;
    padding: 0 0 0 (82rem/16);
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
}
.mobile-nav {
  @media (min-width: $viewport-small) {
    display: none;
  }
}
.widescreen-links {
  display: none;
  @media (min-width: $viewport-small) {
    display: block;
    padding-top: (65rem/16);
    > a {
      color: $gray-400;
      font-size: (21rem/16);
      text-decoration: none;
      @media (min-width: $viewport-small) {
        margin: 0 (38rem/16);
      }
    }
  }
}

.down-button {
  position: absolute;
    top: 78%;
  opacity: .68;
  .circle {
    opacity: 0;
  }
}
</style>
