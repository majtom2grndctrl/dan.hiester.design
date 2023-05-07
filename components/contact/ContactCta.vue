<template>
  <div class="ContactCta-wrapper">
    <section class="ContactCta">
      <div class="image-container">
        <img class="image-mobile" src="/img/project-collage-tablet.jpg" alt="" />
        <img class="image-desktop" src="/img/project-collage-desktop.jpg" alt="" />
      </div>
      <div class="content">
        <h1 class="title">There’s so much more to talk&nbsp;about!</h1>
        <p>I’ve worked on many different teams and challenges. Some of that work hasn’t been published here yet&mdash;<strong>much of it can’t be</strong>. The&nbsp;best way to get to know what I have to offer is to talk shop over&nbsp;coffee.</p>
        <CtaLink class="cta" :href="ctaTarget">Let’s get in touch</CtaLink>
      </div>
    </section>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import CtaLink from '~/components/buttons/CtaLink.vue'

interface ComponentData {
  ctaTarget: null | string
}

const oblada = {
  la: 'attle@hies',
  ob: 'coffee-in-se',
  di: 'ter.design',
};

const ContactCta = defineComponent<{}, ComponentData>({
  components: {
    CtaLink
  },
  data: function() {
    return {
      ctaTarget: null,
    };
  },
  created () {
    // This helps me hide things from bots
    setTimeout(() => {
      const { ob, la, di } = oblada // Life goes on 🎶
      this.$data.ctaTarget = `mailto:${ob + la + di}`;
    }, 3500);
  }
});

export default ContactCta
</script>


<style lang="postcss" scoped>
.ContactCta-wrapper {
  padding: 0 var(--mobile-block-margin);
}
.ContactCta {
  background: #486172;
  border-radius: var(--block-border-radius);
  box-sizing: border-box;
  color: var(--white);
  overflow: hidden;
  margin: 0 auto var(--spatial-scale-3);
  max-width: 30rem;
  padding: 0 0 var(--spatial-scale-6) 0;
}
.image-mobile {
  width: 100%;
}
.image-desktop {
  display: none;
}
.content {
  margin: 0 var(--spatial-scale-3);
  padding: 0;
  overflow: hidden;
  & > .title {
    font-weight: 400;
    font-size: var(--type-scale-3);
    line-height: var(--spatial-scale-7);
    margin: 1em 0 var(--spatial-scale-1);
  }
  & > p {
    font-size: var(--type-scale-1);
    line-height: var(--spatial-scale-6);
    margin: var(--spatial-scale-1) 0 var(--spatial-scale-3);
  }
}
.cta {
  max-width: 20rem;
  margin: var(--spatial-scale-4) auto 0;
}

@media (--viewport-medium) {
  .ContactCta-wrapper {
    padding: unset;
  }
  .ContactCta {
    display: flex;
      flex-direction: row;
      align-items: center;
      justify-items: center;
    margin: calc(1 / 12 * 100%) 0;
    max-width: unset;
    overflow: hidden;
    padding: 1rem 0;
  }
  .content {
    flex-basis: 50%;
    margin: 0;
    & > .title, & > p, & > .cta {
      max-width: 66%;
      margin-right: auto;
      margin-left: auto;
    }
    & > .title {
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-6);
      margin-top: 0;
      margin-bottom: var(--spatial-scale-1);
      text-align: left;
    }
    & > p {
      font-size: var(--type-scale-0);
      line-height: var(--spatial-scale-4);
      margin-bottom: var(--spatial-scale-2);
    }
  }
  .cta {
    margin-bottom: 0;
  }
  .image-container {
    flex-basis: 50%;
  }
  .image-mobile {
    display: none;
  }
  .image-desktop {
    display: block;
    width: 100%;
  }
}
</style>

