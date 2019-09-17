<script lang="ts">
import { Vue } from 'nuxt-property-decorator';
import { createComponent, ref, computed, onMounted, onBeforeUnmount } from '@vue/composition-api';
import { Route } from 'vue-router';
import BackButton from '~/components/buttons/BackButton.vue';
import Nav1 from '~/components/layout/Nav1.vue';
import paths from '~/paths';

const SiteHeader = createComponent({
  components: {
    BackButton,
    Nav1,
  },
  setup(props, context) {
    const navMode = computed(() => {
      const routeName = context.root.$route.name;
      if (routeName === 'portfolio' || routeName === 'blog') {
        return 'tier-1';
      } else {
        return 'other';
      };
    });

    return {
      paths,
      navMode,
    };
  },
});

export default SiteHeader;
</script>


<template>
  <header class="SiteHeader">
    <div class="logo-container">
      <NuxtLink :to="paths.about" exact class="logo-link">
        <span class="dan-hiester">Dan Hiester</span>
      </NuxtLink>
    </div>
    <Nav1 :class="navMode" />
  </header>
</template>


<style lang="postcss" scoped>
  .SiteHeader {
    display: flex;
      align-items: stretch;
      justify-items: stretch;
      flex-direction: row;
    height: var(--spatial-scale-1);
    margin: var(--spatial-scale-5) 0 0 0;
  }
  .logo-container {
    display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-content: center;
      flex-basis: 100%;
  }
  .logo-link {
    color: var(--gray-500);
    display: block;
    margin: calc(var(--spatial-scale-1) * -1) 0;
    padding: var(--spatial-scale-1) var(--spatial-scale-2);
    text-decoration: none;
  }
  .dan-hiester {
    font-size: var(--type-scale-1);
    line-height: var(--spatial-scale-1);
  }
  .Nav1 {
    display: none;
  }
  @media (--viewport-xs) {

  }
  @media (--viewport-small) {
    .SiteHeader {
      margin-right: auto;
      margin-left: auto;
      max-width: 30rem;
    }
    .logo-link {
      padding-left: var(--spatial-scale-4);
      margin-left: calc(var(--spatial-scale-4) * -1);
    }
    .Nav1 {
      display: inherit;
    }
  }
  @media (--viewport-medium) {
    .SiteHeader {
      margin: var(--spatial-scale-4) auto 0 auto;
      max-width: unset;
      width: calc(100% * 12 / 14);
    }
    .logo-link {
      padding-left: 0;
      margin-left: inherit;
    }
  }

</style>
