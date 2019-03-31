<template>
  <div>
    <h1 v-html="post.title" />
    <article v-html="post.content" class="prismic-content" />
  </div>
</template>


<script>
import Prismic from 'prismic-javascript'
import { apiEndpoint, parseResponse } from './index'

export default {
  async asyncData (ctx) {
//    console.log ('ctx.params.slug = ', ctx.params.slug)
    if (ctx.payload) {
//      console.log('payload = ', ctx.payload)
      return { post: ctx.payload }
    } else return Prismic.getApi(apiEndpoint).then( function (api) {
      return api.query(
        Prismic.Predicates.at('my.blog_post.uid', ctx.params.slug),
      ).then( function (response) {
//        console.log('Response = ', response)
        return { post: parseResponse(response) }
      }, (err) => {
        console.log('Something went wrong: ', err)
        return { title: err }
      })
    })
  }
}
</script>
