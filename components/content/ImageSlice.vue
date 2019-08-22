<template>
  <figure :class="display_size || 'cover-image'">
    <img :src="url" :alt="alt" />
    <figcaption v-html="caption" />
  </figure>
</template>

<script lang="ts">
  import PrismicDOM from 'prismic-dom';
  import { createComponent, value, onMounted } from 'vue-function-api';

  export default createComponent({
    props: {
      block: {
        primary: {
          caption: String,
          display_size: String,
          image: {
            url: String,
            alt: String,
          },
        },
      },
    },
    setup (props) {
      const item = props.block!.primary;
      const display_size = value(item.display_size);
      const url = value(item.image.url);
      const alt = value(item.image.alt);
      const caption = value(PrismicDOM.RichText.asHtml(item.caption));

      return {
        display_size,
        url,
        alt,
        caption,
      };
    },
  });
</script>
