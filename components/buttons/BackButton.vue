<template>
  <NuxtLink :to="to" class="BackButton">
    <svg class="icon" viewBox="0 0 7 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Mobile" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Mobile-Back-Comp-Copy" transform="translate(-19.000000, -14.000000)" fill="#03A1D5" fill-rule="nonzero">
          <polygon id="back-chevron-bold" points="23.0384151 23 19 18.5 22.9668445 14 25.5149832 14 21.5070309 18.5 25.5149832 23"></polygon>
        </g>
      </g>
    </svg>
    <span class="label">
      <slot />
    </span>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

const BackButton = Vue.extend({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
});

export default BackButton;
</script>

<style lang="postcss" scoped>
  .BackButton {
    box-sizing: content-box;
    border-radius: .5em;
    display: flex;
      align-items: center;
    font-weight: 500;
    font-family: var(--font-body);
    font-size: 1rem;
    height: var(--spatial-scale-1);
    padding: var(--spatial-scale-00);
    text-align: center;
    text-decoration: none;
    transition: opacity .33s;
    background: #fff;
  }
  .icon {
    display: block;
    margin: .125em var(--spatial-scale-00) 0 0;
    height: var(--spatial-scale-1);
  }
  .label {
    display: block;
    font-size: var(--type-scale-1);
    line-height: var(--spatial-scale-1);
  }
</style>
