<template>
  <section>
    <h2>UX</h2>
    UX Project 1 | UX Project 2
  </section>
</template>

<script>
import { swipeTransition } from '~/components/layout/MainLayout'

export default {
  transition(to, from) {
    return swipeTransition(to, from)
  }
}
</script>
