<template>
  <div class="AnthologyItem">
    <div class="content">
      <h3 class="type" v-html="data.type" />
      <div class="description block-preview" v-html="data.description" />
      <cta-link :to="data.href" v-html="data.ctaText" class="cta" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import CtaLink from '~/components/buttons/CtaLink.vue'

export interface AnthologyItemData {
  type: string
  description: string
  ctaText: string
  href: string
}

@Component({
  components: {
    CtaLink
  }
})

class AnthologyItem extends Vue {
  @Prop()
  data!: AnthologyItemData
}

export default AnthologyItem
</script>

<style lang="postcss" scoped>
.AnthologyItem {
  background-color: var(--white);
  border-radius: calc(8rem/16);
  color: var(--gray-400);
  margin: calc(12rem/16) 0;
  padding: 1rem;
  &:first-of-type {
    margin-top: calc(15rem/16);
  }
  & .cta {
    background-color: var(--gray-800);
    opacity: 1;
  }
}
.type {
  color: var(--gray-600);
  font-size: calc(14rem/16);
  font-weight: 500;
  line-height: 1em;
  margin: 0 0 calc(5rem/16) 0;
  text-transform: uppercase;
}
.description {
  /* Should extend .block-description */
  margin: calc(5rem/16) 0 calc(15rem/16) 0;
}
@media (--viewport-small) {
  .AnthologyItem {
    max-width: 30rem;
    margin-right: auto;
    margin-left: auto;

    & .cta {
      max-width: 20rem;
      margin-right: auto;
      margin-left: auto;
    }
  }
}
@media (--viewport-medium) {
  .AnthologyItem {
    color: inherit;
    box-sizing: border-box;
    display: flex;
      flex-direction: column;
      flex-basis: 50%;
    padding: 4rem 0 4.25rem 0;
    margin: 0;
    max-width: none;
    &:first-of-type {
      margin-top: 0;
    }
    &:nth-child(2n+1) {
      background: var(--bg-blue-600);
    }
    &:nth-child(2n) {
      background: var(--bg-blue-200);
    }
    & .cta {
      background-color: var(--white);
      opacity: .85;
      margin-right: 0;
      margin-left: 0;
    }
  }
  .type {
    color: inherit;
  }
  .content {
    display: flex;
      flex-direction: column;
      flex-basis: 100%;
    max-width: 30rem;
    margin-right: auto;
    margin-left: auto;
    width: 50%;
  }
  .description {
    flex-basis: 100%;
  }
}
</style>

