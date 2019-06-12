<template>
  <case-study v-if="caseStudy" :data="caseStudy" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Prismic from 'prismic-javascript'
import CaseStudy, { ICaseStudyData, parseCaseStudy } from '~/components/content/CaseStudy.vue'
import { Document } from 'prismic-javascript/d.ts/documents';

@Component({
  components: {
    CaseStudy
  }
})

class CaseStudyPage extends Vue {
  async asyncData (ctx) {
//    console.log ('ctx.params.slug = ', ctx.params.slug)
    if (ctx.payload) {
//      console.log('payload = ', ctx.payload)
      const payload = ctx.payload as Document
      return parseCaseStudy(payload)
    } else return Prismic.getApi('https://distantly-yours-blog.cdn.prismic.io/api/v2').then( function (api) {
      return api.query(
        Prismic.Predicates.at('my.case_study.uid', ctx.params.slug),
        { lang: '*'}
      ).then( function (response) {
        const payload = response.results[0] as Document
        return {caseStudy: parseCaseStudy(payload)}
      }, (err) => {
        console.error('Something went wrong: ', err)
        return { title: err }
      })
    })
  }
  head () {
    const caseStudy = this.$data.caseStudy as ICaseStudyData
    return {
      title: caseStudy ? `${caseStudy.meta.project_name} ${caseStudy.meta.case_study_type}` : '…Loading',
      meta: [
        { hid: 'og:title', property: 'og:title', content: caseStudy ? `${caseStudy.meta.project_name} ${caseStudy.meta.case_study_type}` : '…Loading'},
        { hid: 'og:description', property: 'og:description', content: caseStudy ? `${caseStudy.headline}` : '…Loading'},
        { hid: 'og:url', property: 'og:url', content: `https://www.distantlyyours.com/portfolio/${caseStudy.slug}` },
      ]
    }
  }
  scrollToTop = true
}

export default CaseStudyPage
</script>
