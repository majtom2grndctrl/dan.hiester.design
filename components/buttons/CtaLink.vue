<template>
  <nuxt-link v-bind:to="to" class="cta-link"><slot /></nuxt-link>
</template>

<style lang="scss" scoped>
  .cta-link {
    border-radius: (8em/16);
    display: block;
    font-size: 1rem;
    padding: .5em 3em;
    text-decoration: none;
    text-transform: uppercase;
  }
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: String
  }
})
</script>

