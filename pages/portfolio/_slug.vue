<template>
  <div>
    <CaseStudy v-if="caseStudy" :content="caseStudy" />
    <ContactCta />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Context } from '@nuxt/types';
import Prismic from 'prismic-javascript'
import CaseStudy, { CaseStudyData, parseCaseStudy } from '~/components/content/CaseStudy.vue'
import ContactCta from '~/components/contact/ContactCta.vue';
import { caseStudyMock } from '~/dataMocks';
import { Document } from 'prismic-javascript/types/documents';
import { scrollToContentTop } from '~/layouts/default.vue';

interface ComponentData {
  caseStudy?: CaseStudyData
}

const CaseStudyPage = defineComponent<{}, ComponentData>({
  components: {
    CaseStudy,
    ContactCta,
  },
  scrollToTop: true,
  async asyncData (ctx: Context) {
//    console.log ('ctx.params.slug = ', ctx.params.slug)
    if (ctx.payload) {
//      console.log('ctx.payload = ', ctx.payload)
      const payload = ctx.payload as Document
      return {
        caseStudy: parseCaseStudy(payload)
      }
    } else return Prismic.getApi('https://distantly-yours-blog.cdn.prismic.io/api/v2').then( (api) =>
      api.query(
        Prismic.Predicates.at('my.case_study.uid', ctx.params.slug),
        { lang: '*'}
      ).then( response => {
        const payload = response.results[0] as Document
        return { caseStudy: parseCaseStudy(payload) }
      }, (err) => {
//        console.error('Something went wrong: ', err)
        return { title: err }
      })
    ).catch( err => {
      console.warn('Error downloading posts (/pages/portfolio/_slug.vue)', err);
      console.log('Using data mock: ', { caseStudy: parseCaseStudy(caseStudyMock.results[0]) });
      const caseStudy = parseCaseStudy(caseStudyMock.results[0]);
      return {
        caseStudy
      }
    });
  },
  head () {
    if(!this.$data.caseStudy) return {}
    const caseStudy = this.$data.caseStudy
    const meta = [
      { hid: 'og:title', property: 'og:title', content: `${caseStudy.meta.project_name} ${caseStudy.meta.case_study_type}`},
      { hid: 'og:description', property: 'og:description', content: `${caseStudy.headline}`},
      { hid: 'og:url', property: 'og:url', content: `https://dan.hiester.design/portfolio/${caseStudy.slug}` },
      { hid: 'og:image', property: 'og:image', content: caseStudy.hero_image.url },
      { hid: 'twitter:image', name: 'twitter:image', content: caseStudy.hero_image.url },
    ]
    if(caseStudy.hero_image.alt) {
      meta.push(
        { hid: 'og:image:alt', property: 'og:image:alt', content: caseStudy.hero_image.alt},
        { hid: 'twitter:image:alt', name: 'twiter:image:alt', content: caseStudy.hero_image.alt }
      )
    }
    return {
      title: caseStudy ? `${caseStudy.meta.project_name} ${caseStudy.meta.case_study_type}` : '…Loading',
      meta
    }
  },
  mounted() {
    scrollToContentTop();
  }
})

export default CaseStudyPage
</script>
