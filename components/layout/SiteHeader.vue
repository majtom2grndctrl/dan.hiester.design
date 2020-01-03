<script lang="ts">
import Vue from 'vue';
import BackButton from '~/components/buttons/BackButton.vue';
import Nav1 from '~/components/layout/Nav1.vue';
import paths from '~/paths';
import DhLogo from '~/components/DhLogo.vue';

const SiteHeader = Vue.extend({
  components: {
    BackButton,
    Nav1,
    DhLogo,
  },
  props: {
    navMode: {
      type: String,
    },
  },
  data () {
    return {
      paths,
    }
  },
  computed: {
    routeName () {
      const routeName = this.$route.name;
      if (routeName === 'portfolio' || routeName === 'blog') {
        return 'tier-1';
      } else {
        return 'other';
      };
    }
  },
});

export default SiteHeader;
</script>


<template>
  <header class="SiteHeader">
    <div class="logo-container">
      <NuxtLink :to="paths.about" exact class="logo-link">
        <dh-logo class="dh-logo" />
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
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: var(--spatial-scale-1);
    margin: calc(var(--spatial-scale-1) * -1) 0;
    padding: var(--spatial-scale-1) var(--spatial-scale-2);
    text-decoration: none;
  }
  .dh-logo {
    height: var(--spatial-scale-3);
    width: var(--spatial-scale-3);
    margin: 0 var(--spatial-scale-00) 0 0;
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
