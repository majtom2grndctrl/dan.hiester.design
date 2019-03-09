<template>
  <article>
    <header class="caseStudy-header">
      <div class="caseStudy-meta">
        <h1 v-html="data.headline" class="caseStudy-title" />
        <div>
          <span class="caseStudy-projectName">{{ data.meta.project_name }}</span>
          <span class="caseStudy-type">{{ data.meta.case_study_type }}</span>
        </div>
        <div class="caseStudy-projectDates">{{ data.meta.start_date }}&ndash;{{ data.meta.end_date }}</div>
      </div>
      <div class="caseStudy-hero">
        <img :src="data.hero_image.url" class="caseStudy-heroImage" :alt="data.hero_image.alt" />
      </div>
    </header>
    <div class="caseStudy-about" v-if="data.meta">
      <div class="caseStudy-team" v-if="data.meta.employer || data.meta.client || data.meta.team">
        <div v-if="data.meta.employer">
          <h2>Employer</h2>
          <div v-html="data.meta.employer" />
        </div>
        <div v-if="data.meta.client">
          <h2>Client</h2>
          <div v-html="data.meta.client" />
        </div>
        <div v-if="data.meta.roles">
          <h2>{{ data.meta.team_label }}</h2>
          <ul class="caseStudy-about-list">
            <li v-for="(role, index) in data.meta.roles" :key="index" v-html="role.title" />
          </ul>
        </div>
      </div>
      <div class="caseStudy-skills" v-if="data.meta.skills || data.meta.tools">
        <div v-if="data.meta.skills">
          <h2>What I did</h2>
          <ul class="caseStudy-about-list">
            <li v-for="(skill, index) in data.meta.skills" v-html="skill.name" :key="index" />
          </ul>
        </div>
        <div v-if="data.meta.tools">
          <h2>What I used</h2>
          <ul class="caseStudy-about-list">
            <li v-for="(tool, index) in data.meta.tools" v-html="tool.name" :key="index" />
          </ul>
        </div>
      </div>
    </div>
    <div v-html="data.parsedContent" class="prismic-content" />
  </article>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
//import { apiEndpoint, parseResponse } from './index'

export interface ICaseStudyData {
  data: {
    headline: string;
    meta: {
      case_study_type: string;
      project_name: string;
      start_date: string;
      end_date: string;
      employer: string;
      client: string;
      team_label: string;
      roles: string;
      skills: string;
      tools: string;
    };
    hero_image: {
      url: string;
    };
    parsedContent: string;
  };
}

const parsers = {
  content (block) {
    let contentString = ''
    !!block.title1 && (contentString += PrismicDOM.RichText.asHtml(block.title1))
    !!block.lede && (contentString += `<div class="lede">${PrismicDOM.RichText.asHtml(block.lede)}</div>`)
    !!block.content && (contentString += PrismicDOM.RichText.asHtml(block.content))
    return contentString
  },
  image (block) {
//    console.log('Current image block is: ', block)
    return `
      <figure>
        <img src="${block.image.url}" alt="${block.image.alt}" />
        <figcaption>${PrismicDOM.RichText.asHtml(block.caption)}</figcaption>
      </figure>
    `
  }
}

export function parseCaseStudy (data): ICaseStudyData {
  let parsedContent = ''
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
  data.body.map( slice => {
    switch(slice.slice_type) {
      case 'content_block': return parsedContent = parsedContent + parsers.content(slice.primary)
      case 'image_block': return parsedContent = parsedContent + parsers.image(slice.primary)
    }
  })
  console.log('data = ', data)
//  console.log('parsedContent = ', parsedContent)
  return {
    data: {
      headline: PrismicDOM.RichText.asText(data.headline),
      meta: {
        case_study_type: data.case_study_type,
        project_name:  data.project_name,
        start_date: parseDate(data.start_date),
        end_date: parseDate(data.end_date),
        employer: data.employer,
        client: data.client,
        team_label: data.team_label || 'Team',
        roles: data.roles,
        skills: data.skills,
        tools: data.tools
      },
      hero_image: {
        url: data.hero_image.url
      },
      parsedContent: parsedContent,
    }
  }
}

@Component({})

class CaseStudy extends Vue {

  @Prop()
  data: ICaseStudyData

}

export default CaseStudy
</script>

<style lang="scss" scoped>
  .caseStudy-header {
    background: $bg-blue-400;
    color: $white;
    display: flex;
      flex-direction: column;
    margin: 0 0 3rem 0;
    overflow: hidden;
  }
  .caseStudy-meta {
    margin: 1em;
  }
  .caseStudy-title {
    color: $white;
    font-size: (24rem/16);
    line-height: 1.4em;
    margin: .5em 0 .66em 0;
  }
  .caseStudy-projectName {
    display: inline-block;
    font-family: $font-heading;
    font-weight: 500;
    margin-right: .666em;
  }
  .caseStudy-type {
    display: inline-block;
    font-family: $font-heading;
    font-weight: 500;
    margin-bottom: .66em;
    opacity: .7;
  }
  .caseStudy-hero {
    text-align: center;
    margin: .5em 2rem 2rem 2rem;
  }
  .caseStudy-heroImage {
    max-width: 15em;
    width: 100%;
  }
  .caseStudy-about {
    color: $gray-400;
    line-height: 1.5em;
    margin: 2rem 1rem;
    h2 {
      color: $gray-600;
      font-size: 1em;
      margin: 1.5em 0 .5em;
      text-transform: uppercase;
    }
  }
  .caseStudy-about-list {
    list-style: none;
    margin: 0;
    padding: 0;
    > li {
      display: block;
      margin: .5em 0;
      padding: 0;
    }
  }
  @media (min-width: $viewport-small) {
    .caseStudy-title {
      margin: 1em auto .5em;
      max-width: 20em;
      text-align: center;
    }
    .caseStudy-meta {
      text-align: center;
    }
    .caseStudy-about {
      display: grid;
      grid-template-columns: 6fr 4fr;
      grid-column-gap: 2rem;
    }
    .caseStudy-team, .caseStudy-skills {
      flex-basis: 50%;
    }
  }
  @media (min-width: $viewport-medium) {
    .caseStudy-header {
      align-items: center;
      flex-direction: row;
      min-height: 25rem;
    }
    .caseStudy-title {
      font-size: (42rem/16);
      line-height: (1.275em);
      margin: 0 0 .66em 0;
      text-align: left;
    }
    .caseStudy-meta {
      box-sizing: border-box;
      flex-basis: 50%;
      margin: 0;
      padding: 0 (100% * 1 / 12) 0 (100% * 1 / 12);
      text-align: left;
      width: 100%;
    }
    .caseStudy-projectName {
      font-size: (20rem/16);
    }
    .caseStudy-type {
      font-size: (20rem/16);
    }
    .caseStudy-dates {
      font-size: (18rem/16);
    }
    .caseStudy-hero {
      box-sizing: border-box;
      flex-basis: 50%;
      margin: 0;
      padding: 3rem (100% * 1 / 12) 3rem 0;
      width: 100%;
    }
    .caseStudy-heroImage {
      max-width: 100%;
    }
    .caseStudy-about {
      margin-right: auto;
      margin-left: auto;
      width: (100% * 8/12);
    }
  }
</style>
