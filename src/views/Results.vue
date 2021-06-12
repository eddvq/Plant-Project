<template lang="html">
  <div class="Search">
    <h2 class="Search__h2">Let's meet the lucky plants!</h2>
      <router-link class="Search__button"  v-on:keyup.enter="logger">
        <span>Reveal the selection! </span>
        <i class="fas fa-seedling"></i>
      </router-link>
  </div>

  <div class="Container">
  <InfoTile v-bind:tiles="tiles"></InfoTile>
  </div>



  <p>Data is recieved through the <a href="https://github.com/Growstuff/growstuff/wiki/API">GrowStuff API</a></p>


</template>

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

      // fetch('https://jsonplaceholder.typicode.com/posts')
      // console.log(this.growLink.concat(this.submitted))

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
</script>

<style lang="scss">
@import "../scss/_variables.scss";

.Container {
  @media only screen and (min-width: 768px) {
  display: flex;
  padding: 2rem;
  }
  @media only screen and (min-width: 1110px) {
  display: flex;
  padding: 1.5rem 10rem;
  }
}

.Search {
    padding: 1.5rem;
    background-image: url("https://images.unsplash.com/photo-1474265648294-a4236906a526?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    text-align: center;
    @media only screen and (min-width: 768px) {
        height: 15rem;
        padding-left: 5rem;
        padding-right: 5rem;
    }
    @media only screen and (min-width: 1110px) {
      padding-left: 20rem;
      padding-right: 20rem;
    }
    &__h2 {
        font-size: 2.5rem;
        color: $lily;
        font-family: 'Aleo', serif;
        text-shadow: 2px 2px 6px #000000;
    }
    &__button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient($sun,$daisy);
        border-radius: 4px;
        font-family: 'Aleo', serif;
        font-weight: bold;
        font-size: 1.6rem;
        height: 4rem;
        color: $coal;
        text-decoration: none;
        box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        @media only screen and (min-width: 768px) {
            padding-left: 4rem;
            padding-right: 4rem;
        }
        @media only screen and (min-width: 1110px) {
            padding-left: 11rem;
            padding-right: 11rem;
        }
        .fa-seedling{
          padding-left: 1rem;
        }
    }
}
</style>
