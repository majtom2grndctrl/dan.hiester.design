<template>
  <div>
    <transition :name="transitionName">

      <!-- Display splash when path is '/' -->
      <template v-if="isRootPath">
        <nuxt/>
      </template>

      <!-- Display main site template when path isn't '/' -->
      <template v-if="!isRootPath">
        <div>
          <site-header />
          <nuxt/>
          <site-footer />
        </div>
      </template>
    </transition>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import SiteHeader from '~/components/layout/SiteHeader.vue'
import SiteFooter from '~/components/layout/SiteFooter.vue';

@Component( {
  components: {
    SiteHeader,
    SiteFooter,
  }
})
class DefaultLayout extends Vue {
  get transitionName() {
    return this.$route.path === '/' ? '' : 'home';
  };
  get isRootPath() {
    return this.$route.path === '/';
  }
}

export default DefaultLayout
</script>

<style lang="postcss">

@media (--viewport-small) {
  :root {
    --type-scale-base: calc(20rem/16);
  }
}

@media (--viewport-medium) {
  :root {
    --scale-multiplier: 1.25;
    --type-scale-base: calc(22rem/16);
  }
}


/*
  Styles for content retrieved from the cloud CMS
****************************/

.prismic-content {
  font-size: var(--type-scale-0);
  line-height: var(--spatial-scale-5);
  color: var(--gray-400);
  & .lede p {
    font-size: var(--type-scale-1);
    line-height: var(--type-scale-3);
  }
  & img {
    max-width: 100%;
  }
  & p, & ol, & ul {
    margin-top: var(--spatial-scale-1);
    margin-bottom: var(--spatial-scale-2);
  }
  & p, & ol, & ul, & h2, & h3, & h4, & h5, & h6 {
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 40rem;
    padding-right: var(--spatial-scale-2);
  }
  & p, & h2, & h3, & h4, & h5, & h6 {
    padding-left: var(--spatial-scale-2);
  }
  & ol, & ul {
    padding-left: var(--spatial-scale-8);
  }
  & h1, & h2, & h3, & h4, & h5, & h6 {
    color: var(--gray-600);
    margin-top: 1.5em;
    margin-bottom: .75em;
  }
  & h2 {
    font-size: var(--type-scale-3);
    line-height: var(--spatial-scale-7);
    margin-top: var(--spatial-scale-7);
    margin-bottom: var(--spatial-scale-1);
  }
  & figure {
    background: var(--bg-blue-400);
    color: var(--white);
    font-size: var(--type-scale-0);
    margin-right: var(--spatial-scale-2);
    margin-left: var(--spatial-scale-2);
    max-width: calc(40rem - var(--spatial-scale-4) * 2);
    padding: calc(1rem/16) calc(1rem/16) 1.5em calc(1rem/16);
    &.cover-image {
      margin-right: 0;
      margin-left: 0;
    }
    & a {
      color: var(--white);
    }
    & p {
      line-height: var(--spatial-scale-4);
      margin: var(--spatial-scale-0) var(--spatial-scale-2);
    }
  }
  & > pre {
    background: var(--gray-800);
    box-sizing: border-box;
    color: var(--bg-blue-200);
    overflow-x: auto;
    margin-top: var(--spatial-scale-2);
    margin-bottom: var(--spatial-scale-2);
    padding: var(--spatial-scale-2) var(--spatial-scale-2);
  }
}
@media (--viewport-small) {
  .prismic-content {
    font-size: var(--font-scale-1);
    & p, & ol, & ul {
      line-height: var(--spatial-scale-5);
    }
    & h2 {
      font-size: var(--type-scale-4);
      line-height: var(--spatial-scale-8);
    }
    & p, & ol, & ul, & h2, & h3, & h4, & h5, & h6 {
      padding-right: var(--spatial-scale-5);
    }
    & p, & h2, & h3, & h4, & h5, & h6 {
      padding-left: var(--spatial-scale-5);
    }
    & .lede p {
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-7);
    }
    & figure {
      & p {
        margin-right: auto;
        margin-left: auto;
      }
      &.cover-image {
        max-width: unset;
      }
      &.large {
        margin-right: auto;
        margin-left: auto;
      }
      &.aside {
        float: right;
        margin-left: var(--spatial-scale-1);
        max-width: calc(100% * 5 / 12);
      }
    }
    & > pre {
      margin: var(--spatial-scale-2);
    }
  }
}
@media (--viewport-medium) {
  .prismic-content {
    font-size: var(--type-scale-1);
    & p, & ol, & ul {
      line-height: var(--spatial-scale-5);
      margin-top: var(--spatial-scale-3);
      margin-bottom: var(--spatial-scale-3);
    }
    & li {
      margin-bottom: var(--spatial-scale-2);
    }
    & p, & ol, & ul, & h2, & h3, & h4, & h5, & h6 {
      max-width: unset;
      width: calc(100% * 8 / 12);
    }
    & p, & h2, & h3, & h4, & h5, & h6 {
      padding: unset;
    }
    & ul, & ol {
      padding-left: var(--spatial-scale-5);
    }
    & .lede p {
      font-size: var(--type-scale-2);
      line-height: var(--spatial-scale-6);
      margin-bottom: var(--spatial-scale-5);
    }
    & figure {
      font-size: var(--type-scale-0);
      margin-right: 0;
      margin-left: 0;
      &.large {
        max-width: calc(100% * 8 / 12);
      }
      &.aside {
        max-width: calc(100% * 5 / 12);
        margin-right: calc(100% * 1 / 12);
        margin-left: var(--spatial-scale-3);
      }
      & p {
        margin-right: auto;
        margin-left: auto;
        width: 68%;
        line-height: var(--spatial-scale-4);
      }
    }
    & h2 {
      font-size: var(--type-scale-4);
      line-height: var(--spatial-scale-7);
      margin: var(--spatial-scale-7) auto var(--spatial-scale-3);
    }
    & h3 {
      font-size: var(--type-scale-3);
    }
    & > pre {
      font-size: var(--type-scale-0);
      line-height: var(--spatial-scale-4);
      margin-right: 0;
      margin-left: 0;
    }
  }
}
@media (--viewport-large) {
  .prismic-content {
    /*font-size: calc(74rem/16);*/
    & p, & ol, & ul {
      /*line-height: calc(53em/24);*/
    }
  }
}

/*
  Styles for types of blocks
***********************************/

.block-preview {
  font-size: var(--type-scale-1);
  line-height: var(--spatial-scale-6);
}
@media (--viewport-medium) {
  .block-preview{
    font-size: var(--type-scale-0);
    line-height: var(--spatial-scale-4);
  }
}

@media (--viewport-medium) {
  .grid-8-3 {
    display: grid;
    grid-template-columns: 8fr 1fr 3fr;
    column-gap: calc(20rem/16);
    margin: calc(100% * 1 / 12) 0;
    & > .grid-child-8 {
      grid-area: 1 / 1 / 2 / 2;
    }
    & > .grid-child-3 {
      grid-area: 1 / 3 / 2 / 4;
    }
  }
}

</style>
