<template>
  <div>
    <case-study v-if="caseStudy" :data="caseStudy" />
    <ContactCta />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Prismic from 'prismic-javascript'
import CaseStudy, { ICaseStudyData, parseCaseStudy } from '~/components/content/CaseStudy.vue'
import ContactCta from '~/components/contact/ContactCta.vue';
import { caseStudyMock } from '~/dataMocks';
import { Document } from 'prismic-javascript/d.ts/documents';

@Component({
  components: {
    CaseStudy,
    ContactCta,
  },
  scrollToTop: true,
})

class CaseStudyPage extends Vue {
  async asyncData (ctx) {
//    console.log ('ctx.params.slug = ', ctx.params.slug)
    if (ctx.payload) {
      console.log('ctx.payload = ', ctx.payload)
      const payload = ctx.payload as Document
      return {
        caseStudy: parseCaseStudy(payload)
      }
    } else return Prismic.getApi('https://distantly-yours-blog.cdn.prismic.io/api/v2').then( function (api) {
      return api.query(
        Prismic.Predicates.at('my.case_study.uid', ctx.params.slug),
        { lang: '*'}
      ).then( response => {
        const payload = response.results[0] as Document
        return {caseStudy: parseCaseStudy(payload)}
      }, (err) => {
        console.error('Something went wrong: ', err)
        return { title: err }
      })
    }).catch( err => {
      console.warn('Error downloading posts (/pages/portfolio/_slug.vue)', err);
      console.log('Using data mock: ', { caseStudy: parseCaseStudy(caseStudyMock.results[0]) });
      const caseStudy = parseCaseStudy(caseStudyMock.results[0]);
      return {
        caseStudy: caseStudy,
      }
    })
  }
  head () {
    const caseStudy = this.$data.caseStudy as ICaseStudyData
    return {
      title: caseStudy ? `${caseStudy.meta.project_name} ${caseStudy.meta.case_study_type}` : '…Loading',
      meta: [
        { hid: 'og:title', property: 'og:title', content: caseStudy ? `${caseStudy.meta.project_name} ${caseStudy.meta.case_study_type}` : '…Loading'},
        { hid: 'og:description', property: 'og:description', content: caseStudy ? `${caseStudy.headline}` : '…Loading'},
        { hid: 'og:url', property: 'og:url', content: `https://dan.hiester.design/portfolio/${caseStudy.slug}` },
        { hid: 'og:image', property: 'og:image', content: caseStudy.hero_image.url },
        { hid: 'og:image:alt', property: 'og:image:alt', content: caseStudy.hero_image.alt },
        { hid: 'twitter:image', name: 'twitter:image', content: caseStudy.hero_image.url },
        { hid: 'twitter:image:alt', name: 'twiter:image:alt', content: caseStudy.hero_image.alt },
      ]
    }
  }
}

export default CaseStudyPage
</script>
