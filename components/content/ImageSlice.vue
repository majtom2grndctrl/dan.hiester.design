<template>
  <figure :class="`${display_size} ${image_style}`">
    <div v-if="image_overline" class="overline">{{ image_overline }}</div>
    <img :src="url" :alt="alt" />
    <figcaption v-html="caption" />
  </figure>
</template>

<script lang="ts" setup>
import PrismicDOM from 'prismic-dom';
import { PropOptions } from 'vue'

interface ImageSliceBlock {
  caption: string;
  display_size: 'cover-image' | 'large' | 'aside';
  image: {
    alt: string;
    url: string;
  };
  image_overline?: string;
  image_style: 'Diagram' | 'Screenshot';
};

const props = defineProps({
  block: {
    type: Object,
    required: true,
  } as PropOptions<ImageSliceBlock>
})

const { 
  image_overline,
  display_size,
  image_style,
} = props!.block!;
const url = props?.block?.image.url;
const alt = props?.block?.image.alt;
const caption = PrismicDOM.RichText.asHtml(props?.block?.caption);

</script>

<style lang="postcss" scoped>
.prismic-content {
  & figure {
    font-size: var(--type-scale-0);
    margin: var(--spatial-scale-6) var(--spatial-scale-2) var(--spatial-scale-10);
    max-width: calc(40rem - var(--spatial-scale-4) * 2);
    &.cover-image {
      margin-right: 0;
      margin-left: 0;
    }
    &.Diagram {
      background: var(--gray-800);
      color: var(--gray-300);
      padding: calc(1rem/16) calc(1rem/16) 1.5em calc(1rem/16);
    }
  }
}
.overline {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: var(--type-scale-0);
  line-height: var(--spatial-scale-0);
  margin: 0 0 var(--spatial-scale-3);
  text-transform: uppercase;
}
@media (--viewport-small) {
  .prismic-content {
    & figure {
      margin-right: auto;
      margin-left: auto;
      & p {
        margin-right: auto;
        margin-left: auto;
      }
      &.cover-image {
        max-width: unset;
      }
      &.aside {
        float: right;
        margin-left: var(--spatial-scale-1);
        max-width: calc(100% * 5 / 12);
      }
    }
  }
}
@media (--viewport-medium) {
  .prismic-content {
    & figure {
      box-sizing: border-box;
      font-size: var(--type-scale-0);
      margin-right: auto;
      margin-left: auto;
      max-width: calc(100% * 8 / 12);
      &.cover-image {
        border-radius: var(--block-border-radius);
      }
      &.large {
        border-radius: var(--block-border-radius);
      }
      &.aside {
        max-width: calc(100% * 5 / 12);
        margin-right: calc(100% * 1 / 12);
        margin-left: var(--spatial-scale-3);
      }
      &.Diagram {
        padding: var(--block-border-radius);
      }
    }
  }
}
</style>

<style lang="postcss">
.prismic-content figure {
    & a {
      color: var(--white);
    }
    & p {
      margin: var(--spatial-scale-0) var(--spatial-scale-2);
    }
}
@media (--viewport-medium) {
  .prismic-content figure {
    & p {
      margin-right: auto;
      margin-left: auto;
      width: auto;
      line-height: var(--spatial-scale-4);
    }
    &.cover-image p {
      max-width: calc(100% * 8 / 12);
    }
  }
}
</style>
