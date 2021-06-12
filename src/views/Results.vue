<template lang="html">
  <Header>
    <template v-slot:headerSlot>This is what we were able to find for "{{newString}}" </template>
  </Header>
  <p>Data is recieved through the <a href="https://github.com/Growstuff/growstuff/wiki/API">GrowStuff API</a></p>
  <p @click="getData">CLICK HERE</p>


</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Results',
  data() {
    return {
      submitted: this.$route.params.uSearch,
      newString: this.$route.params.uSearch,
      growLink: 'https://www.growstuff.org/crops/search.json?term=',
      list: []
    }
  },
  components: {
    Header
  },
  methods: {




    getData(){

      // fetch('https://jsonplaceholder.typicode.com/posts')
      // console.log(this.growLink.concat(this.submitted))


      fetch('https://www.growstuff.org/api/v1/crops/301')

      .then(response => {
        console.log(response)
        return response.json()
      })
      .then((json) => {
        console.log(json)
      })
    }





    // Removes the plus so that it looks human readable on the page
    // plusRemover(){
    //   console.log(this.submitted)
    //   for (let i = 0; i < this.newString.length; i++){
    //     this.newString = this.submitted.replace('+', ' ');
    //     console.log(this.newString)
    //   }
    // }
  }
}
</script>
