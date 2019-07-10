<template>
  <main class="About">
    <div class="container">
      <h1 class="intro">
        <span class="name">Dan Hiester</span>
        <span class="title">Design Technologist</span>
      </h1>
      <nav class="nav">
        <nuxt-link :to="paths.portfolio">Portfolio</nuxt-link>
        <nuxt-link :to="paths.blog">Blog</nuxt-link>
      </nav>
      <div class="overview">
        <p>I’m a Senior UI/UX Designer whose range of deliverables includes production code.</p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import paths from '~/paths';

@Component({})
class AboutPage extends Vue {
  data() {
    return {
      paths
    }
  }
}

export default AboutPage;
</script>

<style lang="postcss">
  @custom-media --viewport-xs (min-width: 20.1rem); /* 321.6 / 16 */
  @custom-media --viewport-small (min-width: 31.25rem); /* 500 / 16 */
  @custom-media --viewport-medium (min-width: 51.25rem); /* 820 / 16 */
  @custom-media --viewport-large (min-width: 81.25rem); /* 1300 / 16 */
</style>


<style lang="postcss" scoped>

.About {
  display: grid;
  grid-gap: var(--spatial-scale-1);
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  min-height: 100vh;
}
.container {
  grid-area: 1 / 2 / 2 / 6;
}
@media(--viewport-small) {
  .About {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
}
@media(--viewport-medium) {
  .About {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .container {
    grid-area: 1 / 5 / 2 / 11;
  }
}
.intro {
  font-family: var(--font-body);
}
.name {
  display: block;
  font-size: var(--type-scale-6);
  transform: scaleX(1.1);
  transform-origin: left;
}
.title {
  display: block;
  font-size: var(--type-scale-2);
}

/*
Page transitions
****************************/

.splash-nav-enter-active, .splash-nav-leave-active {
  transition: background-color var(--mobile-nav-transition-duration); /* background-color is just there to trigger the transition timing. */
  & .modal-overlay, & .mobile-nav-links {
    transition: opacity calc(var(--mobile-nav-transition-duration) * 2/3) ease-in-out, transform calc(var(--mobile-nav-transition-duration) * 2/3);
  }
}
.splash-nav-enter, .splash-nav-leave-to {
  & > .modal-overlay, & > .mobile-nav-links {
    opacity: 0;
  }
  & > .mobile-nav-links {
    transform: perspective(10em) translate3d(-70%, 20%, -5em);
  }
}
</style>
