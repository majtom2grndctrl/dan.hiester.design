<template>
  <div>
    <h1>{{ post.title }}</h1>
    <article v-html="post.content" />
  </div>
</template>


<script>
import Prismic from 'prismic-javascript'
import { apiEndpoint, parseResponse } from './index'

export default {
  async asyncData (ctx) {
    console.log ('ctx.params.slug = ', ctx.params.slug)
    if (ctx.payload) {
      console.log('payload = ', ctx.payload)
      return { post: ctx.payload }
    } else return Prismic.getApi(apiEndpoint).then( function (api) {
      return api.query(
        Prismic.Predicates.at('my.blog_post.slug', ctx.params.slug),
      ).then( function (response) {
        return { post: parseResponse(response) }
      }, (err) => {
        console.log('Something went wrong: ', err)
        return { title: err }
      })
    })
  }
}
</script>
