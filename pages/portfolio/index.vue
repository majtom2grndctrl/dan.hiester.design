<template>
  <div>
    <section class="project project--inroads">
      <header class="hero">
        <h1>inRoads</h1>
        <div class="hero-image">
          <img src="https://distantly-yours-blog.cdn.prismic.io/distantly-yours-blog/398418c1a3fcf707f6953f0cfb7388e9b9d3c818_inroads-hero2x.jpg" alt="inRoads responsive design on an iMac and Android phone" />
        </div>
        <p>An award-winning web application that doesn’t just make it easier for the public to know when roads will close—it makes it possible for the public to see closings in the app they already&nbsp;use.</p>
        <h2 class="inroads-mobile-teaser">One&nbsp;project. Two&nbsp;stories.</h2>
      </header>
      <div class="caseStudy-collection">
        <div class="caseStudy-item">
          <div class="caseStudy-content">
            <h3 class="caseStudy-type">UI Case Study</h3>
            <div class="caseStudy-description">My team thought a responsive map app was impossible—until we were tweet-shamed for not doing&nbsp;it.</div>
            <cta-link to="/portfolio/inroads-ui">How I made it possible</cta-link>
          </div>
        </div>
        <div class="caseStudy-item">
          <div class="caseStudy-content">
            <h3 class="caseStudy-type">UX Case Study</h3>
            <div class="caseStudy-description">Before inRoads, collecting and publishing road closing information was overwhelming for one&nbsp;employee.</div>
            <cta-link to="/portfolio/inroads-ux">How we rescued Fridays</cta-link>
          </div>
        </div>
      </div>
    </section>
    <contact-cta />
  </div>
</template>


<script>
import { swipeTransition } from "~/components/layout/MainLayout"
import CtaLink from "~/components/buttons/CtaLink"
import ContactCta from '~/components/ContactCta.vue'

export default {
  transition(to, from) {
    return swipeTransition(to, from);
  },
  components: {
    CtaLink,
    ContactCta
  }
}
</script>


<style lang="scss" scoped>
.project {
  background: var(--bg-blue-400);
  box-sizing: border-box;
  color: var(--white);
  padding: 0 (20rem/16);
}
.hero {
  display: flex;
  flex-direction: column;
  h1, .inroads-mobile-teaser {
    color: var(--white);
    font-size: (30rem/16);
    font-weight: 400;
    line-height: (38em/30);
    margin: (35em/30) 0 (20em/30) 0;
    text-align: center;
  }
  p {
    font-size: 1rem;
    line-height: (24em/16);
  }
}
.hero-image {
  margin: 0 15%;
  > img {
    width: 100%;
  }
}
@media (min-width: $viewport-small) {
  .hero {
    max-width: 30rem;
    margin-right: auto;
    margin-left: auto;
  }
}
@media (min-width: $viewport-medium) {
  .project {
    margin: 2rem 0;
    padding: 0;
  }
  .project--inroads {
    .hero {
      display: flex;
      justify-content: center;
      h1 {
        font-size: (48rem/16);
        margin: .5em 0 0 0;
      }
    }
  }
  .inroads-mobile-teaser {
    display: none;
  }  
  .hero {
    height: 25.5rem;
    overflow: hidden;
    padding: 0 60% 0 13%;
    position: relative;
    h1 {
      text-align: left; 
    }
  }
  .hero-image {
    margin: 0;
    position: absolute;
      top: 1rem;
      right: (100% * 1/12);
    width: (100% * 5.5/12);
  }
}
@media (min-width: $viewport-large) {
}

.caseStudy-collection {
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
}
.caseStudy-item {
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
.caseStudy-type {
  color: var(--gray-600);
  font-size: (14rem/16);
  font-weight: 500;
  line-height: 1em;
  margin: 0 0 (5rem/16) 0;
  text-transform: uppercase;
}
.caseStudy-description {
  font-size: 1rem;
  line-height: 1.5em;
  margin: (5rem/16) 0 (15rem/16) 0;
}
@media (min-width: $viewport-small) {
  .caseStudy-item {
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
  .caseStudy-collection {
    flex-direction: row;
    padding-bottom: 0;
  }
  .caseStudy-type {
    color: inherit;
  }
  .caseStudy-item {
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
  .caseStudy-content {
    display: flex;
      flex-direction: column;
      flex-basis: 100%;
    max-width: 30rem;
    margin-right: auto;
    margin-left: auto;
    width: 50%;
  }
  .caseStudy-description {
    font-size: (18rem/16);
    flex-basis: 100%;
  }
}
@media (min-width: $viewport-large) {

}
</style>
