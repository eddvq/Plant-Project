<template>
  <div class="Blurb">
    <h3 class="Blurb__h3"><slot name="headerSlot"></slot></h3>
  </div>
  <hr class="Blurb__hr">
</template>

<script>
export default {
}
</script>

<style lang="scss" >

@import "../scss/_variables.scss";


.Blurb {
    padding: 1.5rem;
    @media only screen and (min-width: 768px) {padding: 2rem 9.5rem;};
    @media only screen and (min-width: 1110px) {padding: 2rem 12rem;}
    text-align: center;
    &__h3 {
        font-family: 'Aleo', serif;
        color: $boulder;
    }
    &__hr {
        border: 2px solid $pebble;
        margin: 0;
    }
}
</style>
