<template>
  <div>
    <header class="caseStudy-header">
      <h1 v-html="headline" class="caseStudy-title" />
    </header>
    <div v-html="content" class="prismic-content" />
  </div>
</template>


<script>
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
//import { apiEndpoint, parseResponse } from './index'

export const parsers = {
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
      <figure>
        <img src="${block.image.url}" alt="${block.image.alt}" />
        <div>${PrismicDOM.RichText.asHtml(block.caption)}</div>
      </figure>
    `
  }
}

export default {
  async asyncData (ctx) {
//    console.log ('ctx.params.slug = ', ctx.params.slug)
    if (ctx.payload) {
//      console.log('payload = ', ctx.payload)
      return { data: ctx.payload.data }
    } else return Prismic.getApi('https://distantly-yours-blog.cdn.prismic.io/api/v2').then( function (api) {
      return api.query(
        Prismic.Predicates.at('my.case_study.uid', ctx.params.slug),
      ).then( function (response) {
        const data = response.results[0].data

        let parsedContent = ''
        data.body.map( slice => {
          switch(slice.slice_type) {
            case 'content_block': return parsedContent = parsedContent + parsers.content(slice.primary)
            case 'image_block': return parsedContent = parsedContent + parsers.image(slice.primary)
          }
        })
//        console.log('data = ', data)
//        console.log('parsedContent = ', parsedContent)
        return {
          headline: PrismicDOM.RichText.asText(data.headline),
          content: parsedContent
        }
      }, (err) => {
        console.error('Something went wrong: ', err)
        return { title: err }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  .caseStudy-header {
    background: $bg-blue-400;
    color: $white;
    margin: 0 0 3rem 0;
    overflow: hidden;
  }
  .caseStudy-title {
    color: $white;
    font-size: (24rem/16);
    line-height: 1.4em;
    margin: 1rem 1rem;
  }
  @media (min-width: $viewport-medium) {
    .caseStudy-header {
    }
    .caseStudy-title {
      font-size: (42rem/16);
      line-height: (52rem/16);
    }
  }
</style>
