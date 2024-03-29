<template>
  <div class="Nav2" :class="mobileNavClass">
    <nav class="nav">
      <BackButton :to="paths.portfolio" v-if="pathBase === '/portfolio'" class="nav-link">Back to Portfolio</BackButton>
      <BackButton :to="paths.blog" v-if="pathBase === '/blog'" class="nav-link">More blog posts</BackButton>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackButton from '~/components/buttons/BackButton.vue';
import paths from '../../paths';

interface Nav2Emits {
  showNav: boolean
  lastScrollPosition: number
  handleScroll: EventListener
  paths: {
    [key: string]: string
  }
  pathBase: string
  mobileNavClass: string
}

export default defineComponent<{}, Nav2Emits>({
  components: {
    BackButton,
  },
  data() {
    const pathBase = this.$route.matched[0].path;
    const showNav = false;
    const lastScrollPosition = 0;

    return {
      paths,
      pathBase,
      showNav,
      lastScrollPosition,
    };
  },
  computed: {
    mobileNavClass: function() {
      return this.showNav ? 'Nav2--visible' : '';
    }
  },
  methods: {
    handleScroll: function() {
      if (!document) return;
      const rootContainer = document.getElementById('ContentLayout')!;
      const currentScrollPosition = rootContainer.scrollTop;

      if (currentScrollPosition < 100) return (
        this.showNav = false
      );
      
      this.showNav = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
      // console.log('showNav = ', this.showNav);

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) return;
      this.showNav = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    }
  },
  mounted() {
    if (document) {
      document.getElementById('ContentLayout')!.addEventListener('scroll', this.handleScroll);
    }
  },
  beforeDestroy() {
    if (document) {
      document.getElementById('ContentLayout')!.removeEventListener('scroll', this.handleScroll);
    }
  }
})
</script>

<style lang="postcss" scoped>
  .Nav2 {
    background: var(--white);
    box-shadow: 0 0 .25em .125em rgba(0, 0, 0, .3);
    display: flex;
    position: fixed;
      top: 0;
      left: 0;
      right: 0;
    transition: transform .3s ease-out;
    transform: translate3d(0, -120%, 0);
    &.Nav2--visible {
      transform: translate3d(0, 0, 0);
    }
    & .BackButton.nav-link {
      font-family: var(--font-heading);
      padding: var(--spatial-scale-3);
    }
  }
  @media(--viewport-small) {
    .Nav2 {
      display: none;
    }
  }
</style>
