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
    margin: var(--spatial-scale-6) 0 var(--spatial-scale-10);
    max-width: calc(40rem - var(--spatial-scale-4) * 2);
    & > img {
      box-shadow: 0px 0px var(--spatial-scale-00) 0 rgba(90, 100, 104, 0.6);
      max-width: 100%;
    }
    &.Diagram {
      padding: 0 var(--spatial-scale-2);
    }
    &.Diagram > img {
      background: var(--gray-900);
      box-sizing: border-box;
      color: var(--gray-300);
      padding: var(--spatial-scale-2) var(--spatial-scale-2) var(--spatial-scale-1);
    }
    &.Screenshot {
      margin-left: var(--spatial-scale-2);
      margin-right: var(--spatial-scale-2);
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
      &.Screenshot {
        margin-right: auto;
        margin-left: auto;
        padding-left: var(--spatial-scale-2);
        padding-right: var(--spatial-scale-2);
      }
    }
  }
}
@media (--viewport-medium) {
  .prismic-content {
    & figure {
      box-sizing: border-box;
      font-size: var(--type-scale-0);
      max-width: calc(100% * 8 / 12);
      &.aside {
        max-width: calc(100% * 5 / 12);
        margin-right: calc(100% * 1 / 12);
        margin-left: var(--spatial-scale-3);
      }
      &.Diagram {
        padding: var(--block-border-radius);
      }
      &.Diagram > img {
        border-radius: var(--block-border-radius);
      }
      &.Screenshot {
        padding: none;
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
