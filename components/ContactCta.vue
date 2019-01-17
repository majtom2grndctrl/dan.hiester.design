<template>
  <section class="contact-cta">
    <div class="contact-cta-image-container">
      <img class="contact-cta-image-mobile" src="/img/project-collage-tablet.jpg" alt="" />
      <img class="contact-cta-image-desktop" src="/img/project-collage-desktop.jpg" alt="" />
    </div>
    <div class="contact-cta-content">
      <h1>There’s so much more to talk&nbsp;about!</h1>
      <p>I’ve worked on many different teams and challenges. Some of that work hasn’t been published here yet&mdash;<strong>much of it can’t be</strong>. The best way to get to know what I have to offer is to talk shop over coffee.</p>
      <cta-link href="https://www.linkedin.com/in/danhiester" variant="white">Contact me on LinkedIn</cta-link>
    </div>
  </section>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import CtaLink from '~/components/buttons/CtaLink.vue'

@Component({
  components: {
    CtaLink
  }
})
export default class ContactCta extends Vue {}
</script>


<style lang="scss" scoped>
.contact-cta {
  background: #486172;
  color: $white;
  padding: 0 0 2rem 0;
  &-image {
    &-mobile {
      width: 100%;
    }
    &-desktop {
      display: none;
    }
  }
  &-content {
    margin: 0 1rem;
    padding: 0;
    overflow: hidden;
    > h1 {
      font-weight: 400;
      font-size: (30rem/16);
      line-height: (38rem/16);
      margin: 1em 0 .25em;
    }
    > p {
      font-size: 1rem;
      line-height: 1.5rem;
      margin: .5em 0 1.5em;
    }
  }
  @media (min-width: $viewport-small) {
    &-content {
      margin: 0 auto;
      max-width: 30rem;
      > h1 {
        margin-bottom: .5em;
        text-align: center;
      }
    }
    .cta-link {
      max-width: 20rem;
      margin-right: auto;
      margin-left: auto;
    }
  }
  @media (min-width: $viewport-medium) {
    display: flex;
      flex-direction: row;
      align-items: center;
      justify-items: center;
    margin: 4rem 0;
    padding: 1rem 0;
    &-content {
      flex-basis: 47%;
      padding-right: 1.5rem;
      > h1, > p, > .cta-link {
        max-width: 22rem;
        margin-right: auto;
        margin-left: auto;
      }
      > h1 {
        font-size: (36rem/16);
        line-height: (50em/36);
        margin-top: 0;
        text-align: left;
      }
      > p {
        font-size: (18rem/16);
        line-height: (28rem/16);
      }
    }
    &-image {
      &-container {
        flex-basis: 53%;
      }
      &-mobile {
        display: none;
      }
      &-desktop {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>

