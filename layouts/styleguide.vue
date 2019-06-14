<template>
  <div class="StyleGuideLayout">
    <style-guide-sidebar />
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import StyleGuideSidebar from '~/components/styleguide/sidebar.vue'
import CtaLink from '~/components/buttons/CtaLink.vue'

@Component({
  components: {
    StyleGuideSidebar
  }
})
class StyleGuide extends Vue {
  
}

export default StyleGuide

export const StyleGuideRoutes = {
  brandPrinciples: '/styleguide/',
  typography: '/styleguide/typography',
  colors: '/styleguide/colors',
  components: '/styleguide/components',
}
</script>

<style lang="postcss" scoped>
  .StyleGuideLayout {

  }
  @media (--viewport-medium) {
    .StyleGuideLayout {
      display: grid;
      grid-template-columns: 3fr 1fr 9fr 1fr;
    }
    .StyleGuideSidebar {
      grid-area: 1 / 1 / 2 / 2;
    }
    .content {
      grid-area: 1 / 3 / 2 / 4;
    }
  }
</style>

