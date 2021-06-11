<!-- <template>
<div class="Gallery">
  <div class="Gallery__case">
    <img class="Gallery__case__image" src="https://images.unsplash.com/photo-1599238302746-b9e00abf2df5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" alt="Gardener holding bowl of tomatos">
    <h3 class="Gallery__case__h3">
      <slot name="tileHeadline"></slot>
    </h3>
    <p class="Gallery__case__p">
      <slot name="tileBody">Secondary copy</slot>
    </p>
  </div>
</div>
<hr class="Divider">

</template>

<script>
export default {}
</script>



<style lang="scss">
@import "../scss/_variables.scss";

.Divider {
  border: 2px solid $pebble;
  margin: 0;
}

.Gallery {
    padding: 1.5rem;
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
</style> -->




<template>
<div class="Gallery" v-for="data in tiles">
  <div class="Gallery__case">
    <img class="Gallery__case__image" v-bind:src="data.image" alt="data.alt">
    <h3 class="Gallery__case__h3">{{data.headline}}</h3>
    <p class="Gallery__case__p">{{data.body}}</p>
  </div>
</div>

</template>

<script>
export default {
  props: {
    tiles:{
      type: Array,
      required: true
    }
  }
}
</script>



<style lang="scss">
@import "../scss/_variables.scss";


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
