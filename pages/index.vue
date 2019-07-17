<template>
  <main class="About">
    <div class="container">
      <div>
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
          <p>As a “big D” Designer and “little d” developer, I’m <em>thrilled</em> to see design systems revolutionize the way teammates with disperate skillsets communicate with each other about their shared work.</p>
        </div>
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
    grid-area: 1 / 5 / 2 / 11;
  }
}
.intro {
  font-family: var(--font-body);
}
.name {
  display: block;
  font-size: var(--type-scale-4);
  font-weight: 600;
  line-height: var(--spatial-scale-4);
  margin: 0 0 var(--spatial-scale-0) -.055em;
  transform: scaleX(1.1);
  transform-origin: left;
}
.title {
  color: var(--gray-500);
  display: block;
  font-family: var(--font-heading);
  font-size: var(--type-scale-2);
}
.overview {
  font-size: var(--type-scale-1);
  line-height: var(--spatial-scale-5);
}

</style>
