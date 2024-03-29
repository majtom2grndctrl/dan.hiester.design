<template>
  <div>
    <header class="hero" :style="`background-image: url('${post.heroBackground.url}')`" ref="heroRoot">
      <div class="meta">
        <h1 class="title" v-html="post.title" />
        <div class="subtitle" v-html="post.subhead" />
      </div>
      <img class="image" v-if="post.heroImage" :src="post.heroImage.url" :alt="post.heroImage.alt" />
    </header>
    <PrismicSlices :prismicDocument="post.prismicDocument" />
    <ContactCta />
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Context } from '@nuxt/types'
import Prismic from 'prismic-javascript'
import { apiEndpoint } from '~/layouts/default.vue'
import { parseResponse, BlogPostData } from './index.vue'
import PrismicSlices from '~/components/content/PrismicSlices.vue'
import { blogPostMock } from '~/dataMocks';
import ContactCta from '~/components/contact/ContactCta.vue';
import { scrollToContentTop } from '~/layouts/default.vue';

interface BlogViewData {
  post: BlogPostData,
}

const BlogView = defineComponent<{}, BlogViewData>({
  components: {
    ContactCta,
    PrismicSlices
  },
  scrollToTop: true,

  async asyncData (ctx: Context) {
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
//        console.log('parsed post: ', parseResponse(response))
        return { post: parseResponse(response) as BlogPostData }
      }, err => {
//        console.log('Something went wrong: ', err)
        return { title: err }
      })
    }).catch( err => {
//      console.warn('Error downloading posts (/pages/blog/_slug.vue)', err)
//      console.log('Using data mock: ', { post: parseResponse(blogPostMock)})
      const returnPost = parseResponse(blogPostMock) as BlogPostData
      returnPost.heroImage = { url: '', alt: ''}
      returnPost.heroBackground = { url: '' }

      return { post: returnPost }
    })
  },

  head() {
    const post = this.$data.post as BlogPostData
    post.title = post.title.replace('&nbsp;', ' ')
    return {
      title: post ? post.title : '…Loading',
      meta: [
        { hid: 'description', name: 'description', content: post.preview || '' },
        { hid: 'og:url', property: 'og:url', content: post.blogPostUrl || '' },
        { hid: 'og:title', property: 'og:title', content: post.title || '' },
        { hid: 'og:description', property: 'og:description', content: post.preview || '' },
        { hid: 'og:image', property: 'og:image', content: post.heroImage.url || '' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: post.heroImage.alt || '' },
        { hid: 'twitter:image', name: 'twitter:image', content: post.heroImage.url || '' },
        { hid: 'twitter:image:alt', name: 'twiter:image:alt', content: post.heroImage.alt || '' },
      ]
    }
  },
  mounted() {
    scrollToContentTop();
  },
})

export default BlogView
</script>


<style lang="postcss" scoped>
  .hero {
    background: var(--bg-blue-400) 50% 50% / cover;
    color: white;
    display: flex;
    flex-direction: column-reverse;
    margin: 0 0 2rem 0;
    padding: 0 var(--spatial-scale-2);
  }
  .title {
    font-size: var(--type-scale-3);
    font-weight: 400;
    line-height: var(--spatial-scale-7);
    margin: var(--spatial-scale-3) 0 var(--spatial-scale-0);
  }
  .subtitle {
    font-family: var(--font-heading);
    font-size: var(--type-scale-0);
    line-height: var(--spatial-scale-5);
    margin: 0 auto var(--spatial-scale-3);
  }
  .hero .image {
    display: block;
    margin: 15% auto var(--spatial-scale-0);
    max-width: 50%;
  }
  @media (--viewport-small) {
    .hero {
      margin: 0 0 var(--spatial-scale-6) 0;
    }
    .title {
      margin: var(--spatial-scale-3) auto var(--spatial-scale-1);
      max-width: 30rem;
    }
    .subtitle {
      margin: 0 auto var(--spatial-scale-6);
      max-width: 30rem;
    }
    .hero .image {
      margin-top: 8.25%;
    }
  }
  @media (--viewport-medium) {
    .hero {
      border-radius: var(--block-border-radius);
      display: grid;
      grid-template-columns: 1fr 5fr 1fr 4fr 1fr;
      justify-items: center;
      column-gap: var(--spatial-scale-1);
      padding: calc(100% * 1 / 12) 0;
    }
    .meta {
      display: flex;
      flex-direction: column;
      justify-content: center;
      grid-area: 1 / 2 / 2 / 2;
      padding: 0;
    }
    .title {
      font-size: var(--type-scale-4);
      line-height: var(--spatial-scale-7);
      max-width: unset;
      margin: var(--spatial-scale-1) 0 var(--spatial-scale-3) 0;
    }
    .subtitle {
      font-size: var(--type-scale-1);
      line-height: var(--spatial-scale-5);
      margin: unset;
    }
    .hero .image {
      grid-area: 1 / 4 / 2 / 5;
      max-width: unset;
      margin: unset;
      width: 100%;
    }
  }
</style>

