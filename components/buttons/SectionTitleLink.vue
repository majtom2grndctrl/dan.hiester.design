<template>
  <NuxtLink class="SectionTitleLink" :to="to">
    <client-only>
      <span v-if="showBackArrow">
        <svg class="icon" viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg">
          <title>back-chevron-medium</title>
          <g id="Mobile" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Mobile-Back-Comp-Copy" transform="translate(-287.000000, -72.000000)" fill="currentColor" fill-rule="nonzero">
              <polygon id="back-chevron-medium" points="291.062646 81.054 287 76.527 290.990646 72 293.222646 72 289.190646 76.527 293.222646 81.054"></polygon>
            </g>
          </g>
        </svg>
      </span>
    </client-only>
    <slot />
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

const SectionTitleLink = Vue.extend({
  props: {
    to: String as PropType<String>,
  },
  computed: {
    showBackArrow (): boolean {
      // If a slug is returned, it means we’re
      // looking at a content page, and we want
      // a back arrow to imply a button back to the index.
      return !!this.$route.params.slug;
    }
  },
});

export default SectionTitleLink;
</script>

<style lang="postcss" scoped>
  .SectionTitleLink {
    color: inherit;
    text-decoration: none;
  }
  .icon {
    height: var(--spatial-scale-5);
  }
  @media(--viewport-small) {
    .icon {
      display: none;
    }
  }
</style>
