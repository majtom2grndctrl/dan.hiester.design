<template>
  <main class="About">
    <div class="container">
      <div>
        <h1 class="intro">
          <span class="dan-hiester">About Dan Hiester</span>
        </h1>
        <p>(This page is a work in progress—just like we all are.)</p>
        <section class="overview">
          <p>I design things that live in screens, but make impacts <em>beyond</em> the screen. By leveraging technical skills and strategic thinking, I help digital product teams level up both the “what” and the “why” of a product’s design.</p>
          <p>My diverse range of experiences, ranging from startups and boutique agencies to government and a multinational corporation, give me a deep perspective on how different teams work.</p>
        </section>
        <section class="content">
          <h2>My philosophy on work</h2>
          <p>I’m a results-oriented thinker. The best rationale for a design decision places outcomes over principles.</p>
          <p>A good process establishes shared expectations for how teammates contribute, and set up their teammates (or future selves) for success.</p>
          <p>I follow process when it enables a teammate to fulfill their role. I’m skeptical of process for process’s sake, but sometimes I find that when we don’t understand our process, it’s because we don’t appreciate a teammate’s <span class="no-widow">role yet.</span></p>
          <p>Great results shouldn’t come from following a rote process—they should come from the team playing to each others’ strengths, and dynamically adapting to unforeseen challenges during development.</p>
          <h2>On the role of design</h2>
          <p>As a designer who studied visual communications, I understand that the act of seeing has a powerful impact on thinking and decision making. A team can talk about an idea, but they can never be sure they share the same idea until the idea is seen. I’m at my best when I help the team see and understand the best ideas in the room.</p>
          <p>Although I enjoy applying my knowledge about visual design fundamentals, I’m not interested in pursuing these at the expense of honing the product’s purpose. To paraphrase a quote from <i>Halt and Catch Fire</i>: “Mockups aren’t the thing. They’re the thing that gets us to the thing.”</p>
        </section>
        <nav class="nav">
          <span class="nav-label">Next:</span>
          <nuxt-link :to="paths.portfolio">Portfolio</nuxt-link>
          <nuxt-link :to="paths.blog">Blog</nuxt-link>
        </nav>
        <!--
        <div class="overview">
          <p>I’m an experienced UI and UX generalist who loves to practice design thinking and product strategy both at the office, and at community events.</p>
        </div>
        <p>Next: <nuxt-link :to="paths.portfolio">Portfolio</nuxt-link></p>
        -->
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import paths from '~/paths';
</script>

<style lang="postcss" scoped>

.About {
  color: var(--gray-400);
  display: grid;
  grid-gap: var(--spatial-scale-1);
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  min-height: 100vh;
}
.container {
  display: flex;
    flex-direction: column;
    justify-content: center;
  grid-area: 1 / 2 / 2 / 6;
}
.nav {
  font-size: var(--type-scale-1);
  line-height: var(--spatial-scale-1);
  margin: var(--spatial-scale-4) 0 var(--spatial-scale-10); 
  & a {
    display: inline-block;
    margin-left: var(--spatial-scale-3);
  }
}
.overview {
  font-size: var(--type-scale-2);
  line-height: var(--spatial-scale-6);
}
.content {
  font-size: var(--type-scale-1);
  line-height: var(--spatial-scale-5);
  & > h2 {
    font-size: var(--type-scale-3);
    line-height: var(--spatial-scale-7);
    margin: var(--spatial-scale-7) 0 var(--spatial-scale-3);
  }
}

@media(--viewport-small) {
  .About {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .container {
    grid-area: 1 / 2 / 2 / 8;
  }
}
@media(--viewport-medium) {
  .About {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .container {
    grid-area: 1 / 4/ 2 / 11;
  }
}
.intro {
  font-family: var(--font-body);
  font-size: var(--type-scale-4);
  line-height: var(--spatial-scale-4);
  margin: var(--spatial-scale-10) 0 var(--spatial-scale-3);
}
.dan-hiester {
  font-family: var(--font-heading);
  font-size: var(--type-scale-4);
  font-weight: 500;
  line-height: var(--spatial-scale-4);
  margin: 0 0 var(--spatial-scale-0) -.055em;
}
.no-widow {
  white-space: nowrap;
}

</style>
