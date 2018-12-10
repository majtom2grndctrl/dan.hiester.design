<template>
  <section class="project project--inroads">
    <header class="hero">
      <h1>inRoads</h1>
      <div class="hero-image">
        <img src="https://distantly-yours-blog.cdn.prismic.io/distantly-yours-blog/398418c1a3fcf707f6953f0cfb7388e9b9d3c818_inroads-hero2x.jpg" alt="inRoads responsive design on an iMac and Android phone" />
      </div>
      <p>An award-winning web application that doesn’t just make it easier for the public to know when roads will close—it makes it possible for the public to see closings in the app they already use.</p>
      <h2 class="inroads-mobile-teaser">One&nbsp;product. Two&nbsp;stories.</h2>
    </header>
    <div class="caseStudy-collection">
      <div class="caseStudy-item">
        <h3 class="caseStudy-type">UI Case Study</h3>
        <div calss="caseStudy-description">How I re-imagined an app in progress, and built a UI the team thought impossible, without a total rewrite.</div>
        <cta-link to="/portfolio/inroads-ui">Designing the UI</cta-link>
      </div>
      <div class="caseStudy-item">
        <h3 class="caseStudy-type">UX Case Study</h3>
        <div calss="caseStudy-description">Before inRoads, collecting and publishing road closing information was arduous work for one employee.</div>
        <cta-link to="/portfolio/inroads-ux">How we rescued Fridays</cta-link>
      </div>
    </div>
  </section>
</template>


<script>
import { swipeTransition } from "~/components/layout/MainLayout"
import CtaLink from "~/components/buttons/CtaLink"
export default {
  transition(to, from) {
    return swipeTransition(to, from);
  },
  components: {
    CtaLink
  }
}
</script>


<style lang="scss" scoped>
.project {
  background: $bg-blue-400;
  box-sizing: border-box;
  color: #fff;
  padding: 0 (20rem/16);
}
.hero {
  display: flex;
  flex-direction: column;
  h1, .inroads-mobile-teaser {
    color: #fff;
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
@media (min-width: $viewport-medium) {
  .inroads-mobile-teaser {
    display: none;
  }  
  .hero {
    height: 30rem;
    overflow: hidden;
    padding: 0 (100% * 1/12);
    position: relative;
    h1 {
      text-align: left; 
    }
  }
  .hero-image {
    margin: 0;
    position: absolute;
      top: 2rem;
      right: (100% * 1/12);
    width: (100% * 6/12);
  }
}
@media (min-width: $viewport-large) {
}

.caseStudy-collection {
  display: flex;
  flex-direction: column;
}
.caseStudy-item {
  margin: (35rem/16) 0;
  &:first-of-type {
    margin-top: (15rem/16);
  }
  .cta-link {
    background: rgba(255, 255, 255, .85);
    color: #004055;
    font-weight: 500;
    font-family: $font-heading;
    text-align: center;
  }
}
.caseStudy-type {
  font-size: (14rem/16);
  line-height: 1em;
  margin: 0 0 (5rem/16) 0;
  text-transform: uppercase;
}
@media (min-width: $viewport-medium) {
  .caseStudy-collection {
    flex-direction: row;
  }
  .caseStudy-item {
    padding: 0 (100% * 1/12);
    margin: 3rem 0;
    &:first-of-type {
      margin-top: 3rem;
    }
  }
}
@media (min-width: $viewport-large) {

}
</style>
