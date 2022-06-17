<template>
  <section class="anthology">
    <slot name="hero" />
    <div class="anthology-list">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
class Anthology extends Vue {
}

export default Anthology
</script>

<style lang="postcss" scoped>
.anthology {
  background: var(--bg-blue-400);
  box-sizing: border-box;
  color: var(--white);
  padding: 0 calc(20rem/16);
}
.anthology-list {
  padding-bottom: 1.5rem;
}
@media (--viewport-medium) {
  .anthology {
    border-radius: var(--block-border-radius);
    margin: 2rem 0;
    overflow: hidden;
    padding: 0;
    &:first-child {
      margin-top: 0;
    }
  }
  .anthology-list {
    display: flex;
    flex-direction: row;
    padding-bottom: 0;
  }
}
</style>
