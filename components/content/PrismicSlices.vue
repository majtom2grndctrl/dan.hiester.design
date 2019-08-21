<template>
  <div class="prismic-content" v-html="parsedContent" />
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import PrismicDOM from 'prismic-dom'
import { Document } from 'prismic-javascript/d.ts/documents';

const parsers = {
  content (block) {
    let contentString = ''
    !!block.title1 && (contentString += PrismicDOM.RichText.asHtml(block.title1))
    !!block.lede && (contentString += `<div class="lede">${PrismicDOM.RichText.asHtml(block.lede)}</div>`)
    !!block.content && (contentString += PrismicDOM.RichText.asHtml(block.content))
    return contentString
  },
  image (block) {
//    console.log('Current image block is: ', block)
    return `
      <figure class="${block.display_size || 'cover-image'}">
        <img src="${block.image.url}" alt="${block.image.alt}" />
        <figcaption>${PrismicDOM.RichText.asHtml(block.caption)}</figcaption>
      </figure>
    `
  }
}

function parseSliceContent(prismicDocument: Document) {
  let parsedContent = ''
  prismicDocument && prismicDocument.data.body.map( slice => {
    switch(slice.slice_type) {
      case 'content_block': return parsedContent = parsedContent + parsers.content(slice.primary)
      case 'image_block': return parsedContent = parsedContent + parsers.image(slice.primary)
    }
  })
  return parsedContent
}

@Component({})
class PrismicSlices extends Vue {
  @Prop()
  prismicDocument!: Document

  data() {
    // console.log('Document is: ', this.$props.prismicDocument)
    return {
      parsedContent: parseSliceContent(this.$props.prismicDocument)
    }
  }

}

export default PrismicSlices
</script>