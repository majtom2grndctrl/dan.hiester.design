<!-- Splash page -->

<template>
  <main class="Splash">
    <h1>Is this thing on?</h1>
  </main>
</template>


<style lang="postcss">
  @custom-media --viewport-small (min-width: 31.25rem); /* 500 / 16 */
  @custom-media --viewport-medium (min-width: 51.25rem); /* 820 / 16 */
  @custom-media --viewport-large (min-width: 81.25rem); /* 1300 / 16 */
</style>


<style lang="postcss" scoped>

/*
Page transitions
****************************/

.splash-nav-enter-active, .splash-nav-leave-active {
  transition: background-color var(--mobile-nav-transition-duration); /* background-color is just there to trigger the transition timing. */
  & .modal-overlay, & .mobile-nav-links {
    transition: opacity calc(var(--mobile-nav-transition-duration) * 2/3) ease-in-out, transform calc(var(--mobile-nav-transition-duration) * 2/3);
  }
}
.splash-nav-enter, .splash-nav-leave-to {
  & > .modal-overlay, & > .mobile-nav-links {
    opacity: 0;
  }
  & > .mobile-nav-links {
    transform: perspective(10em) translate3d(-70%, 20%, -5em);
  }
}
</style>
