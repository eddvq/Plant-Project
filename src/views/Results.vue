<template lang="html">
  <Header>
    <template v-slot:headerSlot>Check ou the different plants we found:</template>
  </Header>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Results',
  components: {
    Header
  }
}
</script>
