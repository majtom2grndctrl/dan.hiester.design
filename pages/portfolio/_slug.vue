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
  scrollToTop = true
}

export default CaseStudyPage
</script>
