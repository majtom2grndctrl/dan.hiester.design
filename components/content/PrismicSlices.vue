<template>
  <div class="prismic-content">
    <template v-for="(slice, i) in prismicDocument.data.body">
      <ImageSlice v-if="slice.slice_type == 'image_block'" :block="slice.primary" :key="'image-' + i" />
      <ContentSlice v-if="slice.slice_type == 'content_block'" :block="slice.primary" :key="'content-' + i" />
    </template>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import PrismicDOM from 'prismic-dom'
import { Document } from 'prismic-javascript/d.ts/documents';
import ImageSlice from '~/components/content/ImageSlice.vue';
import ContentSlice from '~/components/content/ContentSlice.vue';

@Component({
  components: {
    ContentSlice,
    ImageSlice,
  },
})
class PrismicSlices extends Vue {
  @Prop()
  prismicDocument!: Document

  data() {
    // console.log('Document is: ', this.$props.prismicDocument)
    return {
      slices: this.prismicDocument.data.body,
    }
  }

}

export default PrismicSlices
</script>

<style lang="postcss">
</style>
