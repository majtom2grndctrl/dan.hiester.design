<template>
  <footer class="SiteFooter">
    <div class="meta">
      <h2 class="title"><span class="dan-hiester">Dan Hiester</span></h2>
      <p class="description">A Senior UI/UX Designer who specializes in code and design systems.</p>
      <social-icons class="icons" />
    </div>
    <div class="end">
      <nav class="nav">
        <nuxt-link :to="paths.portfolio" class="footer-link">Portfolio</nuxt-link>
        <nuxt-link :to="paths.blog" class="footer-link">Blog</nuxt-link>
        <nuxt-link :to="paths.about" class="footer-link">About</nuxt-link>
      </nav>
      <div class="copyright">&copy; {{ year }} Dan Hiester</div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import SocialIcons from '~/components/contact/SocialIcons.vue';
import paths from '~/paths';

@Component({
  components: {
    SocialIcons
  }
})
class SiteFooter extends Vue {
  year = new Date().getUTCFullYear();
  paths = paths;
}

export default SiteFooter;
</script>

<style lang="postcss" scoped>
  .SiteFooter {
    box-sizing: border-box;
    padding: var(--spatial-scale-6) var(--spatial-scale-3) var(--spatial-scale-3) var(--spatial-scale-3);
  }
  @media(--viewport-small) {

  }
  @media(--viewport-medium) {
    .SiteFooter {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      column-gap: var(--spatial-scale-1);
      margin: 0 auto;
      padding: 0;
      width: calc(100% * 12 / 14);
    }
  }

  /*
    Footer Meta - Info and links about me
  **************************/
  .meta {
    margin-bottom: var(--spatial-scale-8);
  }
  .title {
    margin: 0 0 0 0;
  }
  .dan-hiester {
    color: var(--gray-600);
    font-size: var(--type-scale-3);
    line-height: var(--spatial-scale-3);
    width: 6em;
  }
  .description {
    color: var(--gray-400);
    font-size: var(--type-scale-1);
    line-height: var(--spatial-scale-6);
    margin: var(--spatial-scale-3) 0;
  }
  .icons {
    box-sizing: content-box;
    width: calc(75% + (var(--spatial-scale-3) * 2));
  }
  @media (--viewport-small) {
    .meta {
      margin: 0 auto;
      max-width: 30rem;
    }
    .icons {
      width: 66%;
    }
  }
  @media (--viewport-medium) {
    .meta {
      grid-area: 1 / 1 / 2 / 5;
      margin: 0;
      max-width: unset;
    }
    .description {
      line-height: var(--spatial-scale-5);
      margin-right: -1em; /* Kinda hacky, but this prevents "specializes" from wrapping */
    }
    .icons {
      width: calc(75% + (var(--spatial-scale-3) * 2));
    }
  }


  /*
    Footer End - What are you still doing here? The movie’s over!
  **************************/
  .end {
    color: var(--gray-400);
    margin: var(--spatial-scale-3) 0;
  }
  .nav {
    display: flex;
      flex-direction: row;
    margin: calc(var(--spatial-scale-00) * -1);
  }
  .footer-link {
    background-color: var(--link-bg-inactive);
    border-radius: var(--spatial-scale-00);
    color: var(--gray-400);
    display: block;
    padding: var(--spatial-scale-00);
    text-decoration: none;
    transition: background-color .44s;
    &:focus {
      background-color: var(--link-bg-active);
    }
  }
  .copyright {
    margin: var(--spatial-scale-1) 0;
  }
  @media (--viewport-small) {
    .end {
      display: flex;
        flex-direction: row;
        justify-content: space-between;
      margin: var(--spatial-scale-6) auto 0;
      max-width: 30rem;
    }
    .copyright {
      margin: unset;
    }
  }
  @media(--viewport-medium) {
    .end {
      display: block;
      grid-area: 1 / 9 / 2 / 13;
      margin: 0;
      max-width: unset;
      text-align: right;
    }
    .nav {
      display: block;
      margin: 0 0 var(--spatial-scale-4) 0;
    }
  }

</style>

