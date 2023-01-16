<template>
  <nuxt-link v-if="to" v-bind:to="to" class="CtaLink"><slot /></nuxt-link>
  <a v-else :href="href" class="CtaLink"><slot /></a>
</template>

<style lang="postcss" scoped>
  .CtaLink {
    box-sizing: border-box;
    border-radius: .5em;
    display: block;
    font-weight: 500;
    font-family: var(--font-body);
    font-size: 1rem;
    padding: .5em 3em;
    text-align: center;
    text-decoration: none;
    transition: opacity .33s;
    background: #fff;
    color: #406A79;
    opacity: .85;
    &:not([href]) {
      opacity: .5;
    }
  }
</style>

<script lang="ts">
export default {
  props: {
    to: String,
    href: String,
  },
}
</script>

