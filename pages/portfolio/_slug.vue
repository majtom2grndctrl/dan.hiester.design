<template>
  <div>
    <h1 v-html="headline" />
    <div v-html="content" />
  </div>
</template>


<script>
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
//import { apiEndpoint, parseResponse } from './index'

export const parsers = {
  content (block) {
    return (`${PrismicDOM.RichText.asHtml(block.title1)}${PrismicDOM.RichText.asHtml(block.lede)}${PrismicDOM.RichText.asHtml(block.content)}`)
  },
  image (block) {

    console.log('Current image block is: ', block)
    return (`
      <figure>
        <img src="${block.image.url}" alt="${block.image.alt}" />
        <div>${PrismicDOM.RichText.asHtml(block.caption)}</div>
      </figure>
    `)
  }
}

export default {
  async asyncData (ctx) {
//    console.log ('ctx.params.slug = ', ctx.params.slug)
    if (ctx.payload) {
     console.log('payload = ', ctx.payload)
      return { data: ctx.payload.data }
    } else return Prismic.getApi('https://distantly-yours-blog.cdn.prismic.io/api/v2').then( function (api) {
      console.log('ctx.params.slug = ', ctx.params.slug);
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
        console.log('data = ', data)
        console.log('parsedContent = ', parsedContent)
        return {
          headline: PrismicDOM.RichText.asText(data.headline),
          content: parsedContent
        }
      }, (err) => {
        console.log('Something went wrong: ', err)
        return { title: err }
      })
    })
  }
}
</script>
