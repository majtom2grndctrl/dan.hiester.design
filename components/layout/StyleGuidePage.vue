<template>
  <div>
    <header class="header">
      <h1 class="title">{{ title }}</h1>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
class StyleGuidePage extends Vue {
  @Prop({ type: String })
  title
}

export default StyleGuidePage
</script>

<style lang="postcss" scoped>
.header {
  margin: var(--spatial-scale-2) 0;
}
.title {
  color: var(--gray-600);
  font-size: var(--type-scale-0);
  line-height: var(--spatial-scale-1);
  text-transform: uppercase;
}
@media (--viewport-medium) {
  .header {
    margin: var(--spatial-scale-6) 0 var(--spatial-scale-3);
  }
}
</style>

