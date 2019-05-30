<template layout="styleguide">
  <div class="font-ramp">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import CtaLink from '~/components/buttons/CtaLink.vue'

@Component({
  layout: "styleguide"
})
class StyleGuide extends Vue {
}

export default StyleGuide
</script>

<style lang="postcss" scoped>

  .font-ramp {
    --base-size: calc(18rem/16);
    --multiplier: 1.22;
    & > * {
      margin: 1rem;
    }
  }
  h1 {
    font-size: calc(var(--base-size) * var(--multiplier) * var(--multiplier) * var(--multiplier) * var(--multiplier));
  }
  h2 {
    font-size: calc(var(--base-size) * var(--multiplier) * var(--multiplier) * var(--multiplier));
  }
  h3 {
    font-size: calc(var(--base-size) * var(--multiplier) * var(--multiplier));
  }
  h4 {
    font-size: calc(var(--base-size) * var(--multiplier));
  }
  h5 {
    font-size: var(--base-size);
  }
  h6 {
    font-size: calc(var(--base-size) / var(--multiplier));
  }

</style>
