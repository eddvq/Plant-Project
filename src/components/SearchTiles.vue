<template lang="html">

  <!-- <div class="Results__body" id="card-body"> FOR REFERENCE
    <div v-bind:class="bodyClass" v-for="plant in plantBank">
      <h3 v-if="plant.name.length > 16" v-bind:class="threeClass"> {{ truncater(plant.name) }} </h3>
      <h3 v-else v-bind:class="threeClass"> {{ plant.name }} </h3>
      <img v-if="plant.image.length > 2" v-bind:class="imageClass" v-bind:src="plant.image" v-bind:alt="plant.alt">
      <img v-else v-bind:class="imageClass" v-bind:src="imageBackup" v-bind:alt="plant.alt">
    </div>
  </div> -->


    <!-- <div class="Results__body" id="card-body">
      <div v-bind:class="bodyClass" v-for="plant in plantBank">
        <h3 v-if="plant.name.length > 16" v-bind:class="threeClass"> {{ truncater(plant.name) }} </h3>
        <h3 v-else v-bind:class="threeClass"> {{ plant.name }} </h3>
        <img v-if="plant.image.length > 2" v-bind:class="imageClass" v-bind:src="plant.image" v-bind:alt="plant.alt">
        <img v-else v-bind:class="imageClass" v-bind:src="imageBackup" v-bind:alt="plant.alt">
      </div>
    </div> -->


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
