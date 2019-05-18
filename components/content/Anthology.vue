<template>
  <section :class="sectionClass">
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
  @Prop()
  modClass?: string

  sectionClass = this.modClass ? `anthology ${this.modClass}` : 'anthology'
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
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
}
@media (--viewport-medium) {
  .anthology {
    margin: 2rem 0;
    padding: 0;
  }
  .anthology-list {
    flex-direction: row;
    padding-bottom: 0;
  }
}
</style>
