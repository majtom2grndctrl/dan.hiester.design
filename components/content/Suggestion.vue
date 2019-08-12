<template>
  <section class="Suggestion">
    <div class="content">
      <block-type class="type">{{ data.type }}</block-type>
      <h2 class="title">{{ data.title }}</h2>
      <cta-link :to="data.ctaHref" class="cta" v-html="data.ctaLabel" />
      <div v-if="data.altCta" class="altCta-container">
        <nuxt-link :to="data.altCta.href" class="altCta">{{ data.altCta.label }}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import CtaLink from '~/components/buttons/CtaLink.vue';
import BlockType from '~/components/text/BlockType.vue';

export interface SuggestionProps {
  type: string
  title: string
  ctaLabel: string
  ctaHref: string
  altCta?: {
    label: string
    href: string
  }
}

@Component({
  components: {
    BlockType,
    CtaLink
  }
})
class Suggestion extends Vue {
  @Prop()
  data!: SuggestionProps
}

export default Suggestion
</script>

<style lang="postcss" scoped>
  .Suggestion {
    background: var(--bg-blue-400);
    color: var(--white);
  }
  .content {
    max-width: 30rem;
    margin: 0 auto;
    padding: var(--spatial-scale-4) var(--spatial-scale-2);
  }
  .title {
    font-size: var(--type-scale-3);
    line-height: 1.375em;
  }
  .cta {
    margin: var(--spatial-scale-2) auto var(--spatial-scale-1);
    max-width: 20em;
  }
  .altCta-container {
    text-align: center;
  }
  .altCta {
    background: rgba(255, 255, 255, 0);
    border-radius: .5em;
    color: var(--white);
    display: inline-block;
    mix-blend-mode: hard-light;
    opacity: .8;
    padding: .5em 1em;
    text-decoration: none;
    transition: background-color .3s linear;
    &:active, &:focus {
      background: rgba(255, 255, 255, .25);
    }
  }
  @media (--viewport-medium) {
    .Suggestion {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .content {
      padding: calc(30rem/16);
    }
    .title {
      font-size: calc(26rem/16);
      line-height: calc(32em/26);
    }
    .altCta {
      color: var(--white);
      font-size: var(--type-scale-0);
    }

  }
</style>
