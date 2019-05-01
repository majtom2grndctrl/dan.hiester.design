<template>
  <div class="item" ref="rootElement">
    <img src="imgSrc" alt="imgAlt" />
    <div class="text">
      <h2 class="title" v-html="post.title" />
      <div class="preview block-preview" v-html="post.preview" />
      <cta-link :to="'/blog/' + post.uid">{{ post.cta }}</cta-link>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import CtaLink from '~/components/buttons/CtaLink.vue'
import { BlogPostData } from '~/pages/blog/index.vue'

@Component({
  components: {
    CtaLink
  }
})
class BlogPost extends Vue {
  @Prop()
  post!: BlogPostData

  mounted() {
    const { indexBgColor } = this.post
    const rootElement = this.$refs.rootElement as HTMLDivElement
    indexBgColor && rootElement.style.setProperty('--block-background', indexBgColor)
  }
}


export default BlogPost
</script>

<style lang="scss" scoped>
  .item {
    background: var(--block-background);
    color: var(--white);
    --block-background: var(--bg-blue-400);
  }
  .text {
    margin: 0 auto;
    max-width: 30rem;
    padding: 1.25rem;
  }
  .title {
    font-size: (26rem/16);
    line-height: (32em/26);
  }
  .cta-link {
    max-width: 20rem;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: $viewport-small) {
  }
  @media (min-width: $viewport-medium) {
  }
  @media (min-width: $viewport-large) {
  }
</style>

