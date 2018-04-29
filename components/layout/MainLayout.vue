<template>
  <main class="container">
    <header class="t1-header">
      <h1 class="t1-title"><slot name="section-title"/></h1>
      <nav class="t1-nav"><slot name="section-navigation"/></nav>
    </header>
    <slot/>
  </main>
</template>


<script>
export default {

}
export function swipeTransition(to, from) {
  if (!from) {
    return {
      name: 'swipe'
    }
  } else if (from.path === '/') {
    return {
      name: 'home',
      mode: 'in-out'
    }
  } else if (to.path === '/') {
    return {
      name: 'fade'
    }
  }
   else {
    return {
      name: 'swipe'
    }
  }
}
</script>


<style lang="scss" scoped>
.t1-header {
  display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
  @media (min-width: $viewport-small) {
    justify-content: flex-start;
  }
}
.t1-title {
  font-size: (36rem/16);
  letter-spacing: -.0125em;
  line-height: .9em;
  margin: 0;
  @media (min-width: $viewport-small) {
    font-size: (64rem/16);
    margin: 0 (48rem/16) 0 (-5rem/16);
  }
}
.t1-nav {
  > a {
    color: #97A3A7;
    text-decoration: none;
    @media (min-width: $viewport-small) {
      margin: 0 (48rem/16) 0 0;
    }
  }
}
main.container {
  margin: 0 (20rem/16);
  @media (min-width: $viewport-medium) {
    margin: 0 auto;
    width: (100% * 12 / 14);
  }
}
</style>
