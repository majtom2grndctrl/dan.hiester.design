<template>
  <case-study v-if="data" :data="data" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Prismic from 'prismic-javascript'
import CaseStudy, { ICaseStudyData, parseCaseStudy } from '~/components/content/CaseStudy.vue'

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
      return parseCaseStudy(ctx.payload.data)
    } else return Prismic.getApi('https://distantly-yours-blog.cdn.prismic.io/api/v2').then( function (api) {
      return api.query(
        Prismic.Predicates.at('my.case_study.uid', ctx.params.slug),
        { lang: '*'}
      ).then( function (response) {
        return parseCaseStudy(response.results[0].data)
      }, (err) => {
        console.error('Something went wrong: ', err)
        return { title: err }
      })
    })
  }
  head () {
    const { data } = this.$data as ICaseStudyData
    console.log('content = ', data)
    return {
      title: data ? `${data.meta.project_name} ${data.meta.case_study_type}` : '…Loading',
      meta: [
        { hid: 'og:title', property: 'og:title', content: data ? `${data.meta.project_name} ${data.meta.case_study_type}` : '…Loading'},
      ]
    }
  }
  scrollToTop = true
}

export default CaseStudyPage
</script>
