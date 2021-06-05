<template>
<div class="Blurb">
  <h1 class="Blurb__h2"> Let's help your garden get started! </h1>

  <form class="Search" action="index.html" method="post">
    <input class="Search__text-input" type="text" name="" value="Location of your garden">
    <input class="Search__submit-input" type="submit" name="" value="">
  </form>

</div>

<p class="Blurb__p">Gardening is a fun and rewarding hobby that anyone with soil can enjoy. This app helps you learn about the ideal plants that grow in your region.</p>

</template>


<script>
export default {
  name: 'Search',
}
</script>


<style lang="scss">
@import "../scss/_variables.scss";

.Blurb {
  height: 15rem;
  padding: 1.5rem;
  background-image: url(https://images.unsplash.com/photo-1444392061186-9fc38f84f726?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  &__h2{
    font-size: 2.5rem;
    color: $lily;
  }
}



</style>
