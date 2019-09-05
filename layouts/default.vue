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
import './webfonts.css';

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
