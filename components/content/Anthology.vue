<template>
  <section :class="sectionClass">
    <anthology-hero :data="data.hero" />
    <div class="anthology-list">
      <anthology-item v-for="(data, index) in data.items" :data="data" :key="'key-' + index" />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import AnthologyHero, { AnthologyHeroData } from '~/components/content/AnthologyHero.vue'
import AnthologyItem, { AnthologyItemData } from '~/components/content/AnthologyItem.vue'

export interface AnthologyData {
  hero: AnthologyHeroData
  items: AnthologyItemData[]
}

@Component({
  components: {
    AnthologyHero,
    AnthologyItem
  }
})
class Anthology extends Vue {
  @Prop()
  modClass?: string

  @Prop()
  data!: AnthologyData

  sectionClass = this.modClass ? `anthology ${this.modClass}` : 'anthology'

}

export default Anthology
</script>
