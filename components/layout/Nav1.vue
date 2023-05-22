<template>
  <nav class="Nav1">
    <NuxtLink :to="paths.portfolio">Portfolio</NuxtLink>
    <NuxtLink :to="paths.blog">Blog</NuxtLink>
    <NuxtLink :to="paths.about" exact>About</NuxtLink>
  </nav>
</template>

<script lang="ts" setup>
import paths from '~/paths';

</script>

<style lang="postcss" scoped>
.Nav1 {
  background: var(--white);
  box-shadow: rgba(0, 0, 0, .3) 0 0 10px;
  display: flex;
    flex-direction: row;
    flex-basis: 100%;
    justify-content: center;
  opacity: 1;
  padding: var(--spatial-scale-4);
  position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
  transform: translate3d(0, 0, 0);
  transition: transform .2s ease-in, opacity .175s linear;
  &:not(.tier-1) {
    opacity: .25;
    transform: translate3d(0, 100%, 0);
  }
  & > a {
    background-color: var(--link-bg-inactive);
    border-radius: var(--spatial-scale-00);
    color: #97A3A7;
    display: flex;
      align-items: center;
      justify-content: center;
    flex-basis: 20%;
    font-size: var(--type-scale-0);
    font-weight: 500;
    font-family: var(--font-heading);
    line-height: var(--spatial-scale-0);
    min-width: 20%;
    margin: calc(var(--spatial-scale-1) * -1) var(--spatial-scale-00);
    padding: var(--spatial-scale-1);
    position: relative;
    text-decoration: none;
    transition: color .66s, background-color .66s;
    &:after {
      background: var(--bg-blue-600);
      border-radius: 100%;
      content: '';
      display: block;
      height: calc(3.5rem/16);
      opacity: 0;
      position: absolute;
        top: 90%;
        left: 49%;
      transition: opacity .66s, background-color .4s;
      width: calc(3.5rem/16);
    }
    &.active {
      color: var(--bg-blue-600);
      &:after {
        opacity: 1;
      }
    }
    &:hover {
      background-color: var(--link-bg-active);
      color: var(--gray-400);
    }
  }
}
@media (--viewport-small) {
  .Nav1 {
    box-shadow: none;
    position: static;
    justify-content: flex-end;
    padding: 0;
    transition: none;
    transform: none;
    &:not(.teir-1) {
      display: inherit;
      opacity: 1;
      transition: none;
      transform: none;
    }
    & > a {
      flex-basis: unset;
      font-weight: 400;
      font-family: var(--font-body);
      justify-content: unset;
      min-width: unset;
      margin: calc(var(--spatial-scale-1) * -1) calc(var(--spatial-scale-1) * -1) calc(var(--spatial-scale-1) * -1) var(--spatial-scale-1);
    }
  }
  .ContentLayout + .Nav1.nav1 {
    display: none;
  }
}
@media (--viewport-medium) {
  .Nav1 {
    margin-right: 0;
    & > a {
      font-size: var(--type-scale-0);
    }
  }
}

</style>
