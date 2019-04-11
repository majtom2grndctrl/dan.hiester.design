<template>
  <div class="anthology-item">
    <div class="anthology-item-content">
      <h3 class="anthology-item-type" v-html="data.type" />
      <div class="anthology-item-description" v-html="data.description" />
      <cta-link :to="data.href" v-html="data.ctaText" />
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

<style lang="scss" scoped>
.anthology-item {
  background-color: var(--white);
  border-radius: (8rem/16);
  color: var(--gray-400);
  margin: (12rem/16) 0;
  padding: 1rem;
  &:first-of-type {
    margin-top: (15rem/16);
  }
  .cta-link.cta-link--white {
    background-color: var(--gray-800);
    opacity: 1;
  }
}
.anthology-item-type {
  color: var(--gray-600);
  font-size: (14rem/16);
  font-weight: 500;
  line-height: 1em;
  margin: 0 0 (5rem/16) 0;
  text-transform: uppercase;
}
.anthology-item-description {
  font-size: 1rem;
  line-height: 1.5em;
  margin: (5rem/16) 0 (15rem/16) 0;
}
@media (min-width: $viewport-small) {
  .anthology-item {
    max-width: 30rem;
    margin-right: auto;
    margin-left: auto;
    .cta-link {
      max-width: 20rem;
      margin-right: auto;
      margin-left: auto;
    }
  }
}
@media (min-width: $viewport-medium) {
  .anthology-item-type {
    color: inherit;
  }
  .anthology-item {
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
    .cta-link.cta-link--white {
      background-color: var(--white);
      opacity: .85;
      margin-right: 0;
      margin-left: 0;
    }
  }
  .anthology-item-content {
    display: flex;
      flex-direction: column;
      flex-basis: 100%;
    max-width: 30rem;
    margin-right: auto;
    margin-left: auto;
    width: 50%;
  }
  .anthology-item-description {
    font-size: (18rem/16);
    flex-basis: 100%;
  }
}
</style>

