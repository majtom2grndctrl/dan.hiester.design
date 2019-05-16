<template>
  <div>
    <anthology class="Anthology--inroads">
      <template v-slot:hero><anthology-hero :data="inRoadsData.hero" /></template>
      <anthology-item v-for="(data, index) in inRoadsData.items" :data="data" :key="'key-' + index" />
    </anthology>
    <contact-cta />
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { swipeTransition } from "~/components/layout/MainLayout.vue"
import Anthology from '~/components/content/Anthology.vue'
import CtaLink from '~/components/buttons/CtaLink.vue'
import ContactCta from '~/components/ContactCta.vue'
import AnthologyHero, { AnthologyHeroData } from '~/components/content/AnthologyHero.vue'
import AnthologyItem, { AnthologyItemData } from '~/components/content/AnthologyItem.vue'

@Component({
  components: {
    Anthology,
    AnthologyHero,
    AnthologyItem,
    CtaLink,
    ContactCta
  }
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
}

export default Index
</script>
