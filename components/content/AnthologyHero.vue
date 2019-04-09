<template>
  <header class="anthology-hero">
    <h1>{{ data.title }}</h1>
    <div class="anthology-hero-image">
      <img :src="data.image" alt="" />
    </div>
    <div class="anthology-hero-description" v-html="data.description" />
    <h2 class="anthology-hero-subhead" v-html="data.subhead" />
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
