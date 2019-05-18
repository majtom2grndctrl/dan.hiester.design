<template>
  <div class="BlogPost" :style="`background: ${post.indexBgColor};`" ref="rootElement" v-on:click="this.handleTileClick">
    <!--<img src="imgSrc" alt="imgAlt" />-->
    <div class="text">
      <h2 class="title" v-html="post.title" />
      <div class="preview block-preview" v-html="post.preview" />
      <cta-link class="cta" :to="post.url">{{ post.cta }}</cta-link>
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

  handleTileClick() {
    this.$router.push(this.post.url)
  }
}


export default BlogPost
</script>

<style lang="postcss" scoped>
  .BlogPost {
    background: var(--block-background);
    color: var(--white);
    cursor: pointer;
    --block-background: var(--bg-blue-400);
  }
  .text {
    margin: 0 auto;
    max-width: 30rem;
    padding: 3rem 1.25rem;
  }
  .title {
    font-size: calc(26rem/16);
    line-height: calc(32em/26);
    margin-top: 0;
  }
  .cta {
    max-width: 20rem;
    margin-left: auto;
    margin-right: auto;
  }
</style>

