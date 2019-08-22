<template>
  <div class="prismic-content">
  <template v-for="(slice, i) in prismicDocument.data.body">
    <ImageSlice v-if="slice.slice_type == 'image_block'" :block="slice.primary" :key="'image-' + i" />
  </template>
  <div class="prismic-content" v-html="parsedContent" />
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import PrismicDOM from 'prismic-dom'
import { Document } from 'prismic-javascript/d.ts/documents';
import ImageSlice from '~/components/content/ImageSlice.vue';

const parsers = {
  content (block) {
    let contentString = ''
    !!block.title1 && (contentString += PrismicDOM.RichText.asHtml(block.title1))
    !!block.lede && (contentString += `<div class="lede">${PrismicDOM.RichText.asHtml(block.lede)}</div>`)
    !!block.content && (contentString += PrismicDOM.RichText.asHtml(block.content))
    return contentString
  }
}

function parseSliceContent(prismicDocument: Document) {
  let parsedContent = ''
  prismicDocument && prismicDocument.data.body.map( slice => {
    switch(slice.slice_type) {
      case 'content_block': return parsedContent = parsedContent + parsers.content(slice.primary)
    }
  })
  return parsedContent
}

@Component({
  components: {
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
      parsedContent: parseSliceContent(this.prismicDocument),
    }
  }

}

export default PrismicSlices
</script>