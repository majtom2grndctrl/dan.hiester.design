<template>
  <div class="prismic-content" v-if="prismicDocument">
    <template v-for="(slice, index) in prismicDocument.data.body">
      <ImageSlice v-if="slice.slice_type == 'image_block'" :block="slice.primary" class="render-after-transition" :key="'image-' + index" />
      <ContentSlice v-if="slice.slice_type == 'content_block'" :block="slice.primary" class="render-after-transition" :key="'content-' + index" />
    </template>
  </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Document } from 'prismic-javascript/types/documents';
import ImageSlice from '~/components/content/ImageSlice.vue';
import ContentSlice from '~/components/content/ContentSlice.vue';

const PrismicSlices = defineComponent({
  components: {
    ContentSlice,
    ImageSlice,
  },
  props: {
    prismicDocument: Object as PropType<Document>
  },
  data() {
    // console.log('Document is: ', this.$props.prismicDocument)
    return {
      slices: this.$props.prismicDocument?.data.body,
    }
  },
})

export default PrismicSlices
</script>

<style lang="postcss">
</style>
