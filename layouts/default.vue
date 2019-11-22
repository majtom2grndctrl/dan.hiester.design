<template>
  <transition :name="transitionName">
    <!-- Display main site template when path isn't '/' -->
    <template v-if="!isRootPath">
      <div>
        <div class="ContentLayout" id="ContentLayout">
          <SiteHeader :navMode="navMode" />
          <nuxt/>
          <SiteFooter :class="navMode" />
        </div>
        <Nav1 :class="navMode" class="nav1" />
        <Nav2 v-if="navMode !== 'tier-1'" class="nav2" />
      </div>
    </template>

    <!-- Display splash when path is '/' -->
    <template v-if="isRootPath">
      <nuxt/>
    </template>
  </transition>
</template>


<script lang="ts">
import Vue from 'vue'
import SiteHeader from '~/components/layout/SiteHeader.vue'
import SiteFooter from '~/components/layout/SiteFooter.vue';
import Nav1 from '~/components/layout/Nav1.vue';
import Nav2 from '~/components/layout/Nav2.vue';
import './webfonts.css';

const DefaultLayout =  Vue.extend({
  components: {
    SiteHeader,
    SiteFooter,
    Nav1,
    Nav2,
  },
  computed: {
    transitionName: function () {
      return this.$route.path === '/' ? '' : 'home';
    },
    isRootPath: function () {
      return this.$route.path === '/';
    },
    pathBase: function () {
      return this.$route.matched[0].path;
    },
    navMode: function () {
      const routeName = this.$route.name;
      if (routeName === 'portfolio' || routeName === 'blog') {
        return 'tier-1';
      } else {
        return 'other';
      };
    },
  }
});

export const scrollToContentTop = () => {
  if (!document) return;
  document.getElementById('ContentLayout')!.scrollTo(0, 0);
};

export default DefaultLayout
</script>

<style lang="postcss" scoped>
  .ContentLayout {
    position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  @media (--viewport-small) {
    .ContentLayout {
      position: static;
      overflow: visible;
    }
    .ContentLayout + .Nav1.nav1, .Nav2.nav2 {
      display: none;
    }
  }
</style>

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
