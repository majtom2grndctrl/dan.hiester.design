<template>
  <div class="BlogPost" :style="`background: ${indexBgColor};`">
    <!--<img src="imgSrc" alt="imgAlt" />-->
    <div class="text">
      <h2 class="title">
        <a :href="blogPostUrl" class="title-link" v-html="title" />
      </h2>
      <div class="preview block-preview" v-html="preview" />
      <cta-link class="cta" :to="blogPostUrl">{{ cta }}</cta-link>
    </div>
  </div>
</template>


<script setup lang="ts">
import { PropType } from 'vue';
import CtaLink from '~/components/buttons/CtaLink.vue'
import { BlogPostData } from '~/pages/blog/index.vue'

const props = defineProps({
  post: Object as PropType<BlogPostData>
})

const {
  indexBgColor,
  blogPostUrl,
  title,
  preview,
  cta,
} = props.post!

</script>

<style lang="postcss" scoped>
  .BlogPost {
    background: var(--block-background);
    color: var(--white);
    --block-background: var(--bg-blue-400);
  }
  .title-link {
    color: var(--white);
    display: inline-block;
    text-decoration: none;
  }
  .text {
    margin: 0 auto;
    max-width: 30rem;
    padding: var(--spatial-scale-5) var(--spatial-scale-3);
  }
  .title {
    font-size: var(--type-scale-3);
    line-height: var(--spatial-scale-7);
    margin-top: 0;
    margin-bottom: var(--spatial-scale-2);
  }
  .cta {
    max-width: 20rem;
    margin: var(--spatial-scale-3) auto 0;
  }
  @media (--viewport-medium) {
    .text {
      padding: var(--spatial-scale-8) 0;
    }
    .title-link {
      text-decoration: solid underline calc(1em/16) rgba(255, 255, 255, 0);
      transition: text-decoration-color 0.2s ease-in-out;
    }
    .title-link:hover {
      text-decoration-color: var(--white);
    }
    .title {
      line-height: var(--spatial-scale-6);
    }
  }
</style>

