<template>
  <div>
    <transition :name="this.$route.path === '/' ? '' : 'home'">

      <!-- Display splash when path is '/' -->
      <template v-if="this.$route.path === '/'">
        <nuxt/>
      </template>

      <!-- Display main site template when path isn't '/' -->
      <template v-if="this.$route.path !== '/'">
        <div>
          <site-header />
          <nuxt/>
          <footer class="footer"></footer>
        </div>
      </template>
    </transition>
  </div>
</template>


<script lang="ts">
import { Vue } from 'nuxt-property-decorator'
import SiteHeader from '~/components/layout/SiteHeader.vue'

export default Vue.extend ({
  components: {
    SiteHeader
  }
})
</script>

<style lang="scss">
// This prevents major CSS breakage.
.unused-class {
  width: $viewport-small;
}

</style>
