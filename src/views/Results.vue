<template lang="html">
  <div class="Results" v-if="list.data">
    <div class="Results__case">
      <h3 class="Results__case__h3">{{this.list.data.attributes.name}}</h3>
      <p class="Results__case__p" v-if="list.data.attributes.perennial">This planet is perennial!</p>
      <p class="Results__case__p" v-else>This plant is not perennial.</p>
      <a class="Results__case__link" v-bind:href="this.list.data.attributes['en-wikipedia-url']">Learn more on Wikipedia</a>
      <p class="Results__case__legal">Data is recieved through the <a href="https://github.com/Growstuff/growstuff/wiki/API">GrowStuff API</a></p>
    </div>
  </div>
  <div class="Search">
    <h2 class="Search__h2">Learn about another random crop!</h2>
      <div class="Search__button" v-on:click="getData()">
        <span>Show me!</span>
        <i class="fas fa-seedling"></i>
      </div>
  </div>

  <!-- <div class="Gallery" v-if="list.data">
    <div class="Gallery__case">
      <h3 class="Gallery__case__h3">{{this.list.data.attributes.name}}</h3>
      <p v-if="list.data.attributes.perennial">This planet is perennial!</p>
      <p v-else>This plant is not perennial.</p>
      <a class="Gallery__case__p" v-bind:href="this.list.data.attributes['en-wikipedia-url']">Learn more</a>
    </div>
  </div> -->






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
      // console.log(this.list)
      // console.log(this.list.data.attributes.name)
      // console.log(this.list.data.attributes['en-wikipedia-url'])
      // console.log(this.list.data.attributes.perennial)

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
        // console.log(this.list.data.attributes.name)
        // console.log(this.list.data.attributes['en-wikipedia-url'])
        // console.log(this.list.data.attributes.perennial)
        console.log(this.list)
      })
      .catch(err => {
        console.log("ERROR", err)
      })
    }
  }
}
</script>


<style lang="scss">

@import "../scss/_variables.scss";

  .Results{
    @media only screen and (min-width: 768px) {display: flex; justify-content: center;}
    padding: 2rem;
    &__case{
      &__h3{
        font-size: 4rem;
        font-family: "Aleo", sans-serif;
        color: $boulder;
        margin-bottom: 0;
        margin-top: 2rem;
      }
      &__p{
        font-size: 1rem;
        font-family: "Aleo", sans-serif;
        color: $boulder;
        margin: 0;
        margin-bottom: 3rem;
      }
      &__link{
        margin-top: 1rem;
        color: $boulder;
        font-family: "Aleo", sans-serif;
        font-size: 1rem;
      }
      &__legal{
        font-size: .9rem;
        margin-top: .25rem;
      }
    }
  }


  .Search__button{
    cursor: pointer;
  }


</style>
