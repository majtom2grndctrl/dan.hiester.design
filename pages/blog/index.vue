<template>
  <section class="blogIndex">
    <article class="blogPost" v-for="(post, index) in blog_posts" :key="index">
      <h2>{{ post.title }}</h2>
      <div v-html="post.content" />
    </article>
  </section>
</template>


<script>
import { swipeTransition } from '~/components/layout/MainLayout'
import { mapState } from 'vuex'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

const apiEndpoint = 'https://distantly-yours-blog.cdn.prismic.io/api/v2'

export default {
  asyncData (context) {
    return Prismic.getApi(apiEndpoint).then( function (api) {
      return api.query(
        Prismic.Predicates.at('document.type', 'blog_post'),
        { orderings : '[my.blog_post.date desc]'}
      ).then( function (response) {
        console.log('blog_posts = ', response.results)
        const parsed_posts = []
        response.results.map((result) => {
          console.log('result = ',result)
          parsed_posts.push({
            title: PrismicDOM.RichText.asText(result.data.title),
            content: PrismicDOM.RichText.asHtml(result.data.body)
          })
        })
        return {
          blog_posts: parsed_posts
        }
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
