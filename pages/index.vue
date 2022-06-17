<template>
  <main class="About">
    <div class="container">
      <div>
        <h1 class="intro">
          <span class="dan-hiester">Dan Hiester</span>
          <span class="title">A Product Designer with a mixed background in design and front-end engineering.</span>
        </h1>
        <nav class="nav">
          <nuxt-link :to="paths.portfolio">Portfolio</nuxt-link>
          <nuxt-link :to="paths.blog">Blog</nuxt-link>
        </nav>
        <!--
        <div class="overview">
          <p>I’m an experienced UI and UX generalist who loves to practice design thinking and product strategy both at the office, and at community events.</p>
        </div>
        <p>Next: <nuxt-link :to="paths.portfolio">Portfolio</nuxt-link></p>
        -->
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import paths from '~/paths';

@Component({})
class AboutPage extends Vue {
  paths = paths;
}

export default AboutPage;
</script>

<style lang="postcss" scoped>

.About {
  color: var(--gray-400);
  display: grid;
  grid-gap: var(--spatial-scale-1);
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  min-height: 100vh;
}
.container {
  display: flex;
    flex-direction: column;
    justify-content: center;
  grid-area: 1 / 2 / 2 / 6;
}
.nav {
  & a {
    display: inline-block;
    margin-right: var(--spatial-scale-3);
  }
}
.overview {
  & p:not(:first-child) {
    font-size: var(--type-scale-0);
    line-height: var(--spatial-scale-4);
  }
}
@media(--viewport-small) {
  .About {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .container {
    grid-area: 1 / 3 / 2 / 7;
  }
}
@media(--viewport-medium) {
  .About {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .container {
    grid-area: 1 / 5 / 2 / 10;
  }
}
.intro {
  font-family: var(--font-body);
}
.dan-hiester {
  font-family: var(--font-heading);
  font-size: var(--type-scale-4);
  font-weight: 500;
  line-height: var(--spatial-scale-4);
  margin: 0 0 var(--spatial-scale-0) -.055em;
}
.title {
  color: var(--gray-400);
  display: block;
  font-size: var(--type-scale-0);
  font-weight: 400;
  line-height: var(--spatial-scale-4);
  max-width: 21em;
}
.overview {
  font-size: var(--type-scale-0);
  line-height: var(--spatial-scale-4);
}

</style>
