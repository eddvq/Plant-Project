<template>
<form class="Search" action="index.html" method="post">
  <h2 class="Search__h2"> Let's help your garden get started! </h2>
  <div class="Search__controls">
    <input class="Search__controls__text-input" type="text" name="location" value="Zip Code, State, Country" onfocus="this.value=''">
    <button class="Search__controls__submit-input">
      <i class="Search__controls__submit-input__i fas fa-search"></i>
    </button>
  </div>
</form>
<Header>
  <template v-slot:headerSlot>Gardening is a fun and rewarding hobby that anyone with soil can enjoy. This app helps you learn about the ideal plants that grow in your region.</template>
</Header>


<InfoTile v-bind:tiles="tiles"></InfoTile>
</template>


<script>
import InfoTile from '@/components/InfoTile.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Search',
  data() {
    return {
      tiles: [{
          headline: 'Plants you can grow',
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
          image: 'https://images.unsplash.com/photo-1575218823251-f9d243b6f720?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          alt: 'An assortment of vegetables that are in season'
        }
      ]
    }
  },
  components: {
    InfoTile,
    Header,
  }
}
</script>


<style lang="scss">
@import "../scss/_variables.scss";

.Search {
    padding: 1.5rem;
    background-image: url("https://images.unsplash.com/photo-1474265648294-a4236906a526?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 768px) {
        height: 15rem;
        text-align: center;
        padding-left: 5rem;
        padding-right: 5rem;
    };
    &__h2 {
        font-size: 2.5rem;
        color: $lily;
        font-family: 'Aleo', serif;
        text-shadow: 2px 2px 6px #000000;
    }
    &__controls {
        display: flex;
        @media only screen and (min-width: 768px) {
            padding-left: 4rem;
            padding-right: 4rem;
        };
        @media only screen and (min-width: 1110px) {
            padding-left: 11rem;
            padding-right: 11rem;
        };
        &__text-input {
            width: 100%;
            padding: 1.25rem;
            border: none;
            border-radius: 2px 0 0 2px;
        }
        &__submit-input {
            width: 5rem;
            background-color: $pebble;
            border: none;
            border-radius: 0 2px 2px 0;
            &__i {
                font-size: 1.75rem;
                cursor: pointer;
            }
        }
    }
}
</style>
