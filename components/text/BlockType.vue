<template>
  <div class="BlockType"><slot /></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>


<style lang="postcss" scoped>
  .BlockType {
    color: var(--white);
    font-family: var(--font-heading);
    font-size: var(--type-scale-0);
    font-weight: 500;
    line-height: var(--spatial-scale-0);
    margin: 0 0 var(--spatial-scale-0) 0;
    text-transform: uppercase;
  }
  @media (--viewport-medium) {
    .BlockType {
      font-size: var(--type-scale-00);
      line-height: var(--spatial-scale-00);
    }
  }
</style>
