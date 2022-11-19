<template>
  <figure :class="display_size || 'cover-image'">
    <img :src="url" :alt="alt" />
    <figcaption v-html="caption" />
  </figure>
</template>

<script lang="ts">
import PrismicDOM from 'prismic-dom';
import Vue, { PropOptions } from 'vue'

interface ImageSliceBlock {
  caption: string;
  display_size: string;
  image: {
    alt: string;
    url: string;
  };
};

const ImageSlice = Vue.extend({
  props: {
    block: {
      type: Object,
      required: true,
    } as PropOptions<ImageSliceBlock>
  },
  data () {
    const display_size = this.block.display_size;
    const url = this.block.image.url;
    const alt = this.block.image.alt;
    const caption = PrismicDOM.RichText.asHtml(this.block.caption);

    return {
      display_size,
      url,
      alt,
      caption,
    };
  },
})

export default ImageSlice
</script>

<style lang="postcss" scoped>
.prismic-content {
  & figure {
    background: var(--bg-blue-400);
    color: var(--white);
    font-size: var(--type-scale-0);
    margin-right: var(--spatial-scale-2);
    margin-left: var(--spatial-scale-2);
    max-width: calc(40rem - var(--spatial-scale-4) * 2);
    padding: calc(1rem/16) calc(1rem/16) 1.5em calc(1rem/16);
    &.cover-image {
      margin-right: 0;
      margin-left: 0;
    }
  }
  & img {
    max-width: 100%;
  }
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
        padding: var(--block-border-radius);
      }
      &.large {
        border-radius: var(--block-border-radius);
        padding: var(--block-border-radius);
      }
      &.aside {
        max-width: calc(100% * 5 / 12);
        margin-right: calc(100% * 1 / 12);
        margin-left: var(--spatial-scale-3);
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
    }
    &.cover-image p {
      width: 71%
    }
  }
}
</style>
