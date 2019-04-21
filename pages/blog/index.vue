<template>
  <section class="blogIndex" v-if="blog_posts">
    <article class="blogPost" v-for="(post, index) in blog_posts" :key="index">
      <h2><nuxt-link :to="post.url" v-html="post.title" /></h2>
      <div v-html="post.content" />
    </article>
  </section>
  <section v-else>
    <h1>Signal disrupted</h1>
    <p>Your browser tried to download this blog post, but something went wrong. Try checking your internet connection and <button onClick="window.location.reload()" class="btn-link">refreshing this page</button>.</p>
  </section>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { swipeTransition } from '~/components/layout/MainLayout.vue'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
import ApiSearchResponse from 'prismic-javascript/d.ts/ApiSearchResponse'
import { Document } from 'prismic-javascript/d.ts/documents'
import { blogDataMock } from '~/dataMocks'

export const apiEndpoint = 'https://distantly-yours-blog.cdn.prismic.io/api/v2'

export interface BlogPostData {
  uid?: string;
  url: string;
  title: string;
  content: string;
}

export function parseResponse (response: ApiSearchResponse) {
  function parseOne(result: Document) {
    const output: BlogPostData = {
      url: '/blog/' + result.uid,
      title: PrismicDOM.RichText.asText(result.data.title),
      content: PrismicDOM.RichText.asHtml(result.data.body)
    }
    return output
  }

//  console.log('blog_posts = ', response.results)
  if (response.results.length === 1) {
    return parseOne(response.results[0])
  } else if (response.results.length > 1) {
    const parsed_posts: BlogPostData[] = []
    response.results.map((result) => {
      parsed_posts.push(parseOne(result))
    })
    return parsed_posts
  }
}

@Component({})
class BlogIndex extends Vue {
  async asyncData (ctx) {
    if (ctx.payload) return { blog_posts: ctx.payload }
    else return Prismic.getApi(apiEndpoint).then( function (api) {
      return api.query(
        Prismic.Predicates.at('document.type', 'blog_post'),
        { orderings : '[my.blog_post.date desc]'}
      ).then( function (response) {
        return { blog_posts: parseResponse(response) }
      }, (err) => {
        console.log('Something went wrong: ', err)
        return { title: err }
      })
    }).catch( err => {
      console.warn("Error downloading posts")
      return process.env.NODE_ENV === 'development' ? { blog_posts: parseResponse(blogDataMock) } : { blog_posts: undefined }
    })
  }
  transition (to, from) {
    return swipeTransition(to, from)
  }
}

export default BlogIndex
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
