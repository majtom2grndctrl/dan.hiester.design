<template>
  <main class="container">
    <header class="header">
      <h1 class="title"><slot name="section-title"/></h1>
      <nav class="nav"><slot name="section-navigation"/></nav>
    </header>
    <slot/>
  </main>
</template>


<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component({})
export default class MainLayout extends Vue {

}
export function swipeTransition(to, from) {
  if (!from) {
    return {
      name: 'swipe'
    }
  } else if (from.path === '/') {
    return
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
</script>


<style lang="scss" scoped>
.header {
  display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
  margin: (30rem/16) (20rem/16) (14rem/16) (20rem/16);
  @media (min-width: $viewport-small) {
    justify-content: flex-start;
    margin: (30rem/16) (20rem/16) (14rem/16) (20rem/16);
  }
  @media (min-width: $viewport-medium) {
    margin: (30rem/16) 0 (30rem/16) 0;
  }
}
.title {
  font-size: (36rem/16);
  letter-spacing: -.0125em;
  line-height: .9em;
  margin: 0 0 0 -.0625em;
  @media (min-width: $viewport-small) {
    font-size: (64rem/16);
  }
}
.nav {
  @media (min-width: $viewport-small) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  > a {
    border-bottom: (1rem/16) solid rgba(3, 161, 213, 0);
    color: $gray-600;
    display: block;
    text-decoration: none;
    transition: border-bottom-color .66s;
    @media (min-width: $viewport-small) {
      margin: 0 (17rem/16) 0 0;
      padding: (10rem/16) (8rem/16) (8rem/16);
    }
    &.exact-active {
      border-bottom-color: rgba(3, 161, 213, .3);
      @media (min-resolution: 1.25dppx) {
        border-bottom-width: (1.5rem/16);
        padding-bottom: (7.5rem/16);
      }
    }
  }
}
main.container {
  margin: 0;
  @media (min-width: $viewport-medium) {
    margin: 0 auto;
    width: (100% * 12 / 14);
  }
}
</style>
