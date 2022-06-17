<template>
  <div>
    <section class="BlogIndex fade-after-transition" v-if="blog_posts">
      <BlogPost v-for="(post, index) in blog_posts" :post="post" :key="index" />
    </section>
    <section v-else>
      <h1>Signal disrupted</h1>
      <p>Your browser tried to download this blog post, but something went wrong. Try checking your internet connection and <button onClick="window.location.reload()" class="btn-link">refreshing this page</button>.</p>
    </section>
    <ContactCta v-if="blog_posts" />
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { swipeTransition } from '~/components/layout/MainLayout.vue'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse'
import ContactCta from '~/components/contact/ContactCta.vue';
import { Document } from 'prismic-javascript/types/documents'
import BlogPost from '~/components/content/BlogPost.vue'
import { scrollToContentTop } from '~/layouts/default.vue';
import { blogDataMock } from '~/dataMocks'

export const apiEndpoint = 'https://distantly-yours-blog.cdn.prismic.io/api/v2'

export interface BlogPostData {
  uid?: string;
  url: string;
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

export function parseResponse (response: ApiSearchResponse) {
  function parseOne(result: Document) {
    const { data } = result
    const output: BlogPostData = {
      url: '/blog/' + result.uid,
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

@Component({
  components: {
    BlogPost,
    ContactCta,
  },
  scrollToTop: true,
})
class BlogIndex extends Vue {
  async asyncData (ctx) {
    if (ctx.payload) return { blog_posts: ctx.payload }
    else return Prismic.getApi(apiEndpoint).then( (api) => {
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
  }
  transition (to, from) {
    return swipeTransition(to, from)
  }
  mounted() {
    scrollToContentTop();
  }
}

export default BlogIndex
</script>


<style lang="postcss" scoped>
  @media (--viewport-medium) {
    .BlogIndex {
      --right-side: calc(100% * 5 / 12);
      margin: 0 0 calc(100% * 1 / 14);
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
