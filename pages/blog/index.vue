<template>
  <section class="blogIndex">
    <article class="blogPost" v-for="(post, index) in blog_posts" :key="index">
      <h2><nuxt-link :to="post.url" v-html="post.title" /></h2>
      <div v-html="post.content" />
    </article>
  </section>
</template>


<script>
import { swipeTransition } from '~/components/layout/MainLayout'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

export const apiEndpoint = 'https://distantly-yours-blog.cdn.prismic.io/api/v2'

export function parseResponse (response) {
  function parseOne(result) {
    return {
      url: '/blog/' + result.data.slug,
      title: PrismicDOM.RichText.asText(result.data.title),
      content: PrismicDOM.RichText.asHtml(result.data.body)
    }
  }

console.log('blog_posts = ', response.results)
  if (response.results.length === 1) {
    return parseOne(response.results[0])
  } else {
    const parsed_posts = []
    response.results.map((result) => {
      parsed_posts.push(parseOne(result))
    })
    return parsed_posts
  }
}

export default {
  async asyncData (ctx) {
    console.log('env = ', process.env)
    if (ctx.payload) return { blog_posts: ctx.payload }

    else if (process.env.NODE_ENV !== 'production') return Prismic.getApi(apiEndpoint).then( function (api) {
      return api.query(
        Prismic.Predicates.at('document.type', 'blog_post'),
        { orderings : '[my.blog_post.date desc]'}
      ).then( function (response) {
        return { blog_posts: parseResponse(response) }
      }, (err) => {
        console.log('Something went wrong: ', err)
        return { title: err }
      })
    })

  },
  transition (to, from) {
    return swipeTransition(to, from)
  }
}
</script>


<style lang="scss" scoped>
  .centerpiece {
    background: $bg-blue-400;
    box-sizing: border-box;
    color: #fff;
    padding: 2em (100% * 1/12);
    h1 {
      color: #fff;
      font-size: (48rem/16);
      font-weight: 400;
    }
  }
</style>
