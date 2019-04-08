<template>
  <header class="anthology-hero">
    <h1>{{ title }}</h1>
    <div class="anthology-hero-image">
      <img :src="heroImage" alt="" />
    </div>
    <div class="anthology-hero-description" v-html="heroDescription" />
    <h2 class="anthology-hero-subhead">{{ heroSubhead }}</h2>
  </header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

export interface AnthologyHeroData {
  title: string
  image: string
  description: string
  subhead: string
}

@Component({})

class AnthologyHero extends Vue {
  @Prop()
  data!: AnthologyHeroData
}

export default AnthologyHero
</script>
