<template>
  <main class="About">
    <div class="container">
      <div>
        <h1 class="intro">
          <span class="dan-hiester">Dan Hiester</span>
          <span class="title">Design Technologist</span>
        </h1>
        <nav class="nav">
          <nuxt-link :to="paths.portfolio">Portfolio</nuxt-link>
          <nuxt-link :to="paths.blog">Blog</nuxt-link>
        </nav>
        <div class="overview">
          <p>A Product Designer specializing in&nbsp;code and design&nbsp;systems.</p>
          <p>Think of me as a Designer with an uppercase D, and a developer with a lowercase d. I spend enough time on both sides of the designer-developer hand-off, I see lots of opportunity to make it more productive, fun, and focused on delivering great&nbsp;products!</p>
        </div>
        <p>Next: <nuxt-link :to="paths.portfolio">Portfolio</nuxt-link></p>
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
    grid-area: 1 / 5 / 2 / 11;
  }
}
.intro {
  font-family: var(--font-body);
}
.dan-hiester {
  font-size: var(--type-scale-4);
  line-height: var(--spatial-scale-4);
  margin: 0 0 var(--spatial-scale-0) -.055em;
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
