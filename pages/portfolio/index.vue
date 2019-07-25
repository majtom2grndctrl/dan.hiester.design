<template>
  <div>
    <anthology class="Anthology--inroads">
      <template v-slot:hero><anthology-hero :data="inRoadsData.hero" /></template>
      <anthology-item v-for="(data, index) in inRoadsData.items" :data="data" :key="'key-' + index" />
    </anthology>

    <div class="grid-8-3 defer-for-transition">
      <stand-alone :story="fn1Data" class="fn1 grid-child-8" />
      <suggestion :data="blogSuggestion" class="featured-blog grid-child-3" />
    </div>

    <contact-cta class="defer-for-transition" />
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { swipeTransition } from "~/components/layout/MainLayout.vue"
import Anthology from '~/components/content/Anthology.vue'
import CtaLink from '~/components/buttons/CtaLink.vue'
import ContactCta from '~/components/ContactCta.vue';
import AnthologyHero, { AnthologyHeroData } from '~/components/content/AnthologyHero.vue'
import AnthologyItem, { AnthologyItemData } from '~/components/content/AnthologyItem.vue'
import StandAlone, { StandAloneProps } from '~/components/content/StandAlone.vue'
import Suggestion, { SuggestionProps } from '~/components/content/Suggestion.vue'

@Component({
  components: {
    Anthology,
    AnthologyHero,
    AnthologyItem,
    CtaLink,
    ContactCta,
    StandAlone,
    Suggestion,
  },
  scrollToTop: true,
})
class Index extends Vue {
  transition(to, from) {
    return swipeTransition(to, from);
  }
  inRoadsData: {hero: AnthologyHeroData, items: AnthologyItemData[]} = {
    hero: {
      title: 'inRoads',
      image: 'https://distantly-yours-blog.cdn.prismic.io/distantly-yours-blog/398418c1a3fcf707f6953f0cfb7388e9b9d3c818_inroads-hero2x.jpg',
      description: '<p>An award-winning web application that doesn’t just make it easier for the public to know when roads will close—it makes it possible for the public to see closings in the app they already&nbsp;use.</p>',
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
  fn1Data: StandAloneProps = {
    title: 'Factory Number One',
    type: 'Pattern Library Case Study',
    description: 'How do you improve the design of internal tools when resources are stretched thin?',
    href: '/portfolio/factory-number-one',
    ctaLabel: 'Patterns to the rescue!',
    imgSrc: 'https://prismic-io.s3.amazonaws.com/distantly-yours-blog%2Fa3cc84a9-67d1-4b4a-b7b1-81d71fad434f_fn1-hero-3.jpg',
    imgAlt: '',
  }
  blogSuggestion: SuggestionProps = {
    type: 'Featured Blog Post',
    title: 'I Googled font ramps, and it opened my eyes to so much more',
    ctaLabel: 'Put that ruler&nbsp;away',
    ctaHref: '/blog/i-googled-font-ramp-and-it-opened-my-eyes-to-so-much-more',
    altCta: {
      label: 'See more posts',
      href: '/blog',
    }
  }
}

export default Index
</script>

<style lang="postcss" scoped>
.fn1[class] {
  background: #199FA1;
}
.featured-blog[class] {
  background: #30A088;
}
</style>

