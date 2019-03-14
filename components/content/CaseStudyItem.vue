<template>
  <div class="caseStudyItem">
    <img src="thumbnail.src" alt="thumbnail.alt" />
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

export interface ICaseStudyItem {
  title: string;
  categories: [string];
  img: {
    src: string;
    alt: string;
  }
}

@Component({})
class CaseStudyItem extends Vue {
  @Prop()
  details: ICaseStudyItem
}

export default CaseStudyItem
</script>

