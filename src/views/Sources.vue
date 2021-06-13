<template lang="html">
  <Header>
    <template v-slot:headerSlot>Major thanks to the resources below for helping make this project work and look snazzy!</template>
  </Header>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Sources',
  components: {
    Header
  }
}
</script>
