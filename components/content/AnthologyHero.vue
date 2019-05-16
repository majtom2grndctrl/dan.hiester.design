<template>
  <header class="AnthologyHero">
    <h1 class="title">{{ data.title }}</h1>
    <div class="image">
      <img :src="data.image" alt="" />
    </div>
    <div class="description" v-html="data.description" />
    <h2 class="subhead" v-html="data.subhead" />
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

<style lang="postcss" scoped>
.AnthologyHero {
  display: flex;
  flex-direction: column;
}
.title {
  color: var(--white);
  font-size: calc(30rem/16);
  font-weight: 400;
  line-height: calc(38em/30);
  margin: calc(35em/30) 0 calc(20em/30) 0;
  text-align: center;
}
.description {
  font-size: 1rem;
  line-height: calc(24em/16);
}
.image {
  margin: 0 15%;
  & > img {
    width: 100%;
  }
}
.subhead {
  font-size: 1.875rem;
  font-weight: 400;
  line-height: 1.26667em;
  margin: 1.16667em 0 .66667em;
  text-align: center;
}
@media (--viewport-small) {
  .AnthologyHero {
    max-width: 30rem;
    margin-right: auto;
    margin-left: auto;
  }
}
@media (--viewport-medium) {
  .AnthologyHero {
    display: flex;
    height: 25.5rem;
    justify-content: center;
    overflow: hidden;
    padding: 0 60% 0 13%;
    position: relative;
  }
  .title {
    margin: .5em 0 0 0;
    text-align: left; 
  }
  .subhead {
    display: none;
  }  
  .image {
    margin: 0;
    position: absolute;
      top: 1rem;
      right: calc(100% * 1/12);
    width: calc(100% * 5.5/12);
  }

  /* Modification classes */
  .Anthology--inroads {
    & .title {
      font-size: calc(48rem/16) !important;
    }
  }
}

</style>
