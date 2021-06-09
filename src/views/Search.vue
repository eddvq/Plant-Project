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
<InfoTile>
  <template v-slot:tileHeadline>Plants you can grow</template>
  <template v-slot:tileBody>Identify plants that are suitable for your garden. You'll spend more time planning and less time guessing what will work</template>
</InfoTile>

<InfoTile>
  <template v-slot:tileHeadline>Gardens to be proud of</template>
  <template v-slot:tileBody>Learn about the plants growing requirments. Go from beginner gardener to expert in no time!</template>
</InfoTile>

<InfoTile>
  <template v-slot:tileHeadline> {{tiles[0].headline}}</template>
</InfoTile>
<!-- <div class="Gallery">
  <div class="Gallery__case">
    <img class="Gallery__case__image" src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Gardener holding bowl of tomatos">
    <h3 class="Gallery__case__h3">Plants you can grow</h3>
    <p class="Gallery__case__p">Identify plants that are suitable for your garden. You'll spend more time planning and less time guessing what will work</p>
  </div>
</div> -->
<!-- <div class="Gallery">
  <div class="Gallery__case">
    <img class="Gallery__case__image" src="https://images.unsplash.com/photo-1599238302746-b9e00abf2df5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" alt="Gardener holding bowl of tomatos">
    <h3 class="Gallery__case__h3">Gardens to be proud of</h3>
    <p class="Gallery__case__p">Learn about the plants growing requirments. Go from beginner gardener to expert in no time!</p>
  </div>
</div> -->
</template>


<script>
import InfoTile from '@/components/InfoTile.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Search',
  data() {
    return {
      tiles: [
        {
        headline: 'Plants you can grow',
        body: 'Identify plants that are suitable for your garden',
        image: 'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: 'Image of a person holding tomatos'
        },
        {
        headline: "Plant name 2",
        body: 'Body of the copy',
        image: 'https://images.unsplash.com/photo-1599238302746-b9e00abf2df5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
        alt: 'Image of person tending garden'
        }
    ]
    }
  },
  methods: {
    hi(){
      console.log(this.tiles[1]);
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

// .Gallery {
//   padding: 1.5rem;
//   &__case{
//     display: flex;
//     flex-direction: column;
//     &__image{
//       width: 100%;
//       margin-top: 1rem;
//     }
//     &__h3{
//       font-family: 'Aleo', serif;
//       color: $boulder;
//       margin-bottom: .75rem;
//       text-decoration: underline;
//       text-decoration-color: $arbory;
//     }
//     &__p{
//       font-family: 'Aleo', serif;
//       margin: 0;
//     }
//   }
// }

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
