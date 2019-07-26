<template>
  <footer class="SiteFooter">
    <h2><span class="dan-hiester">Dan Hiester</span></h2>
    <p class="description">A Senior UI/UX Designer who specializes in code and design systems.</p>
    <social-icons class="icons" />
    <div>More footer!</div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import SocialIcons from '~/components/contact/SocialIcons.vue';

@Component({
  components: {
    SocialIcons
  }
})
class SiteFooter extends Vue {}

export default SiteFooter;
</script>

<style lang="postcss" scoped>
  .SiteFooter {
    box-sizing: border-box;
    padding: var(--spatial-scale-3);
  }
  @media(--viewport-small) {

  }
  @media(--viewport-medium) {
    
  }
  .dan-hiester {
    font-size: var(--type-scale-3);
    line-height: var(--spatial-scale-3);
    width: 6em;
  }
  .description {
    font-size: var(--type-scale-1);
    line-height: var(--spatial-scale-6);
    margin: 1em 0;
  }
  .icons {
    width: 75%;
  }
</style>

