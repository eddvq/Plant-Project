<template lang="html">
  <Header>
    <template v-slot:headerSlot>This is where a blurb about the page will be.</template>
  </Header>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'About',
  components: {
    Header
  }
}
</script>
