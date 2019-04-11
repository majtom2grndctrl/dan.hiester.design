<template>
  <header class="anthology-hero">
    <h1 class="anthology-title">{{ data.title }}</h1>
    <div class="anthology-hero-image">
      <img :src="data.image" alt="" />
    </div>
    <div class="anthology-description" v-html="data.description" />
    <h2 class="anthology-hero-subhead" v-html="data.subhead" />
  </header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

export interface AnthologyHeroData {
  title: string
  image: string
  description: string
  subhead: string
}

@Component({})

class AnthologyHero extends Vue {
  @Prop()
  data!: AnthologyHeroData
}

export default AnthologyHero
</script>

<style lang="scss" scoped>
.anthology-hero {
  display: flex;
  flex-direction: column;
}
.anthology-title {
  color: var(--white);
  font-size: (30rem/16);
  font-weight: 400;
  line-height: (38em/30);
  margin: (35em/30) 0 (20em/30) 0;
  text-align: center;
}
.anthology-description {
  font-size: 1rem;
  line-height: (24em/16);
}
.anthology-hero-image {
  margin: 0 15%;
  > img {
    width: 100%;
  }
}
.anthology-hero-subhead {
  font-size: 1.875rem;
  font-weight: 400;
  line-height: 1.26667em;
  margin: 1.16667em 0 .66667em;
  text-align: center;
}
@media (min-width: $viewport-small) {
  .anthology-hero {
    max-width: 30rem;
    margin-right: auto;
    margin-left: auto;
  }
}
@media (min-width: $viewport-medium) {
  .anthology-hero {
    display: flex;
    height: 25.5rem;
    justify-content: center;
    overflow: hidden;
    padding: 0 60% 0 13%;
    position: relative;
  }
  .anthology-title {
    margin: .5em 0 0 0;
    text-align: left; 
  }
  .anthology-hero-subhead {
    display: none;
  }  
  .anthology-hero-image {
    margin: 0;
    position: absolute;
      top: 1rem;
      right: (100% * 1/12);
    width: (100% * 5.5/12);
  }

  /* Modification classes */
  .anthology--inroads {
    .anthology-title {
      font-size: (48rem/16) !important;
    }
  }
}

</style>
