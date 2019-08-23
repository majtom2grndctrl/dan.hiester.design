<template>
  <div>
    <div v-if="title1" v-html="title1" />
    <div class="lede" v-if="lede" v-html="lede" />
    <div v-if="content" v-html="content" />
  </div>
</template>

<script lang="ts">
import PrismicDOM from 'prismic-dom';
import { createComponent, value, onMounted } from 'vue-function-api';
import BlockType from '~/components/text/BlockType.vue';

const ContentSlice = createComponent({
  props: {
    block: {
      block_type: String,
      title1: String,
      lede: String,
      content: String,
    }
  },
  setup(props) {
    const block = props.block!;
    const blockType = value(block.block_type);
    const title1 = value(PrismicDOM.RichText.asHtml(block.title1));
    const lede = value(PrismicDOM.RichText.asHtml(block.lede));
    const content = value(PrismicDOM.RichText.asHtml(block.content));

    return {
      blockType,
      title1,
      lede,
      content,
    };
  },
});

export default ContentSlice;
</script>

<style lang="postcss" scoped>
.block-type {
  color: var(--gray-600);
}

/*
  Styles for content retrieved from the cloud CMS
****************************/

.prismic-content {
  font-size: var(--type-scale-0);
  line-height: var(--spatial-scale-5);
  color: var(--gray-400);
  & .lede p {
    font-size: var(--type-scale-1);
    line-height: var(--type-scale-3);
  }
  & img {
    max-width: 100%;
  }
  & p, & ol, & ul {
    margin-top: var(--spatial-scale-1);
    margin-bottom: var(--spatial-scale-2);
  }
  & p, & ol, & ul, & h2, & h3, & h4, & h5, & h6 {
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 40rem;
    padding-right: var(--spatial-scale-2);
  }
  & p, & h2, & h3, & h4, & h5, & h6 {
    padding-left: var(--spatial-scale-2);
  }
  & ol, & ul {
    padding-left: var(--spatial-scale-8);
  }
  & h1, & h2, & h3, & h4, & h5, & h6 {
    color: var(--gray-600);
    margin-top: 1.5em;
    margin-bottom: .75em;
  }
  & h2 {
    font-size: var(--type-scale-3);
    line-height: var(--spatial-scale-7);
    margin-top: var(--spatial-scale-7);
    margin-bottom: var(--spatial-scale-1);
  }
  & > pre {
    background: var(--gray-800);
    box-sizing: border-box;
    color: var(--bg-blue-200);
    overflow-x: auto;
    margin-top: var(--spatial-scale-2);
    margin-bottom: var(--spatial-scale-2);
    padding: var(--spatial-scale-2) var(--spatial-scale-2);
  }
}
@media (--viewport-small) {
  .prismic-content {
    font-size: var(--font-scale-1);
    & p, & ol, & ul {
      line-height: var(--spatial-scale-5);
    }
    & h2 {
      font-size: var(--type-scale-4);
      line-height: var(--spatial-scale-8);
    }
    & p, & ol, & ul, & h2, & h3, & h4, & h5, & h6 {
      padding-right: var(--spatial-scale-5);
    }
    & p, & h2, & h3, & h4, & h5, & h6 {
      padding-left: var(--spatial-scale-5);
    }
    & .lede p {
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-7);
    }
    & > pre {
      margin: var(--spatial-scale-2);
    }
  }
}
@media (--viewport-medium) {
  .prismic-content {
    font-size: var(--type-scale-1);
    & p, & ol, & ul {
      line-height: var(--spatial-scale-5);
      margin-top: var(--spatial-scale-3);
      margin-bottom: var(--spatial-scale-3);
    }
    & li {
      margin-bottom: var(--spatial-scale-2);
    }
    & p, & ol, & ul, & h2, & h3, & h4, & h5, & h6 {
      max-width: unset;
      width: calc(100% * 8 / 12);
    }
    & p, & h2, & h3, & h4, & h5, & h6 {
      padding: unset;
    }
    & ul, & ol {
      padding-left: var(--spatial-scale-5);
    }
    & .lede p {
      font-size: var(--type-scale-2);
      line-height: var(--spatial-scale-6);
      margin-bottom: var(--spatial-scale-5);
    }
    & h2 {
      font-size: var(--type-scale-4);
      line-height: var(--spatial-scale-7);
      margin: var(--spatial-scale-7) auto var(--spatial-scale-3);
    }
    & h3 {
      font-size: var(--type-scale-3);
    }
    & > pre {
      font-size: var(--type-scale-0);
      line-height: var(--spatial-scale-4);
      margin-right: 0;
      margin-left: 0;
    }
  }
}
@media (--viewport-large) {
  .prismic-content {
    /*font-size: calc(74rem/16);*/
    & p, & ol, & ul {
      /*line-height: calc(53em/24);*/
    }
  }
}

</style>

