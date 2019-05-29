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
    font-size: calc(14rem/16);
    font-weight: 500;
    line-height: 1em;
    margin: 0 0 calc(5rem/16) 0;
    text-transform: uppercase;
  }
</style>
