<template>
  <main class="MainLayout">
    <header class="header">
      <h1 class="title">
        <div class="title-prefix" v-if="this.$slots['section-title-prefix']">
          <slot name="section-title-prefix"/>
        </div>
        <slot name="section-title"/>
      </h1>
      <nav class="nav" v-if="this.$slots['section-navigation']">
        <slot name="section-navigation"/>
      </nav>
    </header>
    <slot/>
  </main>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
class MainLayout extends Vue {

}

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
  margin: var(--spatial-scale-5) var(--spatial-scale-2) var(--spatial-scale-3) var(--spatial-scale-2);
}
.title {
  color: var(--gray-600);
  font-size: var(--type-scale-6);
  letter-spacing: -.0125em;
  line-height: var(--spatial-scale-5);
  margin: 0 0 0 -.075em;
}
.title-prefix {
  font-size: calc(12rem/16);
  line-height: 1.5em;
  margin-left: .15em;
}
@media (--viewport-small) {
  .header {
    justify-content: flex-start;
    margin-right: var(--spatial-scale-4);
    margin-left: var(--spatial-scale-4);
  }
  .title {
    font-size: var(--type-scale-6);
    line-height: var(--spatial-scale-6);
    margin: 0 0 0 -.07em;
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
}
@media (min-resolution: 1.25dppx) {
  .nav > a.exact-active {
    border-bottom-width: calc(1.5rem/16);
    padding-bottom: calc(7.5rem/16);
  }
}

</style>
