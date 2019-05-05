<template>
  <div>
    <header class="hero" :style="`background-image: url('${post.heroBackground}')`" ref="heroRoot">
      <div class="meta">
        <h1 class="title" v-html="post.title" />
        <div class="subtitle" v-html="post.subhead" />
      </div>
      <img class="hero-image" v-if="post.heroImage" :src="post.heroImage.url" :alt="post.heroImage.alt" />
    </header>
    <article v-html="post.content" class="prismic-content" />
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Prismic from 'prismic-javascript'
import { apiEndpoint, parseResponse, BlogPostData } from './index.vue'

@Component({})
class BlogView extends Vue {
  async asyncData (ctx) {
//    console.log ('ctx.params.slug = ', ctx.params.slug)
    if (ctx.payload) {
//      console.log('payload = ', ctx.payload)
      return { post: ctx.payload as BlogPostData }
    } else return Prismic.getApi(apiEndpoint).then( function (api) {
      return api.query(
        Prismic.Predicates.at('my.blog_post.uid', ctx.params.slug),
        {}
      ).then( function (response) {
//        console.log('Response = ', response)
        return { post: parseResponse(response) as BlogPostData }
      }, (err) => {
        console.log('Something went wrong: ', err)
        return { title: err }
      })
    })
  }
}

export default BlogView
</script>


<style lang="postcss" scoped>
  .hero {
    background: var(--bg-blue-400) 50% 50% / cover;
    color: white;
    display: flex;
    flex-direction: column-reverse;
    margin: 0 0 3rem 0;
    padding: 1rem;
  }
  .meta {
  }
  .subtitle {
    font-family: var(--font-heading);
    font-size: calc(18rem/16);
    line-height: calc(26em/18);
  }
  .hero-image {
    display: block;
    margin: 2rem auto 0;
    max-width: 50%;
  }
  @media (--viewport-medium) {
    .hero {
      display: grid;
      grid-template-columns: 5fr 4fr;
      justify-items: center;
      column-gap: calc(100% * 1 / 12);
      padding: calc(100% * 1 / 12);
    }
    .meta {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0;
    }
    .subtitle {
      font-size: calc(26rem/16);
      line-height: calc(32em/26);
    }
    .hero-image {
      max-width: unset;
      margin: unset;
      width: 100%;
    }
  }
</style>

