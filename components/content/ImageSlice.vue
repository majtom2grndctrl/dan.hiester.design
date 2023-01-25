<template>
  <figure :class="display_size || 'cover-image'">
    <img :src="image.url" :alt="image.alt" />
    <figcaption v-html="captionHtml" />
  </figure>
</template>

<script lang="ts">
import PrismicDOM from 'prismic-dom';
import { defineComponent, PropType } from 'vue'

interface ImageSliceBlock {
  caption: string;
  display_size: string;
  image: {
    alt: string;
    url: string;
  };
};

const ImageSlice = defineComponent({
  props: {
    block: Object as PropType<ImageSliceBlock>
  },
  data (props) {
    const { display_size, image, caption } = props.block!

    const captionHtml = PrismicDOM.RichText.asHtml(caption);

    return {
      display_size,
      image,
      captionHtml,
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
    margin: var(--spatial-scale-6) var(--spatial-scale-2) var(--spatial-scale-10);
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
