<template>
  <article v-if="content">
    <header class="header">
      <div class="meta">
        <h1 v-html="content.headline" class="title" />
        <div>
          <span class="projectName">{{ content.meta.project_name }}</span><span class="type">{{ content.meta.case_study_type }}</span>
        </div>
        <div v-if="content.meta.project_name" class="project-timeline">
          Timeline: {{ content.meta.project_timeline }}
        </div>
        <div v-if="showDates" class="project-dates">
          <span v-if="content.meta.remix_date">Original timeline: </span>
          {{ content.meta.start_date }}&ndash;{{ content.meta.end_date }}
        </div>
        <div v-if="content.meta.remix_date" class="remix-date">
          Project Remixed: {{content.meta.remix_date}}
        </div>
      </div>
      <div class="hero">
        <img :src="content.hero_image.url" class="heroImage" :alt="content.hero_image.alt" />
      </div>
    </header>

    <div class="prismic-content project-overview" v-if="showProjectOverview">
      <BlockType class="prismicContent-blockType" v-html="content.meta.project_overview.overline" />
      <div v-html="content.meta.project_overview.heading" />
      <div class="lede" v-html="content.meta.project_overview.lede" />
    </div>

    <div class="about" v-if="content.meta">
      <div class="team" v-if="content.meta.employer || content.meta.client">
        <div v-if="content.meta.employer">
          <h2>Employer</h2>
          <div v-html="content.meta.employer" />
        </div>
        <div v-if="content.meta.client">
          <h2>Client</h2>
          <div v-html="content.meta.client" />
        </div>
        <div v-if="content.meta.roles">
          <h2>{{ content.meta.team_label }}</h2>
          <ul class="about-list">
            <li v-for="(role, index) in content.meta.roles" :key="index" v-html="role.title" />
          </ul>
        </div>
      </div>
      <div class="skills" v-if="content.meta.skills || content.meta.tools">
        <div v-if="content.meta.skills">
          <h2>What I did</h2>
          <ul class="about-list">
            <li v-for="(skill, index) in content.meta.skills" v-html="skill.name" :key="index" />
          </ul>
        </div>
        <div v-if="content.meta.tools">
          <h2>What I used</h2>
          <ul class="about-list">
            <li v-for="(tool, index) in content.meta.tools" v-html="tool.name" :key="index" />
          </ul>
        </div>
      </div>
    </div>
    <PrismicSlices v-if="content.document" :prismicDocument="content.document" />
  </article>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue';
import PrismicDOM from 'prismic-dom'
import { Document } from 'prismic-javascript/types/documents'
import PrismicSlices from '~/components/content/PrismicSlices.vue'
import BlockType from '../text/BlockType.vue';

export interface CaseStudyData {
  headline: string;
  meta: {
    case_study_type: string
    project_name: string
    start_date?: string
    end_date?: string
    project_timeline?: string
    remix_date?: string
    employer: string
    client: string
    team_label: string
    roles: {
      title: string
    }[]
    skills: {
      name: string
    }[]
    tools: {
      name: string
    }[]
    project_overview: {
      overline?: string
      heading?: string
      lede?: string
      content?: string
    }
  }
  hero_image: {
    url: string
    alt?: string
  };
  slug?: string
  document: Document
}

export function parseCaseStudy (payload: Document): CaseStudyData {
  const { data } = payload
  function parseDate(date) {
    const months = Object.freeze({
      '01': 'Jan',
      '02': 'Feb',
      '03': 'Mar',
      '04': 'Apr',
      '05': 'May',
      '06': 'Jun',
      '07': 'Jul',
      '08': 'Aug',
      '09': 'Sep',
      '10': 'Oct',
      '11': 'Nov',
      '12': 'Dec'
    })
    date = date.split('-')
    return `${months[date[1]]} ${date[0]}`
  }
  return {
    headline: PrismicDOM.RichText.asText(data.headline),
    meta: {
      case_study_type: data.case_study_type,
      project_name:  data.project_name,
      project_timeline: PrismicDOM.RichText.asText(data.project_timeline),
      start_date: Boolean(data.start_date) ? parseDate(data.start_date) : undefined,
      end_date: Boolean(data.end_date) ? parseDate(data.end_date) : undefined,
      remix_date: Boolean(data.remix_date) ? parseDate(data.remix_date) : undefined,
      employer: data.employer,
      client: data.client,
      project_overview: {
        overline: data.project_overview_overline,
        heading: PrismicDOM.RichText.asHtml(data.project_overview_heading),
        lede: PrismicDOM.RichText.asHtml(data.project_overview_lede),
        content: PrismicDOM.RichText.asHtml(data.project_overview_content),
      },
      team_label: data.team_label || 'Team',
      roles: data.roles,
      skills: data.skills,
      tools: data.tools
    },
    hero_image: {
      url: data.hero_image.url,
      alt: data.hero_image.alt,
    },
    slug: payload.uid,
    document: payload,
  }
}

const CaseStudy = defineComponent({
  components: {
    PrismicSlices,
    BlockType
  },
  props: {
    content: {
      type: Object as PropType<CaseStudyData> || undefined,
      required: true,
    }
  },
  data () {
    if(!this.content) return {}
    const { 
      start_date,
      end_date,
      project_overview,
    } = this.content.meta
    const showProjectOverview = Boolean(
      project_overview.overline 
      && project_overview.heading 
      && project_overview.lede
    )
    const showDates = Boolean(start_date && end_date)
    return {
      showDates,
      showProjectOverview
    }
  }
})


export default CaseStudy
</script>

<style lang="postcss" scoped>
  .header {
    background: var(--bg-blue-400);
    color: var(--white);
    margin: 0 0 3rem 0;
    overflow: hidden;
  }
  .meta {
    margin: var(--spatial-scale-2);
  }
  .title {
    color: var(--white);
    font-weight: 400;
    font-size: var(--type-scale-3);
    line-height: var(--spatial-scale-7);
    margin: 0 0 var(--spatial-scale-2) 0;
  }
  .projectName {
    display: inline-block;
    font-family: var(--font-heading);
    font-weight: 500;
    margin-right: var(--spatial-scale-1);
  }
  .type {
    display: inline-block;
    font-family: var(--font-heading);
    font-weight: 500;
    margin-bottom: var(--spatial-scale-00);
    opacity: .7;
  }
  .project-timeline, .project-dates {
    margin-bottom: var(--spatial-scale-00);
  }
  .hero {
    text-align: center;
    margin: var(--spatial-scale-2);
  }
  .heroImage {
    max-width: 15em;
    width: 100%;
  }
  .project-overview {
    margin-top: var(--spatial-scale-10);
    margin-bottom: var(--spatial-scale-10);
  }
  .about {
    box-sizing: border-box;
    color: var(--gray-400);
    font-size: var(--type-scale-0);
    line-height: var(--spatial-scale-2);
    margin: var(--spatial-scale-10) 0;
    padding: 0 var(--spatial-scale-2);
    & h2 {
      color: var(--gray-600);
      font-size: var(--type-scale-00);
      font-weight: 500;
      line-height: var(--spatial-scale-0);
      margin: var(--spatial-scale-7) 0 var(--spatial-scale-1);
      text-transform: uppercase;
    }
  }
  .about-list {
    list-style: none;
    margin: 0;
    padding: 0;
    & > li {
      display: block;
      margin: var(--spatial-scale-1) 0;
      padding: 0;
    }
  }

  @media (--viewport-small) {
    .title {
      margin-right: auto;
      margin-left: auto;
      max-width: 20em;
      text-align: center;
    }
    .meta {
      text-align: center;
    }
    .about {
      display: grid;
      grid-template-columns: 6fr 4fr;
      grid-column-gap: var(--spatial-scale-2);
      max-width: 40rem;
      margin-right: auto;
      margin-left: auto;
      padding-right: var(--spatial-scale-5);
      padding-left: var(--spatial-scale-5);
    }
    .team, .skills {
      flex-basis: 50%;
    }
  }
  @media (--viewport-medium) {
    .header {
      background-clip: border-box;
      border-radius: var(--block-border-radius);
      display: grid;
      grid-template-columns: 1fr 4fr 1fr 5fr 1fr;
      align-items: center;
      flex-direction: row;
      min-height: 25rem;
    }
    .title {
      font-size: var(--type-scale-4);
      line-height: var(--spatial-scale-7);
      margin: 0 0 var(--spatial-scale-4) 0;
      text-align: left;
    }
    .meta {
      box-sizing: border-box;
      grid-area: 1 / 2 / 2 / 3;
      margin: 0;
      padding: 0;
      text-align: left;
      width: 100%;
    }
    .projectName {
      font-size: calc(20rem/16);
    }
    .type {
      font-size: calc(20rem/16);
    }
    .dates {
      font-size: calc(18rem/16);
    }
    .hero {
      border-radius: var(--block-border-radius);
      box-sizing: border-box;
      grid-area: 1 / 4 / 2 / 5;
      margin: 0;
      padding: var(--spatial-scale-5) 0;
      width: 100%;
    }
    .heroImage {
      max-width: 100%;
    }
    .about {
      font-size: var(--type-scale-1);
      line-height: var(--spatial-scale-4);
      margin-right: auto;
      margin-left: auto;
      max-width: unset;
      padding-right: 0;
      padding-left: 0;
      width: calc(100% * 8/12);
      & h2 {
        font-size: var(--type-scale-0);
      }
    }
  }
</style>
