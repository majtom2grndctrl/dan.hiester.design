<template>
  <div>
    <header class="hero" :style="`background-image: url('${post.heroBackground.url}')`" ref="heroRoot">
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
import { blogPostMock } from '~/dataMocks';

@Component({})
class BlogView extends Vue {
  async asyncData (ctx) {
//    console.log ('ctx.params.slug = ', ctx.params.slug)
    if (ctx.payload) {
//      console.log('payload = ', ctx.payload)
      return { post: ctx.payload as BlogPostData }
    } else return Prismic.getApi(apiEndpoint).then( api => {
      return api.query(
        Prismic.Predicates.at('my.blog_post.uid', ctx.params.slug),
        {}
      ).then( response => {
//        console.log('Response = ', response)
        return { post: parseResponse(response) as BlogPostData }
      }, err => {
        console.log('Something went wrong: ', err)
        return { title: err }
      })
    }).catch( err => {
      console.warn('Error downloading posts (/pages/blog/_slug.vue)', err)
      console.log('Using data mock: ', { post: parseResponse(blogPostMock)})
      const returnPost = parseResponse(blogPostMock) as BlogPostData
      returnPost.heroImage = ''
      returnPost.heroBackground = 'var(--bg-blue-400)'

      return { post: returnPost }
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
    margin: 0 0 2rem 0;
    padding: 0 1.25rem;
  }
  .meta {
  }
  .title {
    font-size: calc(24rem / 16);
    line-height: 1.4em;
  }
  .subtitle {
    font-family: var(--font-heading);
    font-size: calc(18rem/16);
    line-height: calc(26em/18);
    margin: 0 0 6.25%;
  }
  .hero-image {
    display: block;
    margin: 12.5% auto .5rem;
    max-width: 50%;
  }
  @media (--viewport-small) {
    .hero {
      margin: 0 0 3rem 0;
    }
    .title {
      margin: 1em auto .5em;
      max-width: 30rem;
    }
    .subtitle {
      max-width: 30rem;
    }
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
    .title {
      font-size: calc(42rem/16);
      line-height: 1.275em;
      max-width: unset;
    }
    .subtitle {
      font-size: calc(26rem/16);
      line-height: calc(32em/26);
      margin: unset;
    }
    .hero-image {
      max-width: unset;
      margin: unset;
      width: 100%;
    }
  }
</style>

