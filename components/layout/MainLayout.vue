<template>
  <main class="MainLayout">
    <header class="header">
      <h1 class="title">
        <slot name="SectionTitle"/>
      </h1>
      <nav class="nav" v-if="showSectionNavigation">
        <slot name="SectionNavigation"/>
      </nav>
    </header>
    <slot/>
  </main>
</template>


<script lang="ts">
import Vue from 'vue';

const MainLayout = Vue.extend({
  computed: {
    showSectionNavigation () {
      return !!this.$slots['SectionNavigation'];
    },
  },
});

interface TransitionReturn {
    name?: String
}

interface TransitionPath {
    path: String
}

export function swipeTransition(to: TransitionPath, from?: TransitionPath): TransitionReturn {
  if (!from) {
    return {
      name: 'swipe'
    }
  } else if (from.path === '/') {
    return {}
  } else if (to.path === '/') {
    return {
      name: 'fade'
    }
  }
   else {
    return {
      name: 'swipe'
    }
  }
}
export default MainLayout
</script>


<style lang="postcss" scoped>
.MainLayout {
  margin: 0;
}
.header {
  display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
  margin: var(--spatial-scale-5) var(--spatial-scale-2) var(--spatial-scale-4) var(--spatial-scale-2);
}
.title {
  color: var(--gray-600);
  font-size: var(--type-scale-5);
  font-weight: 500;
  letter-spacing: -.0125em;
  line-height: var(--spatial-scale-5);
  margin: 0 0 0 -.03em;
}
.title-prefix {
  font-size: calc(12rem/16);
  line-height: 1.5em;
  margin-left: .15em;
}
@media (--viewport-xs) {
  .title {
    font-size: var(--type-scale-6);
    line-height: var(--spatial-scale-6);
    margin-left: -.045em;
  }
}
@media (--viewport-small) {
  .header {
    justify-content: flex-start;
    margin-right: auto;
    margin-left: auto;
    max-width: 30rem;
  }
  .title-prefix {
    font-size: calc(20rem/16);
    margin-left: .175em;
  }
  .nav {
    --link-bottom-padding: calc(8rem/16); /* This value must match in more than one place */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 0 0 calc(var(--link-bottom-padding) * -1) 2rem;
    & > a {
      border-bottom: calc(1rem/16) solid rgba(3, 161, 213, 0);
      color: var(--gray-600);
      display: block;
      font-size: calc(15rem/16);
      text-decoration: none;
      transition: border-bottom-color .66s;
      margin: 0 calc(17rem/16) 0 0;
      padding: calc(10rem/16) var(--link-bottom-padding) calc(8rem/16);
      &.exact-active {
        border-bottom-color: rgba(3, 161, 213, .3);
      }
    }
  }
}
@media (--viewport-medium) {
  .MainLayout {
    margin: 0 auto;
    width: calc(100% * 12 / 14);
  }
  .header {
    margin: var(--spatial-scale-6) 0 var(--spatial-scale-5) 0;
  }
  .title {
    margin-left: -.04em;
  }
}
@media (min-resolution: 1.25dppx) {
  .nav > a.exact-active {
    border-bottom-width: calc(1.5rem/16);
    padding-bottom: calc(7.5rem/16);
  }
}

</style>
