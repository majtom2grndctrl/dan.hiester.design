<template>
  <div>
    <div class="BlogIndex-wrapper">
      <section class="BlogIndex fade-after-transition" v-if="blog_posts">
        <BlogPost v-for="(post, index) in blog_posts" :post="post" :key="index" />
      </section>
      <section v-else>
        <h1>Signal disrupted</h1>
        <p>Your browser tried to download this blog post, but something went wrong. Try checking your internet connection and <button :onClick="reloadWindow()" class="btn-link">refreshing this page</button>.</p>
      </section>
    </div>
    <ContactCta v-if="blog_posts" />
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Context } from '@nuxt/types'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse'
import { apiEndpoint } from '~/layouts/default.vue';
import ContactCta from '~/components/contact/ContactCta.vue';
import { Document } from 'prismic-javascript/types/documents'
import BlogPost from '~/components/content/BlogPost.vue'
import { scrollToContentTop } from '~/layouts/default.vue';
import { swipeTransition } from '~/components/layout/MainLayout.vue'
import { blogDataMock } from '~/dataMocks'

export interface BlogPostData {
  uid?: string;
  blogPostUrl: string;
  title: string;
  subhead?: string;
  preview?: string;
  cta?: string;
  indexBgColor?: string;
  heroImage: {
    url: string;
    alt?: string;
  };
  heroBackground: {
    url: string;
  };
  prismicDocument: Document;
}

interface ComponentEmits {
  blog_posts: BlogPostData[],
  reloadWindow: Function,
}

export function parseResponse (response: ApiSearchResponse): BlogPostData | BlogPostData[] {
  function parseOne(result: Document) {
    const { data } = result
    const output: BlogPostData = {
      blogPostUrl: '/blog/' + result.uid,
      title: PrismicDOM.RichText.asText(data.title),
      heroImage: data.hero_image,
      heroBackground: data.hero_background,
      prismicDocument: result,
    }
    data.subhead && (output.subhead = PrismicDOM.RichText.asText(data.subhead))
    data.preview && (output.preview = PrismicDOM.RichText.asHtml(data.preview))
    data.cta && (output.cta = data.cta)
    data.index_page_background_color && (output.indexBgColor = data.index_page_background_color)
    return output
  }

//  console.log('blog_posts = ', response.results)
  if (response.results.length === 1) {
    return parseOne(response.results[0])
  } else {
    const parsed_posts: BlogPostData[] = []
    response.results.map((result) => {
      parsed_posts.push(parseOne(result))
    })
    return parsed_posts
  }
}

const BlogIndex = defineComponent<{}, ComponentEmits>({
  components: {
    BlogPost,
    ContactCta,
  },
  scrollToTop: true,
  async asyncData (ctx: Context) {
    return Prismic.getApi(apiEndpoint).then( (api) => {
      return api.query(
        Prismic.Predicates.at('document.type', 'blog_post'),
        { orderings : '[my.blog_post.date desc]'}
      ).then( (response) => {
        return { blog_posts: parseResponse(response) }
      }, (err) => {
//        console.log('Something went wrong: ', err)
        return { title: err }
      })
    }).catch( err => {
//      console.warn("Error downloading posts (pages/blog/index)")
      return process.env.NODE_ENV === 'development' ? { blog_posts: parseResponse(blogDataMock) } : { blog_posts: undefined }
    })
  },
  methods: {
    reloadWindow() {
      window.location.reload()
    }
  },
  mounted() {
    scrollToContentTop();
  },
  transition (to, from) {
    return swipeTransition(to, from)
  },
})

export default BlogIndex
</script>


<style lang="postcss" scoped>
  .BlogIndex-wrapper {
    padding: 0 var(--spatial-scale-3);
  }
  .BlogIndex {
    border-radius: var(--block-border-radius);
    margin: var(--spatial-scale-3) auto var(--spatial-scale-7);
    max-width: var(--mobile-max-width);
    overflow: hidden;
  }
  @media (--viewport-medium) {
    .BlogIndex-wrapper {
      padding: unset;
    }
    .BlogIndex {
      --right-side: calc(100% * 5 / 12);
      border-radius: var(--block-border-radius);
      margin: 0 0 calc(100% * 1 / 14);
      max-width: unset;
      padding: unset;
      position: relative;
      overflow: hidden;
      padding-right: var(--right-side);
      &::before {
        background: var(--bg-blue-600) url('/img/blog-index-photo.jpg') fixed no-repeat 89% 50% / 37%;
        content: '';
        display: block;
        opacity: 1;
        position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
        transition: opacity .3s ease-in-out .3s;
        width: var(--right-side);
      }
    }
    .swipe-enter .BlogIndex::before {
      opacity: 0;
    }
    .swipe-leave-enter .BlogIndex::before {
      transition: opacity .3s ease-in-out 0;
      opacity: 0;
    }
  }
</style>
