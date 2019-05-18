<!--
/////////////////////
    THIS FILE IS A
    WORK IN PROGRESS
/////////////////////
-->

<template>
  <div class="item">
    <img :src="imgSrc" :alt="imgAlt" />
    <div class="content">
      <h2 class="title">{{ title }}</h2>
      <slot />
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
class CaseStudyItem extends Vue {
  @Prop()
  title!: string

  @Prop()
  categories!: [string]

  @Prop()
  imgSrc!: string;

  @Prop()
  imgAlt!: string;
}

export default CaseStudyItem
</script>

<style lang="postcss" scoped>

</style>

