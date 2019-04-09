<template>
  <div>
    <anthology :data="inRoadsData" mod-class="anthology--inroads" />
    <section class="anthology anthology--inroads">
      <header class="anthology-hero">
        <h1>inRoads</h1>
        <div class="anthology-hero-image">
          <img src="https://distantly-yours-blog.cdn.prismic.io/distantly-yours-blog/398418c1a3fcf707f6953f0cfb7388e9b9d3c818_inroads-hero2x.jpg" alt="inRoads responsive design on an iMac and Android phone" />
        </div>
        <p>An award-winning web application that doesn’t just make it easier for the public to know when roads will close—it makes it possible for the public to see closings in the app they already&nbsp;use.</p>
        <h2 class="inroads-mobile-teaser">One&nbsp;project. Two&nbsp;stories.</h2>
      </header>
      <div class="anthology-list">
        <div class="anthology-item">
          <div class="anthology-item-content">
            <h3 class="anthology-item-type">UI Case Study</h3>
            <div class="anthology-item-description">My team thought a responsive map app was impossible—until we were tweet-shamed for not doing&nbsp;it.</div>
            <cta-link to="/portfolio/inroads-ui">How I made it possible</cta-link>
          </div>
        </div>
        <div class="anthology-item">
          <div class="anthology-item-content">
            <h3 class="anthology-item-type">UX Case Study</h3>
            <div class="anthology-item-description">Before inRoads, collecting and publishing road closing information was overwhelming for one&nbsp;employee.</div>
            <cta-link to="/portfolio/inroads-ux">How we rescued Fridays</cta-link>
          </div>
        </div>
      </div>
    </section>
    <contact-cta />
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { swipeTransition } from "~/components/layout/MainLayout.vue"
import Anthology, { AnthologyData } from '~/components/content/Anthology.vue'
import CtaLink from "~/components/buttons/CtaLink.vue"
import ContactCta from '~/components/ContactCta.vue'
import AnthologyItem from '../../components/content/AnthologyItem.vue';

@Component({
  components: {
    Anthology,
    CtaLink,
    ContactCta
  }
})
class Index extends Vue {
  transition(to, from) {
    return swipeTransition(to, from);
  }
  inRoadsData: AnthologyData = {
    hero: {
      title: 'inRoads',
      image: 'https://distantly-yours-blog.cdn.prismic.io/distantly-yours-blog/398418c1a3fcf707f6953f0cfb7388e9b9d3c818_inroads-hero2x.jpg',
      description: 'An award-winning web application that doesn’t just make it easier for the public to know when roads will close—it makes it possible for the public to see closings in the app they already&nbsp;use.',
      subhead: 'One&nbsp;project. Two&nbsp;stories.'
    },
    items: [
      {
        type: 'UI Case Study',
        description: 'My team thought a responsive map app was impossible—until we were tweet-shamed for not doing&nbsp;it.',
        ctaText: 'How I made it possible',
        href: '/portfolio/inroads-ui'
      },
      {
        type: 'UX Case Study',
        description: 'Before inRoads, collecting and publishing road closing information was overwhelming for one&nbsp;employee.',
        ctaText: 'How we rescued Fridays',
        href: '/portfolio/inroads-ux'
      }
    ]
  }
}

export default Index
</script>


<style lang="scss" scoped>
@media (min-width: $viewport-medium) {
  .anthology--inroads {
    .anthology-hero {
      h1 {
        font-size: (48rem/16);
      }
    }
  }
}
@media (min-width: $viewport-large) {
}

.anthology-list {
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
}
@media (min-width: $viewport-medium) {
  .anthology-list {
    flex-direction: row;
    padding-bottom: 0;
  }
  .anthology-item-type {
    color: inherit;
  }
  .anthology-item {
    color: inherit;
    box-sizing: border-box;
    display: flex;
      flex-direction: column;
      flex-basis: 50%;
    padding: 4rem 0 4.25rem 0;
    margin: 0;
    max-width: none;
    &:first-of-type {
      margin-top: 0;
    }
    &:nth-child(2n+1) {
      background: var(--bg-blue-600);
    }
    &:nth-child(2n) {
      background: var(--bg-blue-200);
    }
    .cta-link.cta-link--white {
      background-color: var(--white);
      opacity: .85;
      margin-right: 0;
      margin-left: 0;
    }
  }
  .anthology-item-content {
    display: flex;
      flex-direction: column;
      flex-basis: 100%;
    max-width: 30rem;
    margin-right: auto;
    margin-left: auto;
    width: 50%;
  }
  .anthology-item-description {
    font-size: (18rem/16);
    flex-basis: 100%;
  }
}
@media (min-width: $viewport-large) {

}
</style>
