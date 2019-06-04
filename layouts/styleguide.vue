<template>
  <div>
    <header><dy-logo /></header>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import DyLogo from '~/components/DyLogo.vue'
import CtaLink from '~/components/buttons/CtaLink.vue'

@Component({
  components: {
    DyLogo
  }
})
class StyleGuide extends Vue {
  
}

export default StyleGuide
</script>

<style lang="postcss" scoped>

</style>

