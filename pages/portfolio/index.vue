<template>
  <div>
    <Anthology>
      <Story
        v-for="(item, index) in caseStudies"
        :class="index > 1 && 'render-after-transition'"
        :data="item"
        :key="'case_study_' + (index + 1)"
      />
    </Anthology>

    <ContactCta class="render-after-transition" />
  </div>
</template>


<script lang="ts">
import { Vue } from 'nuxt-property-decorator'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
import { apiEndpoint } from '~/layouts/default.vue'
import paths from '~/paths'
import Anthology from '~/components/content/Anthology.vue'
import Story, { StoryData } from '~/components/anthology/Story.vue'
import CtaLink from '~/components/buttons/CtaLink.vue'
import ContactCta from '~/components/contact/ContactCta.vue';
import AnthologyHero, { AnthologyHeroData } from '~/components/content/AnthologyHero.vue'
import AnthologyItem, { AnthologyItemData } from '~/components/content/AnthologyItem.vue'
import StandAlone, { StandAloneProps } from '~/components/content/StandAlone.vue'
import Suggestion, { SuggestionProps } from '~/components/content/Suggestion.vue'
import { swipeTransition } from '~/components/layout/MainLayout.vue'
import { scrollToContentTop } from '~/layouts/default.vue';

const getCmsText = PrismicDOM.RichText.asText
const getCmsHtml = PrismicDOM.RichText.asHtml

const PortfolioIndex = Vue.extend({
  components: {
    Anthology,
    AnthologyHero,
    AnthologyItem,
    CtaLink,
    ContactCta,
    StandAlone,
    Story,
    Suggestion,
  },
  scrollToTop: true,
  async asyncData () {
    const api = await Prismic.getApi(apiEndpoint);
    const { results } = await api.query(
      Prismic.Predicates.at('document.type', 'case_study'),
      { orderings: '[my.case_study.index_priority desc]'}
    );
    const caseStudies = results.map(item => {
      const { data } = item
      const mappedItem: StoryData = {
        backgroundColor: data.index_background,
        ctaText: getCmsText(data.index_cta),
        image: data.index_image,
        overline: getCmsText(data.overline),
        teaser: getCmsHtml(data.teaser),
        title: getCmsText(data.headline),
        url: paths.portfolio_item(item.uid!),
      }
      return mappedItem
    });
    return { caseStudies }
  },
  transition (to, from) {
    return swipeTransition(to, from)
  }
})

export default PortfolioIndex;
</script>

<style lang="postcss" scoped>
.fn1[class] {
  background: #199FA1;
}
.featured-blog[class] {
  background: #30A088;
}
</style>
