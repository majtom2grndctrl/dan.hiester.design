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
.push-farther {
  display: none;
  @media (min-width: $viewport-medium) {
    color: #797979;
    display: block;
    font-weight: 300;
    font-size: (15rem/16);
    letter-spacing: .05ex;
    opacity: .6;
    padding: 0;
    position: absolute;
      top: (48rem/16);
      right: (100% * 1/14);
    text-transform: uppercase;
    transition: transform .5s ease, opacity .5s, filter .5s;
    &:before {
      color: #076381;
      content: '//';
      font-size: (26em/15);
      font-weight: bold;
      font-style: italic;
      mix-blend-mode: color-burn;
      padding: 0 .125em;
      position: absolute;
        left: -(20em/15);
        top: 45%;
      transform: translate(0, -50%);
    }
  }
}

</style>
