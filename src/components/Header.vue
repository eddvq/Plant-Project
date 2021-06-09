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

<style lang="scss">

@import "../scss/_variables.scss";


.Blurb {
    padding: 1.5rem;
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
