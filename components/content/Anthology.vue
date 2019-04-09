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

<style lang="scss" scoped>
.anthology {
  background: var(--bg-blue-400);
  box-sizing: border-box;
  color: var(--white);
  padding: 0 (20rem/16);
}
.anthology-list {
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
}
@media (min-width: $viewport-medium) {
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
