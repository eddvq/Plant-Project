<template lang="html">

    <div class="Gallery">
      <div class="Gallery__case" v-for="data in lists">
        <img class="Gallery__case__image" v-bind:src="list.included[0].attributes['fullsize-url']">
        <h3 class="Gallery__case__h3">{{this.list.data.attributes.name}}</h3>
        <a class="Gallery__case__p" v-bind:href="this.list.data.attributes['en-wikipedia-url']">Learn more</a>
      </div>
    </div>

</template>

<script>
export default {
  props: {
    lists: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import "../scss/_variables.scss";

.Results {
  //Results Bod
  &__body {
    margin: .75rem;
    min-width: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: .5rem;

      //Results Card
      &__card {
        background-color: $pebble;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        overflow: hidden;

          //Card H3
          &__h3 {
            font-family: 'Aleo', serif;
            text-align: center;
            margin-top: .75rem;
            margin-bottom: .75rem;
          }

          // //OPTION 2 WORKS
          &__search-image {
            width: 100%;
            height: 12.5rem;
            object-fit: cover;
            object-position: bottom;
          }
      }
  }
}


</style>

<!--
Figure out the visual bug later and double ckick bug later. Focus on
hooking the app to the API to run a search. Create the styles from the hw and go from there.  -->
