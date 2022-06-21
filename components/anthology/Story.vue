<template>
  <article class="Story" ref="storyWrapper" :style="`--story-background:${backgroundColor}`">
    <div class="image-wrapper"><img :src="image.url" :alt="image.alt" class="image" /></div>
    <div class="content-wrapper">
      <BlockType v-html="overline" />
      <h2 class="title" v-html="title" />
      <div class="teaser" v-html="teaser" />
      <div class="cta-wrapper">
        <CtaLink :to="url" v-html="ctaText" />
      </div>
    </div>
  </article>
</template>

<style lang="postcss">
  .Story {
    background: var(--story-background);
    box-sizing: border-box;
    margin: 0 auto;
    max-width: var(--mobile-max-width);
    padding: var(--spatial-scale-3) var(--spatial-scale-3);
  }
  .image-wrapper {
    padding: var(--block-border-radius);
    text-align: center;
  }
  .image {
    max-width: 80%;
  }
  .title {
    font-size: var(--type-scale-3);
    line-height: var(--spatial-scale-6);
    margin: 0;
  }
  .teaser {
    font-size: var(--type-scale-1);
    line-height: var(--spatial-scale-5);
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
      padding: 0 var(--block-border-radius) 0;
      --internal-gutter: calc(var(--block-border-radius) / 2);
    }
    .image-wrapper {
      justify-content: flex-end;
      flex-basis: 50%;
      padding: var(--block-border-radius) var(--internal-gutter) 0;
    }
    .image {
      object-fit: fill;
      object-position: bottom;
    }
    .content-wrapper {
      flex-basis: 50%;
      flex-grow: 1;
      padding: var(--block-border-radius) 0 var(--block-border-radius) var(--internal-gutter);
    }
    .cta-wrapper {
    }
    .CtaLink {
      max-width: 66%;
    }
  }
</style>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import paths from '~/paths'
import BlockType from '~/components/text/BlockType.vue'
import CtaLink from '~/components/buttons/CtaLink.vue'

export interface StoryData {
  backgroundColor: string
  ctaText: string
  image: {
    alt: string
    url: string
  }
  teaser: string
  overline: string
  title: string
  url: string
}

interface StoryProps {
  data: StoryData
}

export default defineComponent<StoryProps>({
  components: {
    BlockType,
    CtaLink
  },
  props: {
    data: Object as PropType<StoryData>
  },
  setup({ data }) {
    const {
      backgroundColor,
      ctaText,
      image,
      teaser,
      overline,
      title,
      url
    } = data

  return {
      backgroundColor,
      ctaText,
      image,
      teaser,
      overline,
      paths,
      title,
      url
    }
  },
})
</script>
