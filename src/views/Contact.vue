<template lang="html">
  <Header>
    <template v-slot:headerSlot>Thank you for using this search tool. I'm learning more about code and would appreciate feedback to make this tool better.</template>
  </Header>
  
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Contact',
  components: {
    Header
  }
}
</script>
