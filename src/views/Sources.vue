<template lang="html">
  <Header>
    <template v-slot:headerSlot>This tool was made possible with the help of the following tools and resources below:</template>
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
