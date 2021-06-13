<template lang="html">
  <div class="Search">
    <h2 class="Search__h2">Learn about a random crop!</h2>
      <div class="Search__button" v-on:click="getData()">
        <span>Let's go!</span>
        <i class="fas fa-seedling"></i>
      </div>
      <p>Data is recieved through the <a href="https://github.com/Growstuff/growstuff/wiki/API">GrowStuff API</a></p>
  </div>
  <!-- <SearchTiles.vue/> -->

  <!-- <div class="Gallery">
    <div class="Gallery__case">
      <img class="Gallery__case__image">
      <h3 class="Gallery__case__h3">Plant name</h3>
      <a class="Gallery__case__p">Learn more</a>
    </div>
  </div> -->

  <!-- So the thing works if and only if you turn off and on the toggle after it loads. GO HERE -->
<!-- THIS TUTORIAL https://www.youtube.com/watch?v=Qypxpm-llnQ -->

  <div class="Gallery" v-if="list.data">
    <div class="Gallery__case">
      <h3 class="Gallery__case__h3">{{this.list.data.attributes.name}}</h3>
      <a class="Gallery__case__p" v-bind:href="this.list.data.attributes['en-wikipedia-url']">Learn more</a>
    </div>
  </div>

  <!-- <SearchTiles v-bind:lists="lists"/> -->

  </template>



<script>
import SearchTiles from '@/components/SearchTiles.vue'


export default {
  name: 'Results',
  data(){
    return {
      list: [],
      apiLink: ""
    }
  },
  components: {
    SearchTiles,
  },
  mounted(){
    let plantNum = Math.floor(Math.random() * 330);
    let apiLink = `https://www.growstuff.org/api/v1/crops/${plantNum}`;
    console.log(apiLink)
    fetch(apiLink)
    .then(response => {
        return response.json()
    })
    .then((json) => {
      this.list = json
      console.log(this.list)
      console.log(this.list.data.attributes.name)
      console.log(this.list.data.attributes['en-wikipedia-url'])
      console.log(this.list)
    })
    .catch(err => {
      console.log("ERROR", err)
    })
  },
  methods: {
    getData(){
      // fetch('https://www.growstuff.org/api/v1/crops/301?include=photos')
      let plantNum = Math.floor(Math.random() * 330);
      let apiLink = `https://www.growstuff.org/api/v1/crops/${plantNum}`;
      console.log(apiLink)
      fetch(apiLink)
      .then(response => {
          return response.json()
      })
      .then((json) => {
        this.list = json
        console.log(this.list.data.attributes.name)
        console.log(this.list.data.attributes['en-wikipedia-url'])
      })
      .catch(err => {
        console.log("ERROR", err)
      })
    }
    // randomNumber(){
    //   let plantNum = Math.floor(Math.random() * 330);
    //   apiLink= `'https://www.growstuff.org/api/v1/crops/' ${plantNUm} '?include=photos'`;
    //   console.log(apiLink)
    // }
  }
}
</script>


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
