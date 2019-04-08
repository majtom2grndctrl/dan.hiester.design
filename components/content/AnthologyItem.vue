<template>
  <div class="anthology-item">
    <div class="anthology-item-content">
      <h3 class="anthology-item-type" v-html="data.type" />
      <div class="anthology-item-description" v-html="data.description" />
      <cta-link :to="data.href" v-html="data.ctaText"></cta-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

export interface AnthologyItemData {
  type: string
  description: string
  ctaText: string
  href: string
}

@Component({})

class AnthologyItem extends Vue {
  @Prop()
  data!: AnthologyItemData
}

export default AnthologyItem
</script>

<style lang="postcss" scoped>

</style>

