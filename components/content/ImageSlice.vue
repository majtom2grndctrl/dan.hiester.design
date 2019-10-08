<template>
  <figure :class="display_size || 'cover-image'">
    <img :src="url" :alt="alt" />
    <figcaption v-html="caption" />
  </figure>
</template>

<script lang="ts">
  import PrismicDOM from 'prismic-dom';
  import { createComponent, ref, onMounted } from '@vue/composition-api';

  export default createComponent({
    props: {
      block: {
        required: true,
        type: Object,
        caption: {
          type: String,
          required: false,
        },
        display_size: {
          type: String,
          required: false,
        },
        image: {
          url: {
            type: String,
            required: true,
          },
          alt: {
            type: String,
            required: true,
          },
        },
      },
    } as const,
    setup (props) {
      const item = props.block!;
      const display_size = ref(item.display_size);
      const url = ref(item.image.url);
      const alt = ref(item.image.alt);
      const caption = ref(PrismicDOM.RichText.asHtml(item.caption));

      return {
        display_size,
        url,
        alt,
        caption,
      };
    },
  });
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
    & a {
      color: var(--white);
    }
    & p {
      line-height: var(--spatial-scale-4);
      margin: var(--spatial-scale-0) var(--spatial-scale-2);
    }
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
      font-size: var(--type-scale-0);
        margin-right: auto;
        margin-left: auto;
        max-width: calc(100% * 8 / 12);
      &.aside {
        max-width: calc(100% * 5 / 12);
        margin-right: calc(100% * 1 / 12);
        margin-left: var(--spatial-scale-3);
      }
      & p {
        margin-right: auto;
        margin-left: auto;
        width: 68%;
        line-height: var(--spatial-scale-4);
      }
    }
  }
}
</style>
