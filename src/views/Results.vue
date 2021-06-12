<template lang="html">
  <div class="Search">
    <h2 class="Search__h2">Ready to meet your matches?</h2>
      <div class="Search__button" v-on:click="getData()">
        <span>Yes!</span>
        <i class="fas fa-seedling"></i>
      </div>
      <p>Data is recieved through the <a href="https://github.com/Growstuff/growstuff/wiki/API">GrowStuff API</a></p>
  </div>
  <!-- <SearchTiles.vue/> -->
  <!-- <div class="Gallery">
    <div class="Gallery__case">
      <img class="Gallery__case__image" src="https://images.unsplash.com/photo-1601326106034-cd0d601458a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80">
      <h3 class="Gallery__case__h3">blah</h3>
      <p class="Gallery__case__p">blah</p>
    </div>
  </div> -->
  <div class="Gallery">
    <div class="Gallery__case">
      <img class="Gallery__case__image">
      <h3 class="Gallery__case__h3">blah</h3>
      <p class="Gallery__case__p">blah</p>
    </div>
  </div>



  </template>



<script>
import SearchTiles from '@/components/SearchTiles.vue'


export default {
  name: 'Results',
  data(){
    return {
      list: []
    }
  },
  components: {
    SearchTiles,
  },
  mounted(){
      fetch('https://www.growstuff.org/api/v1/crops/301?include=photos')
      .then(response => {
        if(response.ok){
          console.log(response)
          return response.json()
        } else {
          throw new Error("Request has failed")
        }

      })
      .then((json) => {
        this.list = json
        console.log(this.list.included[0].attributes['thumbnail-url'])
        console.log(this.list.data.attributes.name)
        console.log(this.list.data.attributes['en-wikipedia-url'])

      })
      .catch(err => {
        console.log("ERROR", err)
      })
  },
  methods: {
    getData(){
      fetch('https://www.growstuff.org/api/v1/crops/301?include=photos')
      .then(response => {
        if(response.ok){
          // console.log(response)
          return response.json()
        } else {
          throw new Error("Request has failed")
        }

      })
      .then((json) => {
        this.list = json
        // console.log(this.list)
      })
      .catch(err => {
        console.log("ERROR", err)
      })
    }
  }
}
</script>



<!-- </template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Results',
  data() {
    return {
      list: []
    }
  },
  components: {
    Header
  },
  methods: {

    getData(){

      fetch('https://www.growstuff.org/api/v1/crops/301?include=photos')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then((json) => {
        console.log(json)
      })
    }
  }
}
</script> -->


<style lang="scss">

@import "../scss/_variables.scss";


  .Search__button{
    cursor: pointer;
  }

  .Gallery {
      padding: 1.5rem;
      border-bottom: 4px solid $pebble;
      @media only screen and (min-width: 768px) {border-bottom: none;}


      &__case {
          display: flex;
          flex-direction: column;
          &__image {
              width: 100%;
              margin-top: 1rem;
          }
          &__h3 {
              font-family: 'Aleo', serif;
              color: $boulder;
              margin-bottom: 0.75rem;
              text-decoration: underline;
              text-decoration-color: $arbory;
          }
          &__p {
              font-family: 'Aleo', serif;
              margin: 0;
          }
      }
  }









</style>
