<template>
  <footer class="SiteFooter">
    <div class="meta">
      <h2 class="title"><span class="dan-hiester">Dan Hiester</span></h2>
      <p class="description">A Product Designer who leverages technical skills and strategic thinking to elevate design.</p>
      <SocialIcons class="icons" />
    </div>
    <div class="end">
      <nav class="nav">
        <div class="item">
          <nuxt-link :to="paths.portfolio" class="footer-link">Portfolio</nuxt-link>
        </div>
        <div class="item">
          <nuxt-link :to="paths.blog" class="footer-link">Blog</nuxt-link>
        </div>
        <div class="item">
          <nuxt-link :to="paths.about" class="footer-link">About</nuxt-link>
        </div>
      </nav>
      <div class="copyright">&copy; {{ thisYear }} Dan Hiester</div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import SocialIcons from '~/components/contact/SocialIcons.vue';
import paths from '~/paths';

const thisYear = new Date().getUTCFullYear()

</script>

<style lang="postcss" scoped>
  .SiteFooter {
    box-sizing: border-box;
    padding: var(--spatial-scale-6) var(--spatial-scale-3) 0 var(--spatial-scale-3);
    &.tier-1 {
      margin: 0 0 calc(var(--spatial-scale-7) * 2) 0;
    }
  }
  @media(--viewport-small) {
    .SiteFooter {
      margin: unset;
      &.tier-1 {
        margin: 0 auto var(--spatial-scale-7);
      }
    }
  }
  @media(--viewport-medium) {
    .SiteFooter {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      column-gap: var(--spatial-scale-1);
      margin: 0 auto 7vh;
      padding: 0;
      width: calc(100% * 12 / 14);
    }
  }

  /*
    Footer Meta - Info and links about me
  **************************/
  .meta {
    margin-bottom: var(--spatial-scale-5);
  }
  .title {
    margin: 0 0 0 0;
  }
  .dan-hiester {
    color: var(--gray-600);
    font-size: var(--type-scale-3);
    font-weight: 500;
    line-height: var(--spatial-scale-3);
    margin-left: -.04em;
    width: 6em;
  }
  .description {
    color: var(--gray-400);
    font-size: var(--type-scale-1);
    line-height: var(--spatial-scale-6);
    margin: var(--spatial-scale-3) 0;
    max-width: 40em;
  }
  .icons.SocialIcons { /* Increase specificity to override component default */
    justify-content: flex-start;
  }
  @media (--viewport-small) {
    .meta {
      margin: 0 auto;
      max-width: 30em;
    }
    .icons {
      width: calc(66% + (var(--spatial-scale-3) * 2));
    }
  }
  @media (--viewport-medium) {
    .meta {
      grid-area: 1 / 1 / 2 / 6;
      margin: 0;
    }
    .description {
      line-height: var(--spatial-scale-5);
    }
    .icons.SocialIcons { /* Increase specificity to override component default */
      /* The width here assumes a parent container is using 4 columns in the grid,
         and this block should occupy 3 of the parent container’s 4 columns. */
      width: calc(100% * 3/4 + (var(--spatial-scale-3) * 2));
      justify-content: space-between;
    }
  }


  /*
    Footer End - What are you still doing here? The movie’s over!
  **************************/
  .end {
    color: var(--gray-400);
    margin: 0;
  }
  .nav {
    display: none;
  }
  .footer-link {
    background-color: var(--link-bg-inactive);
    border-radius: var(--spatial-scale-00);
    color: var(--gray-400);
    display: block;
    font-size: var(--type-scale-0);
    line-height: var(--spatial-scale-0);
    padding: var(--spatial-scale-00);
    text-decoration: none;
    transition: background-color .44s;
    &:focus, &:hover {
      background-color: var(--link-bg-active);
    }
  }
  .copyright {
    font-size: var(--type-scale-0);
    line-height: var(--spatial-scale-0);
    margin: var(--spatial-scale-3) 0;
  }
  @media (--viewport-small) {
    .end {
      display: flex;
        flex-direction: row;
        justify-content: space-between;
      margin: var(--spatial-scale-6) auto var(--spatial-scale-3);
      max-width: 30rem;
    }
    .nav {
      display: flex;
        flex-direction: row;
      margin: calc(var(--spatial-scale-00) * -1);
    }
    .copyright {
      margin: unset;
    }
  }
  @media(--viewport-medium) {
    .end {
      display: block;
      grid-area: 1 / 11 / 2 / 13;
      margin: 0;
      max-width: unset;
      text-align: right;
    }
    .nav {
      display: block;
      margin: var(--spatial-scale-5) 0 var(--spatial-scale-3) 0;
    }
    .nav > .item {
      overflow: hidden;
    }
    .footer-link {
      float: right;
    }
  }

</style>

