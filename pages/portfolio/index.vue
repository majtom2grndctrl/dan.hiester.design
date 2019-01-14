<template>
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
          <div class="caseStudy-description">My team thought a responsive map app was impossible—until we were tweet-shamed for not doing it.</div>
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
}
.caseStudy-item {
  margin: (35rem/16) 0;
  &:first-of-type {
    margin-top: (15rem/16);
  }
  .cta-link {
    background: #fff;
    color: #406A79;
    font-weight: 500;
    font-family: $font-heading;
    opacity: .85;
    text-align: center;
  }
}
.caseStudy-type {
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
    .cta-link {
      max-width: 15rem;
      margin-right: auto;
      margin-left: auto;
    }
  }
  .caseStudy-content {
    max-width: 30rem;
    margin-right: auto;
    margin-left: auto;
  }
}
@media (min-width: $viewport-medium) {
  .caseStudy-collection {
    flex-direction: row;
  }
  .caseStudy-item {
    box-sizing: border-box;
    display: flex;
      flex-direction: column;
      flex-basis: 50%;
    padding: 4rem 0 4.25rem 0;
    margin: 0;
    &:first-of-type {
      margin-top: 0;
    }
    &:nth-child(2n+1) {
      background: $bg-blue-600;
    }
    &:nth-child(2n) {
      background: $bg-blue-200;
    }
    .cta-link {
      margin-right: 0;
      margin-left: 0;
    }
  }
  .caseStudy-content {
    display: flex;
      flex-direction: column;
      flex-basis: 100%;
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
