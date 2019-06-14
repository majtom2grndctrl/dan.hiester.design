<template>
  <div>
    <div class="font-ramp">
      <div v-for="(item, index) in textHeadings" :key="index" :class="'type-scale-' + item">Type Scale {{ item }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  layout: 'styleguide'
})
class TypographyPage extends Vue {
  data() {
    return {
      textHeadings: [6, 5, 4, 3, 2, 1, 0, '00'],
    }
  }
}

export default TypographyPage
</script>


<style lang="postcss" scoped>
  .font-ramp {
    & div {
      font-family: var(--font-heading);
      margin-left: -.025em;
    }
  }
  .type-scale-6 {
    font-size: var(--type-scale-6);
  }
  .type-scale-5 {
    font-size: var(--type-scale-5);
  }
  .type-scale-4 {
    font-size: var(--type-scale-4);
  }
  .type-scale-3 {
    font-size: var(--type-scale-3);
  }
  .type-scale-2 {
    font-size: var(--type-scale-2);
  }
  .type-scale-1 {
    font-size: var(--type-scale-1);
  }
  .type-scale-0 {
    font-size: var(--type-scale-0);
  }
  .type-scale-00 {
    font-size: var(--type-scale-00);
  }
</style>
