<template>
  <NuxtLink class="SectionTitleLink" :to="to">
    <span v-if="!isExactPath">
      <svg class="icon" viewBox="0 0 7 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Mobile" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Mobile-Back-Comp-Copy" transform="translate(-19.000000, -14.000000)" fill="currentColor" fill-rule="nonzero">
            <polygon id="back-chevron-bold" points="23.0384151 23 19 18.5 22.9668445 14 25.5149832 14 21.5070309 18.5 25.5149832 23"></polygon>
          </g>
        </g>
      </svg>
    </span>
    <slot />
  </NuxtLink>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator';

export default Vue.extend({
  props: {
    to: String,
  },
  computed: {
    isExactPath: function() {
      const currentPath = this.$route.path;
      return this.to === currentPath;
    }
  },
});
</script>

<style lang="postcss" scoped>
  .SectionTitleLink {
    color: inherit;
    text-decoration: none;
  }
  .icon {
    height: var(--spatial-scale-6);
  }
</style>
