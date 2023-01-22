<template>
  <section class="Anthology">
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const Anthology = defineComponent({});

export default Anthology
</script>

<style lang="postcss" scoped>
.Anthology {
  box-sizing: border-box;
  color: var(--white);
  margin: var(--spatial-scale-4) 0 var(--spatial-scale-7);
  padding: 0 var(--mobile-block-margin);
    & > .Story:first-child {
      border-radius: var(--block-border-radius) var(--block-border-radius) 0 0;
    }
    & > .Story:last-child {
      border-radius: 0 0 var(--block-border-radius) var(--block-border-radius);
    }
}
@media (--viewport-medium) {
  .Anthology {
    padding: 0;
    & > .Story:first-child {
      border-radius: var(--block-border-radius) var(--block-border-radius) 0 0;
    }
    & > .Story:last-child {
      border-radius: 0 0 var(--block-border-radius) var(--block-border-radius);
    }
  }
}
</style>
