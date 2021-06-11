<template lang="html">
  <Header>
    <template v-slot:headerSlot>This is what we were able to find for "{{$route.params.uSearch}}" </template>
  </Header>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Results',
  data() {
    return {
      // submitted: $route.params.uSearch,
    }
  },
  components: {
    Header
  }
}
</script>


<!-- You were able to figure out how to pass in the data to a new page. Now you have to find a way to pull the
infomration to make sure it populates... eeek.  Maybe a component that sifts though the JSON seperately and pupulate here? -->
