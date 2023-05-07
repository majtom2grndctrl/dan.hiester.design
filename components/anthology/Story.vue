<template>
  <article class="Story" ref="storyWrapper" :style="`--story-background:${backgroundColor}`">
    <div class="image-wrapper">
      <a :href="caseStudyUrl" class="image-link"><img :src="image.url" :alt="image.alt" class="image" /></a>
    </div>
    <div class="content-wrapper">
      <BlockType v-html="overline" />
      <h2 class="title">
        <a :href="caseStudyUrl" class="title-link" v-html="title" />
      </h2>
      <div class="teaser" v-html="teaser" />
      <div class="cta-wrapper">
        <CtaLink :to="caseStudyUrl" v-html="ctaText" />
      </div>
    </div>
  </article>
</template>

<style lang="postcss" scoped>
  .Story {
    background: var(--story-background);
    box-sizing: border-box;
    margin: 0 auto;
    max-width: var(--mobile-max-width);
    padding: var(--spatial-scale-00) var(--spatial-scale-3) var(--spatial-scale-6) var(--spatial-scale-3);
  }
  .image-link {
    display: block;
    margin: 0 auto;
    max-width: 80%;
    cursor: pointer;
  }
  .image-wrapper {
    padding: var(--block-border-radius);
  }
  .image {
    display: block;
    width: 100%; /* 100% of parent, which is the hyperlink */
    margin: 0 auto;
  }
  .title {
    font-size: var(--type-scale-3);
    line-height: var(--spatial-scale-7);
    margin: 0;
  }
  .title-link {
    color: var(--white);
    text-decoration: none;
    display: inline-block;
  }
  .teaser {
    font-size: var(--type-scale-1);
    line-height: var(--spatial-scale-6);
    & > p {
      margin: var(--spatial-scale-00) 0 var(--spatial-scale-3) 0;
    }
  }
  .cta-wrapper {
    margin: var(--spatial-scale-4) 0 0;
  }
  .CtaLink {
    margin: 0 auto;
    max-width: 20rem;
  }
  @media (--viewport-medium) {
    .Story {
      display: flex;
      flex-direction: row;
      align-items: center;
      max-width: unset;
      padding: 0;
    }
    .image-wrapper {
      box-sizing: border-box;
      justify-content: flex-end;
      flex-basis: 50%;
    }
    .image-link {
      margin: 0 0 0 auto;
      max-width: calc(100% * 5 / 6);
    }
    .image {
      object-fit: fill;
      object-position: bottom;
    }
    .content-wrapper {
      box-sizing: border-box;
      flex-basis: 50%;
      flex-grow: 1;
      margin: var(--spatial-scale-7) auto;
    }
    div.content-wrapper > .BlockType, .title, .teaser, .cta-wrapper {
      max-width: 66%;
      margin-right: auto;
      margin-left: auto;
    }
    .title {
      line-height: var(--spatial-scale-6);
    }
    .title-link {
      text-decoration-line: underline;
      text-decoration-thickness: calc(1em/16);
      text-decoration-color: rgba(255, 255, 255, 0);
      transition: text-decoration-color 0.2s ease-in-out;
    &:hover {
      text-decoration-color: var(--white);
    }
    }
    .teaser {
      font-size: var(--type-scale-0);
      line-height: var(--spatial-scale-4);
    }
    .CtaLink {
      max-width: 100%;
      padding-right: var(--spatial-scale-1);
      padding-left: var(--spatial-scale-1);
    }
  }
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import paths from '~/paths'
import BlockType from '~/components/text/BlockType.vue'
import CtaLink from '~/components/buttons/CtaLink.vue'

export interface StoryData {
  backgroundColor: string
  caseStudyUrl: string
  ctaText: string
  image: {
    alt: string
    url: string
  }
  teaser: string
  overline: string
  title: string
  uid?: string
}

const Story = defineComponent({
  components: {
    BlockType,
    CtaLink
  },
  props: {
    data: {
      type: Object as PropType<StoryData>,
      required: true,
    }
  },
  data () {
    const {
      backgroundColor,
      ctaText,
      image,
      teaser,
      overline,
      title,
      uid,
      caseStudyUrl
    } = this.data

  return {
      backgroundColor,
      caseStudyUrl,
      ctaText,
      image,
      teaser,
      overline,
      paths,
      title,
      uid
    }
  },
})

export default Story
</script>
