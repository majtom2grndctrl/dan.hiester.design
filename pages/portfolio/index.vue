<template>
  <section class="centerpiece">
    <h1>inRoads</h1>
  </section>
</template>


<script>
import { swipeTransition } from '~/components/layout/MainLayout'

export default {
  transition(to, from) {
    return swipeTransition(to, from)
  }
}
</script>


<style lang="scss" scoped>
  .centerpiece {
    background: $bg-blue-400;
    box-sizing: border-box;
    color: #fff;
    padding: 2em (100% * 1/12);
    h1 {
      color: #fff;
      font-size: (48rem/16);
      font-weight: 400;
    }
  }
</style>
