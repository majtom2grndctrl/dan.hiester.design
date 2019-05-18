<template>
  <nuxt-link v-if="to" v-bind:to="to" :class="this.className"><slot /></nuxt-link>
  <a v-else :href="href" :class="this.className"><slot /></a>
</template>

<style lang="postcss" scoped>
  .CtaLink {
    box-sizing: border-box;
    border-radius: .5em;
    display: block;
    font-weight: 500;
    font-family: var(--font-heading);
    font-size: 1rem;
    padding: .5em 3em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
  }
  .CtaLink--white {
    background: #fff;
    color: #406A79;
    opacity: .85;
  }
  .CtaLink--blue-300 {
    background: #296C82;
    color: rgba(255, 255, 255, .8);
  }
</style>

<script lang="ts">
import Vue from 'vue'

export const ctaStyles = Object.freeze({
  white: 'CtaLink--white',
  blue300: 'CtaLink--blue-300',
})

export default Vue.extend({
  props: {
    to: String,
    href: String,
    ctaStyle: {
      type: String,
      default: 'white',
      validator: function (value: string) {
        return Object.keys(ctaStyles).indexOf(value) !== -1
      }
    }
  },
  computed: {
    className: function() {
      return 'CtaLink ' + ctaStyles[this.ctaStyle]
    }
  }
})
</script>

