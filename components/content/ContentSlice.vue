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
</style>

