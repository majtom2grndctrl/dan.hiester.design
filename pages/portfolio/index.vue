<template>
  <div>
    Project 1 | Project 2 | Project 3
  </div>
</template>


<script>
import { swipeTransition } from '~/components/layout/MainLayout'

export default {
  transition(to, from) {
    return swipeTransition(to, from)
  }
}
</script>
