<template>
  <div class="Specimen">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
class Specimen extends Vue{
}

export default Specimen;
</script>

<style lang="postcss" scoped>
  .Specimen {
    font-size: var(--type-scale-7);
  }
</style>

