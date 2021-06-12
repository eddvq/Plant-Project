<template>
<div class="Search">
  <h2 class="Search__h2">Let's help you meet some new plants!</h2>
    <router-link class="Search__button" to="/results" v-on:keyup.enter="logger">
      <span>Let's go! </span>
      <i class="fas fa-seedling"></i>
    </router-link>
</div>

<Header>
  <template v-slot:headerSlot>Gardening is a fun and rewarding hobby that anyone with soil can enjoy. This app helps you learn about random plants that you could grow in your backyard.</template>
</Header>
<div class="Container">
<InfoTile v-bind:tiles="tiles"></InfoTile>
</div>
</template>


<script>
import InfoTile from '@/components/InfoTile.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Search',
  data() {
    return {
      link: '/results/',

      tiles: [{
          headline: 'Meet a new plant',
          body: 'Identify plants that are suitable for your garden. You will spend more time planning and less time guessing what will work',
          image: 'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          alt: 'Person holding a bowl of tomatos'
        },
        {
          headline: "Gardens to be proud of",
          body: 'Learn about the plants growing requirments. Go from beginner gardener to expert in no time!',
          image: 'https://images.unsplash.com/photo-1599238302746-b9e00abf2df5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
          alt: 'Person digging a hole in their garden'
        },
        {
          headline: 'Plan by season',
          body: 'Learn about the different plants and vegetables that grow during the different seasons of the year',
          image: 'https://images.unsplash.com/photo-1592863690346-6b28b8effea8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
          alt: 'Person pruning a decorative shrub'
        }
      ]
    }
  },
  components: {
    InfoTile,
    Header,
  },
  methods: {
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
