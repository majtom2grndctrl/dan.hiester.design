<template>
  <div class="prismic-content">
    <BlockType v-if="blockType" v-html="blockType" class="prismicContent-blockType" />
    <div v-if="title1" v-html="title1" class="block-title" />
    <div class="lede" v-if="lede" v-html="lede" />
    <div v-if="content" v-html="content" />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import PrismicDOM from 'prismic-dom';
import BlockType from '~/components/text/BlockType.vue';

interface ContentSliceBlock {
  block_type: string;
  title1?: string;
  lede?: string;
  content?: string;
};

const props = defineProps({
  block: Object as PropType<ContentSliceBlock>
})

const blockType = props.block!.block_type;
const title1 = PrismicDOM.RichText.asHtml(props.block!.title1);
const lede = PrismicDOM.RichText.asHtml(props.block!.lede);
const content = PrismicDOM.RichText.asHtml(props.block!.content);


</script>

<style lang="postcss">

/*
  Styles for content retrieved from the cloud CMS
****************************/
.prismic-content {
  font-size: var(--type-scale-0);
  line-height: var(--spatial-scale-5);
  color: var(--gray-400);
  & .lede p {
    font-size: var(--type-scale-1);
    line-height: var(--type-scale-4);
  }
  & img {
    max-width: 100%;
  }
  & p, & ol, & ul {
    margin-top: var(--spatial-scale-1);
    margin-bottom: var(--spatial-scale-2);
  }
  & p, & ol, & ul, & h2, & h3, & h4, & h5, & h6, & .BlockType.prismicContent-blockType {
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 40rem;
    padding-right: var(--spatial-scale-2);
  }
  & p, & h2, & h3, & h4, & h5, & h6, & .BlockType.prismicContent-blockType {
    padding-left: var(--spatial-scale-2);
  }
  & ol, & ul {
    padding-left: var(--spatial-scale-8);
  }
  & h3, & h4, & h5, & h6 {
    color: var(--gray-600);
    margin-top: 1.5em;
    margin-bottom: .75em;
  }
  & h2 {
    font-size: var(--type-scale-3);
    font-weight: 500;
    line-height: var(--spatial-scale-7);
    margin-top: 0;
    margin-bottom: 0;
  }
  & h3 {
    font-size: var(--type-scale-2);
    line-height: var(--spatial-scale-6);
  }
  & pre {
    background: var(--gray-800);
    box-sizing: border-box;
    color: var(--bg-blue-200);
    overflow-x: auto;
    margin-top: var(--spatial-scale-2);
    margin-bottom: var(--spatial-scale-2);
    padding: var(--spatial-scale-2) var(--spatial-scale-2);
  }
  & .block-title {
    margin-top: var(--spatial-scale-10);
    margin-bottom: var(--spatial-scale-1);
  }
  & .BlockType.prismicContent-blockType {
    color: var(--gray-600);
    margin-top: var(--spatial-scale-10);
    margin-bottom: var(--spatial-scale-00);
  }
}
.prismic-content > .BlockType.prismicContent-blockType + .block-title {
  margin-top: 0;
}

@media (--viewport-small) {
  .prismic-content {
    font-size: var(--font-scale-1);
    & p, & ol, & ul {
      line-height: var(--spatial-scale-5);
    }
    & p, & ol, & ul, & h2, & h3, & h4, & h5, & h6, & .BlockType.prismicContent-blockType {
      padding-right: var(--spatial-scale-5);
    }
    & p, & h2, & h3, & h4, & h5, & h6 {
      padding-left: var(--spatial-scale-5);
    }
    & .block-title {
      margin: var(--spatial-scale-12) auto var(--spatial-scale-3);
    }
    & .BlockType.prismicContent-blockType {
      padding-left: calc(var(--spatial-scale-5) + .1ch);
      margin: var(--spatial-scale-12) auto var(--spatial-scale-00);
    }
    & .lede p {
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-7);
    }
    & pre {
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
    & p, & ol, & ul, & h2, & h3, & h4, & h5, & h6, & .BlockType.prismicContent-blockType {
      max-width: unset;
      width: calc(100% * 8 / 12);
    }
    & p, & h2, & h3, & h4, & h5, & h6, & .BlockType.prismicContent-blockType {
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
    }
    & .block-title {
      margin-top: var(--spatial-scale-9);
      margin-bottom: var(--spatial-scale-3);
    }
    & .BlockType.prismicContent-blockType {
      font-size: var(--type-scale-0);
      line-height: var(--spatial-scale-0);
      margin-top: var(--spatial-scale-9);
      padding-left: .1ch;
    }
    & h3 {
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-6);
    }
    & pre {
      border-radius: var(--block-border-radius);
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
    /*& p, & ol, & ul {
      line-height: calc(53em/24);
    }*/
    .BlockType.prismicContent-blockType {
      margin-top: var(--spatial-scale-11);
    }
  }
}

</style>

