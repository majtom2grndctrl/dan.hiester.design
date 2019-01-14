<template>
  <nuxt-link v-if="to" v-bind:to="to" :class="this.className"><slot /></nuxt-link>
  <a v-else :href="href" :class="this.className"><slot /></a>
</template>

<style lang="scss" scoped>
  .cta-link {
    box-sizing: border-box;
    border-radius: (8em/16);
    display: block;
    font-weight: 500;
    font-family: $font-heading;
    font-size: 1rem;
    padding: .5em 3em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;

    &.cta-link--white {
      background: #fff;
      color: #406A79;
      opacity: .85;
    }
  }
</style>

<script lang="ts">
import Vue from 'vue'

const variants = Object.freeze({
  white: 'cta-link--white',
})

export default Vue.extend({
  props: {
    to: String,
    href: String,
    variant: {
      type: String,
      default: 'white',
      validator: function (value) {
        return Object.keys(variants).indexOf(value) !== -1
      }
    }
  },
  computed: {
    className: function() {
      return 'cta-link ' + variants[this.variant]
    }
  }
})
</script>

